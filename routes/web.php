<?php

use App\Http\Controllers\Admin\ColorController;
use App\Http\Controllers\Admin\DetailRuanganController;
use App\Http\Controllers\Admin\ProdukController;
use App\Http\Controllers\Admin\RuanganController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('dashboard');
    Route::get('/todo', [TodoController::class,'index'])->name('todo.index');
    Route::post('/todo',[TodoController::class,'store'])->name('todo.store');
    Route::get('/todo/edit/{todo}',[TodoController::class,'edit'])->name('todo.edit');
    Route::patch('/todo/edit/{todo}',[TodoController::class,'update'])->name('todo.update');
    Route::patch('/todo/edit-complete/{todo}',[TodoController::class,'updateComplete'])->name('todo.updateComplete');
    Route::delete('/todo/{todo}/delete', [TodoController::class, 'destroy'])->name('todo.delete');

    Route::get('/produk', [ProdukController::class,'index'])->name('produk.index');
    Route::post('/produk', [ProdukController::class,'store'])->name('produk.store');
    Route::get('/color', [ColorController::class,'index'])->name('color.index');
    Route::get('/detail-ruangan', [DetailRuanganController::class,'index'])->name('detail_ruangan.index');
    Route::get('/ruangan', [RuanganController::class,'index'])->name('ruangan.index');
});

require __DIR__.'/auth.php';
