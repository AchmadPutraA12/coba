<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Ruangan extends Model
{
    use HasFactory;

    protected $table = 'ruangan';
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
}
