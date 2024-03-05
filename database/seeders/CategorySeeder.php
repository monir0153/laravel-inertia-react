<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::query()->delete();
        $category = [];
        for ($i = 1; $i <= 1000; $i++) {
            $category[] = [
                "name" => "Category" . $i,
                "description" => fake()->paragraph(1),
                'created_at' => now(),
            ];
        }
        Category::insert($category);
    }
}
