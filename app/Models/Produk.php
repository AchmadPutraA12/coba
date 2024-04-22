<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Produk extends Model
{
    use HasFactory;

    protected $table = 'produk';
    protected $keyType = 'string';

    protected $fillable = [
        'name',
        'foto',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->setAttribute($model->getKeyName(), (string) Str::uuid());
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }

    public function getFotoUrlAttribute()
    {
        // Ganti 'nama_disk' dengan nama disk penyimpanan Anda
        return $this->foto ? asset("storage/{$this->foto}") : null;
    }
}
