<?php

namespace App\Interfaces;

interface CustomerAddressRepositoryInterface
{
    public function create($request, $customerId);
}