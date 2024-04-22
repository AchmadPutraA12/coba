<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Todo extends Model
{
    use HasFactory;
    protected $table = 'todo';
    protected $keyType = 'string';

    protected $fillable = [
        'users_id',
        'name',
        'is_complete'
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
