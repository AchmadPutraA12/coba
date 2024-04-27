<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Produk extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'produk';
    protected $keyType = 'string';

    protected $fillable = [
        'name',
        'foto',
    ];
}
