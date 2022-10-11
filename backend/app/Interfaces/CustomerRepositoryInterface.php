<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface CustomerRepositoryInterface
{
    public function create(Request $request);

    public function findByEmail(string $email);

    public function findByCpf(string $cpf);

}
