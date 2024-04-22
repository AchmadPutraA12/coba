import React from 'react';
import DataTable from '@/Components/DataTable';
import { randomTraderName, randomEmail } from '@mui/x-data-grid-generator';

const Table = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  ];
  
  const rows = [
    { id: 1, name: randomTraderName(), email: randomEmail(), age: 25 },
    { id: 2, name: randomTraderName(), email: randomEmail(), age: 36 },
    { id: 3, name: randomTraderName(), email: randomEmail(), age: 19 },
    { id: 4, name: randomTraderName(), email: randomEmail(), age: 28 },
    { id: 5, name: randomTraderName(), email: randomEmail(), age: 23 },
    { id: 6, name: randomTraderName(), email: randomEmail(), age: 27 },
    { id: 7, name: randomTraderName(), email: randomEmail(), age: 18 },
    { id: 8, name: randomTraderName(), email: randomEmail(), age: 31 },
    { id: 9, name: randomTraderName(), email: randomEmail(), age: 24 },
    { id: 10, name: randomTraderName(), email: randomEmail(), age: 35 },
  ];

  // const rows = todos.data.map((todo, index) => ({
    
  // }));

  return (
    <DataTable columns={columns} rows={rows} />
  );
}

export default Table;
