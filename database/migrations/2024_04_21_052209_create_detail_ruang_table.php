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
        Schema::create('detail_ruang', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('foto');
            $table->uuid('color_id');
            $table->uuid('ruangan_id');
            $table->foreign('color_id')->references('id')->on('color')->onDelete('cascade');
            $table->foreign('ruangan_id')->references('id')->on('ruangan')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_ruang');
    }
};
