<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::check()) {
            $todos = Todo::where('users_id', auth()->user()->id)
                        ->latest()
                        ->paginate(5);
            return Inertia::render('User/Todo', [
                'todos' => $todos,
            ]);
        } else {
            return redirect()->route('login');
        }
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
        $data = $request->validate(
            [
                'name' => 'required|min:3',
                'is_complete' => 'boolean'
            ],
            [
                'name.required' => "Nama todo tidak boleh kosong",
                'name.min' => "Minimal 3 huruf"
            ]
        );

        $data['users_id'] = auth()->user()->id;

        Todo::create($data);

        return back()->with('success', 'Todo berhasil disimpan');
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
    public function edit(Todo $todo)
    {
        return Inertia::render('User/Edit', [
            'todo' => $todo
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        $data = $request->validate([
            'name' => 'required|min:3'
        ]);

        $todo->update($data);

        return redirect()->route('todo.index')->with('success', 'Data berhasil diupdate');
    }
    public function updateComplete(Request $request, Todo $todo)
    {
        $data = $request->validate([
            'is_complete' => 'boolean'
        ]);


        $todo->update($data);
        return back()->with('success', 'Todo sudah diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();
        return back()->with('success', 'Data berhasil dihapus');
    }
}
