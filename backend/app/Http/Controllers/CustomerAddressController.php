<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CustomerAddressService;
use App\Exceptions\ApiException;

class CustomerAddressController extends Controller
{
    private CustomerAddressService $customerAddressService;

    public function __construct(CustomerAddressService $customerAddressService)
    {
        $this->customerAddressService = $customerAddressService;
    }

    public function create(Request $request, $customerId)
    {
        try {

            $response = $this->customerAddressService->create($request, $customerId);
            
        } catch (\Throwable $t) {
            $response = ApiException::handler($t->getMessage(), $t->getCode());
            return response()->json($response);
        }

        return $response;
    }
}
