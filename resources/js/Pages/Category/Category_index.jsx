import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Table from '@/Components/Table';
import React, { useState, useEffect } from 'react'
import Modal from '@/Components/Modal';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

function Category_index({ auth, category }) {
    console.log(category);
    const { data, setData, delete: destroy, put, processing, errors, reset } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [editCategory, setEditCategory] = useState(null); // State to hold category being edited

    // Function to handle opening modal for editing a category
    const handleEdit = (row) => {
        setEditCategory(row); // Set the category data to edit
        setShowModal(true); // Open the modal
    };
    const handleCloseModal = () => {
        setShowModal(false);
        reset();
    };
    const handleDelete = (row) => {
        destroy(route('category.destroy', row.id));
    };
    // Function to handle submitting the form
    const submit = (e) => {
        e.preventDefault();
        if (editCategory) {
            put(route('category.update', editCategory?.id), {
                onSuccess: () => {
                    setShowModal(false);
                    reset();
                },
            });
        }
    };

    useEffect(() => {
        if (editCategory) {
            setData({ description: editCategory?.description, name: editCategory?.name, id: editCategory?.id });
        }
    }, [editCategory]);

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
                    {(
                        <Modal show={showModal} setShowModal={setShowModal} onClose={handleCloseModal}>
                            <form className="max-w-md mx-auto my-8" onSubmit={submit}>
                                <div>
                                    <div>
                                        <InputLabel htmlFor="name" value="Category name" />

                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name || (editCategory ? editCategory.name : '')} // Use editCategory if available
                                            className="my-1 block w-full"
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />

                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="description" value="Category Description" />

                                        <TextInput
                                            id="description"
                                            type="text"
                                            name="description"
                                            value={data.description || (editCategory ? editCategory.description : '')} // Use editCategory if available
                                            className="my-1 block w-full"
                                            autoComplete="description"
                                            isFocused={false}
                                            onChange={(e) => setData('description', e.target.value)}
                                        />

                                        <InputError message={errors.description} className="mt-2" />
                                    </div>


                                </div>
                                <PrimaryButton className="my-4" disabled={processing}>
                                    Submit
                                </PrimaryButton>
                            </form>
                        </Modal>
                    )}
                </div>
            </div>

        </AuthenticatedLayout >
    )
}

export default Category_index
