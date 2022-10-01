<?php

namespace App\Repositories;

use App\Interfaces\StoreRepositoryInterface;
use App\Models\Store;
use Illuminate\Http\Request;

/**
 * Class CustomerRepository.
 */
class StoreRepository implements StoreRepositoryInterface
{
    private $store;

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

    public function __construct(Store $store)
    {
        $this->store = $store;
    }

    /**
     * @param Request $request
     * @return string $createdStore
     */
    public function create(Request $request): string
    {
        $this->store->fill($request->all());

        $createdStore = $this->store->save();

        if (!$createdStore) {
            return false;
        }

        $createdStore = "Loja cadastrado com sucesso!";

        return $createdStore;
    }
}
