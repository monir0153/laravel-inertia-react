import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import React, { useEffect } from 'react'

function Category_create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
    });
    useEffect(() => {
        return () => {
            reset('name', 'description');
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('category.store'));
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Category</h2>}
        >
            <Head title="Create Category" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white min-h-40 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">


                            <form className
                                ="max-w-md mx-auto" onSubmit={submit}>
                                <div>
                                    <div>
                                        <InputLabel htmlFor="name" value="Category name" />

                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
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
                                            value={data.description}
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

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Category_create