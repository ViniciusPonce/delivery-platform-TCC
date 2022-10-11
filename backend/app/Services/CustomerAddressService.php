<?php

namespace App\Services;

use App\Interfaces\CustomerAddressRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class CustomerAddressService {

    private CustomerAddressRepositoryInterface $customerAddressRepository;

    public function __construct(CustomerAddressRepositoryInterface $customerAddressRepository)
    {
        $this->customerAddressRepository = $customerAddressRepository;
    }

    public function create(Request $request, $customer_id)
    {
        $response = $this->customerAddressRepository->create($request->all(), $customer_id);

        if (!$response) {
            throw new Exception('Falha ao cadastrar endereço, verifique seus dados!', 400);
        }

        return $response;
    }
}