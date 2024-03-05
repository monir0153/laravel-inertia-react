<?php

namespace App\Repositories;

use App\Models\Category;
use App\Repositories\Interfaces\CategoryInterface;

class CategoryRepository implements CategoryInterface
{
    private $model = Category::class;

    public function getAll()
    {
        return $this->model::latest()->get();
    }
    public function getById($id)
    {
        return $this->model::find($id);
    }
    public function create($data)
    {
        return $this->model::create($data);
    }
    public function update($id, $data)
    {
        return $this->model::find($id)->update($data);
    }
}
