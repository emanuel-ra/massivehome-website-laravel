<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->string('model')->nullable();
            $table->string('description')->nullable();
            $table->string('image_url')->nullable();
            $table->decimal('market_price', total: 8, places: 2);
            $table->decimal('wholesale_price', total: 8, places: 2);
            $table->decimal('member_price', total: 8, places: 2);
            $table->decimal('box_price', total: 8, places: 2);
            $table->decimal('vip_price', total: 8, places: 2);
            $table->decimal('premium_price', total: 8, places: 2);
            $table->decimal('plus_price', total: 8, places: 2);
            $table->enum('status', ['enable', 'disable', 'deleted']);
            $table->integer('external_id')->nullable();
            $table->unsignedSmallInteger('brand_id')->nullable();
            $table->timestamps();
            $table->softDeletes('deleted_at', precision: 0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
