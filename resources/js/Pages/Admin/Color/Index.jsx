import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import Table from '@/Pages/Admin/Color/Table';
import Create from '@/Pages/Admin/Color/Create';

const Index = ({ todos }) => {
  const [showCreate, setShowCreate] = useState(true);

  const toggleView = () => {
    setShowCreate((prevShowCreate) => !prevShowCreate);
  };

  return (
    <AdminLayout>
      <div className='px-16'>
        <button
          onClick={toggleView}
          className={`px-4 py-2 rounded-md mr-4 ${
            showCreate ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
          }`}
        >
          {showCreate ? 'Show Table' : 'Show Create'}
        </button>

        <div className='py-10 justify-center items-center flex'>
          {showCreate ? <Create /> : <Table todos={todos} />}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Index;