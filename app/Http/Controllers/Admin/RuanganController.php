<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Ruangan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RuanganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ruangan = Ruangan::all();

        return Inertia::render('Admin/Produk/Index', [
            'ruangan' => $ruangan,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'foto' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Mengubah nama file agar tidak menyertakan /public di awal
        $fotoPath = $request->file('foto')->storeAs('public/foto/ruangan', uniqid() . '.' . $request->file('foto')->getClientOriginalName());

        // Menghapus 'public' dari path yang disimpan dalam database
        $data['foto'] = str_replace('public/', '', $fotoPath);

        Ruangan::create($data);

        return back()->with('success', 'Produk berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
