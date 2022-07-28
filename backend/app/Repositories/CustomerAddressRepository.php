<?php

namespace App\Repositories;

use App\Interfaces\CustomerAddressRepositoryInterface;
use App\Models\CustomerAddress;

class CustomerAddressRepository implements CustomerAddressRepositoryInterface 
{
    private $customerAddress;

    public function __construct(CustomerAddress $customerAddress)
    {
        $this->customerAddress = $customerAddress;
    }

    public function create($request, $customerId)
    {
        $this->customerAddress->fill($request);
        $this->customerAddress->setCustomerId($customerId);

        $response = $this->customerAddress->save();

        if (!$response) {
            return false;
        }

        return $this->customerAddress;
    }

}