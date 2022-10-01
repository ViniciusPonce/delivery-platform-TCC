<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use App\Models\Tenant;
use App\Util\TenantConnector;
use Illuminate\Support\Facades\DB;

class CreateTenant extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenant:create {store} {customer}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected $fillable = ['host'];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $customer = $this->argument('customer');

        $tenant = $this->getTenant($customer);

        $this->createDatabase($tenant);

        $tenant->save();

        TenantConnector::connect($tenant);

        $this->call('migrate', ['--database' => 'mysql']);

        return true;
    }

    /**
     * Monsta os dados como o novo banco de dados a ser criado
     * do novo cliente
     * 
     * @param array $customer
     * @return Tenant
     */
    private function getTenant($customer)
    {
        $data['store_name'] = strval($this->argument('store'));
        $data['host'] = config('database.connections.mysql.host');
        $data['port'] = config('database.connections.mysql.port');
        $data['database_name'] = 'DB'.Str::slug($data['store_name'], '');
        $data['username'] = 'Vinicius';
        $data['password'] = Crypt::encrypt([$data['username'], $data['store_name']]);
        $data['customer_id'] = $customer['id'];
        $data['is_active'] = true;

        $tenant = new Tenant();
        $tenant->fill($data);

        return $tenant;
    }

    /**
     * Cria o banco de dados da nova loja
     * 
     * @param Tenant $tenant
     * @return bool|\Exception
     */
    private function createDatabase(Tenant $tenant)
    {
        try {
            DB::statement("CREATE DATABASE {$tenant->database_name};");
        }catch(\Exception $e) {
            $this->error($e->getMessage());
        }
    }
}
