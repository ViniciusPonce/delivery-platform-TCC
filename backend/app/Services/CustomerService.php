<?php

namespace App\Services;

use App\Interfaces\CustomerRepositoryInterface;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerService {

    private CustomerRepositoryInterface $customerRepository;

    public function __construct(CustomerRepositoryInterface $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    /**
     * Valida as regras para criar um novo cliente
     * @param Request $request
     * @return array $response
     */
    public function create(Request $request): array
    {
        $uniqueData = $request->only(['email', 'cpf']);
        $existCustomer = $this->checkExist($uniqueData);

        $this->treatsPassword($request);

        $customerSeller = !$existCustomer && $this->isSeller($request) ?? false;

        if ($customerSeller) {
            $customerCreated = $this->customerRepository->create($request, $customerSeller);
        }

        if (!$existCustomer) {
            $customerCreated = $this->customerRepository->create($request);
        }

        if (!$customerCreated) {
            throw new Exception("Ocorreu um erro ao tentar se cadastrar, tente novamente!", 400);
        }

        $response = $this->setSuccessMessageResponse($customerCreated);

        return $response;
    }

    /**
     * Verifica se se ja tem o E-mail ou CPF cadastrado
     * @param array $uniqueData E-mail e CPF
     * @return bool
     */
    private function checkExist(array $uniqueData): bool
    {
        $existEmail = $this->customerRepository->findByEmail($uniqueData['email']);
        $existCpf = $this->customerRepository->findByCpf($uniqueData['cpf']);
        
        if ($existEmail || $existCpf) {
            throw new Exception('E-mail ou CPF ja cadastrado, verifique seus dados!', 400);
        }

        return false;
    }

    /**
     * Define a mensagem de retorno do cadastro
     * @return array
     */
    private function setSuccessMessageResponse(): array
    {
        return [
            'message' => 'Cliente cadastrado com sucesso!',
            'code' => 200
        ];
    }

    /**
     * Verifica se o cadastro é do tipo seller
     * 
     * @param Request $request
     * @return bool
     */
    private function isSeller(Request &$request): bool
    {
        if (!isset($request['is_seller'])) {
            $request['is_seller'] = false;
            $request['cnpj'] = null;
            $request['state_inscription'] = null;
            return false;
        }

        return true;
    }

    /**
     * Trata o formato de senha 
     * 
     * @param Request $request
     */
    private function treatsPassword(Request &$request) 
    {
        unset($request['confirmPassword']);
        $request['password'] = Hash::make($request['password']);
    }
}