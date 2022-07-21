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
        'birthday',
        'cpf',
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
        'cpf' => 'string',
        'phone' => 'string',
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
        'phone' => 'required|max:11'
    ];
}
