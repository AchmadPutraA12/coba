import React from 'react';
import DataTable from '@/Components/DataTable';

const Table = ({ produks }) => {
  // Memeriksa apakah produk telah dimuat dengan benar
  console.log(produks);

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
          src={`storage/foto/produk/${params.value}`} 
          alt="Foto Produk" 
          style={{ width: '100%', height: 'auto' }} 
        />
      ) 
    },
  ];

  // Buat baris-baris untuk tabel
  const rows = produks.map((produk, index) => ({
    id: index + 1,
    name: produk.name,
    foto: produk.foto, // Pastikan produk.foto menyimpan bagian path yang benar dari URL gambar
  }));

  return (
    <DataTable columns={columns} rows={rows} />
  );
}

export default Table;
