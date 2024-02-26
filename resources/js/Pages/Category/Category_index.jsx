import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Table from '@/Components/Table';
import React from 'react'
import Modal from '@/Components/Modal';

function Category_index({ auth, category }) {
    const { data, setData, delete: destroy } = useForm();

    const columns = [
        { header: 'SL', key: 'id' },
        { header: 'Category', key: 'name' },
        { header: 'Description', key: 'description' },
        {
            header: 'Action', render: (row) =>
                <div className='flex justify-between gap-3'>
                    <button className='bg-gray-100 px-4 py-1 text-gray-800 rounded font-medium' onClick={() => handleEdit(row)}>Edit</button>
                    <button className='bg-gray-100 px-4 py-1 text-gray-800 rounded font-medium' onClick={() => handleDelete(row)}>Delete</button>
                </div>
        },
    ];

    const handleEdit = (row) => {
        console.log("category: ", row.category,);
        // < Modal />
    };

    const handleDelete = (row) => {
        const confirm = window.confirm('Are you sure you want to sure delete this category');
        if (confirm) {
            destroy(route('category.destroy', row.id));
        }
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Categories</h2>}
        >
            <Head title="Category" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Link href={route('category.create')} >
                                <button className='bg-gray-700 text-white hover:shadow-lg duration-300 hover:shadow-gray-400 px-4 py-2 rounded'>Add Category</button>
                            </Link>
                        </div>


                        <div className="relative overflow-x-auto">
                            <Table data={category} columns={columns} />
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    )
}

export default Category_index