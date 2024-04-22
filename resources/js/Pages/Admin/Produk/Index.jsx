import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import Table from '@/Pages/Admin/Produk/Table';
import Create from '@/Pages/Admin/Produk/Create';
import { router, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Index = ({ produks }) => {
  
  const [showCreate, setShowCreate] = useState(true);
  const { flash, errors } = usePage().props;
  const [formData, setFormData] = useState({
    name: '',
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value // Jika input adalah file, gunakan files[0], jika bukan, gunakan value
    }));
  };

  useEffect(() => {
    if (flash.success) {
      Swal.fire({
        title: 'Pesan',
        text: flash.success,
        icon: 'success',
      });
      // Setelah pengiriman berhasil, atur nilai input kembali ke kosong
      setFormData({ ...formData, name: '' });
      // Reset nilai input file
      document.getElementById('dropzone-file').value = '';
    }
  }, [flash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post('/produk', formData);
  };

  const toggleView = () => {
    setShowCreate((prevShowCreate) => !prevShowCreate);
  };

  return (
    <AdminLayout>
      <div className='px-16'>
        <button
          onClick={toggleView}
          className={`px-4 py-2 rounded-md mr-4 ${showCreate ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
            }`}
        >
          {showCreate ? 'Show Table' : 'Show Create'}
        </button>

        <div className='py-10 justify-center items-center flex'>
          {showCreate ? (
            <Create handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} errors={errors} />
          ) : (
            <Table produks={produks} />
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Index;
