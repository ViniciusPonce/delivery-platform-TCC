<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerAddress extends Model
{
    public $table = 'customer_address';

    public const CREATED_AT = 'created_at';
    public const UPDATED_AT = 'updated_at';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'customer_id',
        'cep',
        'street',
        'number',
        'district',
        'main_address'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'customer_id' => 'integer',
        'cep' => 'string',
        'street' => 'string',
        'number' => 'string',
        'district' => 'string',
        'main_address' => 'string',
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'customer_id' => 'required',
        'cep' => 'required',
        'street' => 'required',
        'number' => 'required',
        'district' => 'required',
        'main_address' => 'required:max:1',
    ];

    public function customer()
    {
        return $this->belongsTo('App\Models\Customer');
    }
}
