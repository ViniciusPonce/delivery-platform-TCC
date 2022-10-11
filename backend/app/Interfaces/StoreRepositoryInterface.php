<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface StoreRepositoryInterface
{
    public function create(Request $request);
}
