<?php

namespace App\Repositories;

use App\Interfaces\CustomerRepositoryInterface;
use App\Models\Customer;
use Illuminate\Http\Request;

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
    public function create(Request $request): string
    {
        $this->customer->fill($request->all());

        $createdCustomer = $this->customer->save();

        if (!$createdCustomer) {
            return false;
        }

        $createdCustomer = "Cliente cadastrado com sucesso!";

        return $createdCustomer;
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
}
