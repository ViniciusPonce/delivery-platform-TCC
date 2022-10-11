<?php

namespace App\Util;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Crypt;
use App\Models\Tenant;

class TenantConnector
{
    public static function connect(Tenant $tenant)
    {
        DB::purge('mysql');

        $config = Config::get('database.connections.mysql');
        $config['host'] = $tenant->host;
        $config['port'] = $tenant->port;
        $config['database'] = $tenant->database_name;
        // $config['username'] = $tenant->username;
        // $config['password'] = Crypt::decrypt($tenant->password);

        Config::set("database.connections.mysql", $config);
    }
}