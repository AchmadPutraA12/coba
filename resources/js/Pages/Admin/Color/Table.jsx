import React from 'react';
import DataTable from '@/Components/DataTable';

const Table = ({ todos }) => {
  const columns = [
    { field: 'index', headerName: 'No', width: 80 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'is_complete', headerName: 'Complete', width: 250 },
  ];

  const rows = todos.data.map((todo, index) => ({
    id: todo.id, // Menambahkan id sebagai properti unik
    index: index + 1, // Nomor urut dimulai dari 1
    name: todo.name,
    is_complete: todo.is_complete ? 'Completed' : 'Incomplete',
    // Anda dapat menambahkan data lain ke dalam objek rows sesuai dengan kolom yang Anda tambahkan di atas
  }));

  return (
    <DataTable columns={columns} rows={rows} />
  );
}

export default Table;
