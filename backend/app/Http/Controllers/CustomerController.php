<?php

namespace App\Http\Controllers;

use App\Exceptions\ApiException;
use Illuminate\Http\Request;
use App\Services\CustomerService;


class CustomerController extends Controller
{
    private CustomerService $customerService;

    public function __construct(CustomerService $customerService)
    {
        $this->customerService = $customerService;
    }

    /**
     * Controlador para criar cadastro de um novo cliente
     * @param Request $request
     */
    public function create(Request $request)
    {

        try {
            $response = $this->customerService->create($request);

            return response()->json($response);
        } catch (\Throwable $t) {
            $response = ApiException::handler($t->getMessage(), $t->getCode());
            return response()->json($response);
        }
    }

    /**
     * Altera os dados de um cadastro
     * @param int $id
     */
    public function update()
    {

    }
}
