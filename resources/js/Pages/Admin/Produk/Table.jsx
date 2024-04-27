import React from 'react';
import DataTable from '@/Components/DataTable';

const Table = ({ produks }) => {
  // Definisikan kolom-kolom tabel
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 150 },
    { 
      field: 'foto', 
      headerName: 'Foto', 
      width: 250, 
      renderCell: (params) => (
        <img 
          src={`/storage/${params.value}`} 
          alt="Foto Produk" 
          style={{ width: '50%', height: 'auto' }} 
        />
      ) 
    },
  ];

  // Buat baris-baris untuk tabel
  const rows = produks.map((produk, index) => ({
    id: index + 1,
    name: produk.name,
    foto: produk.foto, // Anda perlu menyesuaikan ini sesuai dengan struktur data produk Anda
  }));

  return (
    <DataTable columns={columns} rows={rows} />
  );
}

export default Table;
