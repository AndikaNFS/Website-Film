<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature 1', 'feature 2']),
            ],
            [
                'name' => 'Premium',
                'price' => 500000,
                'active_period_in_months' => 6,
                'features' => json_encode(['feature 1', 'feature 2', 'feature 3', 'feature 4']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
