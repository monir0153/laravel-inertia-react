<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Brand::query()->delete();
        $data = [];
        for ($i = 0; $i < 10000; $i++) {
            $data[] = [
                'name' => fake()->name,
                'description' => fake()->paragraph(2),
            ];
        }
        array_chunk($data, 8000);
        Brand::insert($data);
    }
}
