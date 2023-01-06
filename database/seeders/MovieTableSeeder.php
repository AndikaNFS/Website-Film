<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Spongebob',
                'slug' => 'spongebob',
                'video_url' => 'https://www.youtube.com/watch?v=yVIAtgvte68',
                'category' => 'Comedy',
                'thumbnail' => '',
                'rating' => 8.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'Spongebob',
                'slug' => 'spongebob',
                'category' => 'Comedy',
                'video_url' => 'https://www.youtube.com/watch?v=UQdmNHRqXsw',
                'thumbnail' => '',
                'rating' => 7.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'Spongebob',
                'slug' => 'spongebob',
                'video_url' => 'https://www.youtube.com/watch?v=dB_v7ibRFoY',
                'category' => 'Comedy',
                'thumbnail' => '',
                'rating' => 9.3,
                'is_featured' => 0,
            ],
        ];

        Movie::insert($movies);
    }
}
