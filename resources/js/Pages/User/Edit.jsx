import { Head, router, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import React, { useState } from 'react'

const Edit = ({ todo }) => {
    const { flash, errors } = usePage().props;

    const { data, setData, post } = useForm({
        name: todo.name,
    });

    const [processing, setProcessing] = useState(false);

    const handleUpdate = (e) => {
        setProcessing(true);
        e.preventDefault();
        router.post(`/todo/edit/${todo.id}`, {
            _method: "patch",
            name: data.name,
        });
    };

    const handleChange = (e) => {
        setData('name', e.target.value)
    };

    return (
        <>
            <Head title='Edit Data'/>
            <AdminLayout>
                <div className="items-center justify-center flex-col px-12">
                    <h2 className="font-semibold text-4xl my-8 text-center">
                        Edit Todo : {todo.name}
                    </h2>

                    <form onSubmit={handleUpdate}>
                        <div className="flex gap-4 items-center mb-6">
                            <input
                                type="text"
                                placeholder="Enter todo here"
                                className="px-4 py-2 rounded-md grow"
                                onChange={handleChange}
                                value={data.name}
                            />
                            <button className="py-2 px-4 rounded-md bg-indigo-500 text-white">
                                {processing ? "Processing..." : "UPDATE"}
                            </button>
                        </div>
                        {errors.name && (
                            <p className="text-red-700 text-sm">
                                {errors.name}
                            </p>
                        )}
                    </form>
                </div>
            </AdminLayout>
        </>

    )
}

export default Edit