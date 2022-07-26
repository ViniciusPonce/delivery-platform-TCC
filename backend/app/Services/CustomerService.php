<?php

namespace App\Services;

use App\Interfaces\CustomerRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

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

        if ($existEmail) {
            throw new Exception('E-mail ja cadastrado, verifique seus dados!', 400);
        }

        if ($existCpf) {
            throw new Exception('CPF ja cadastrado, verifique seus dados!', 400);
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
}