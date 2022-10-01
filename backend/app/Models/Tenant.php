<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    protected $connection = 'mysql';

    protected $table = 'stores';

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $fillablle = [
        'store_name',
        'host',
        'port',
        'database_name',
        'username',
        'password',
        'customer_id'
    ];

    public function customer()
    {
        return $this->belongsTo('App\Models\Customer', 'foreign_key');
    }
}
