<?php

namespace App\Repositories\Interfaces;

interface CategoryInterface
{
    public function getAll();
    public function getById($id);
    public function create($data);
    public function update($id, $data);
}
