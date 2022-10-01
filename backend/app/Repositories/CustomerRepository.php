<?php

namespace App\Repositories;

use App\Console\Commands\CreateTenant;
use App\Interfaces\CustomerRepositoryInterface;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

/**
 * Class CustomerRepository.
 */
class CustomerRepository implements CustomerRepositoryInterface
{
    private $customer;

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id',
        'name',
        'email',
        'cpf',
        'birthday',
        'cellphone'
    ];

    public function __construct(Customer $customer)
    {
        $this->customer = $customer;
    }


    /**
     * @param Request $request
     * @return string $createdCustomer
     */
    public function create(Request $request, $customerSeller = false): string
    {
        $this->customer->fill($request->all());

        $createdCustomer = $this->customer->save();

        if ($createdCustomer && $customerSeller) {
            $createdStore = $this->createStore($this->customer);
        }

        if (!$createdCustomer || $createdStore) {
            return false;
        }

        $createdCustomer = 'Cadastro realizado com sucesso!';

        return $createdCustomer;
    }

    /**
     * Cria um cadastro de um cliente que possui uma loja
     * 
     * @param Customer $customer
     * @return string $createdCustomer
     */
    public function createStore(Customer $customer): string
    {
        $response = Artisan::call('tenant:create', [
            'store' => $this->generateStoreId(),
            'customer' => $customer
        ]);

        if (!$response) {
            return false;
        }

        return $response;
    }

    /**
     * @param string $email
     * @return bool 
     */
    public function findByEmail(string $email): bool
    {
        $exist = $this->customer->where('email', $email)->first();

        if (!$exist) {
            return false;
        }

        return true;

    }

    /**
     * Verifica se o CPF ja esta cadastrado
     * @param string $cpf
     * @return bool
     */
    public function findByCpf(string $cpf): bool
    {
        $exist = $this->customer->where('cpf', $cpf)->first();

        if (!$exist) {
            return false;
        }

        return true;
    }

    /**
     * Gera um codigo para ser atribuido aa loja e ao bd
     * 
     * @return int
     */
    private function generateStoreId() 
    {
        return random_int(100, 999999);
    }
}
