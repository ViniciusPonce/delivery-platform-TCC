<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    
    public $table = 'customer';

    public const CREATED_AT = 'created_at';
    public const UPDATED_AT = 'updated_at';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'birthday',
        'is_seller',
        'cpf',
        'cnpj',
        'state_inscription',
        'phone'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'email' => 'string',
        'birthday' => 'date',
        'is_seller' => 'string',
        'cpf' => 'string',
        'cnpj' => 'string',
        'state_inscription',
        'phone' => 'string',

    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required',
        'email' => 'required',
        'birthday' => 'required',
        'cpf' => 'required|max:11',
        'phone' => 'required|max:11',
        'password' => 'max:16'
    ];
}
