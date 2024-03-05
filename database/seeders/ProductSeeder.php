<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::query()->delete();
        $data = [];
        for ($i = 0; $i < 5000; $i++) {
            $data[] = [
                'name' => fake()->name,
                'description' => fake()->paragraph(2),
                'price' => fake()->randomFloat(2, 0, 1000),
                'quantity' => fake()->randomNumber(3),
                'scan_code' => fake()->ean13,
                'category_id' => rand(1, 100),
                'brand_id' => rand(1, 100),
                'created_at' => now()
            ];
        }
        array_chunk($data, 1000);
        Product::insert($data);
    }
}
