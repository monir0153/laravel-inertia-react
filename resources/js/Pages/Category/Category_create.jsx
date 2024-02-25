import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import React from 'react'

function Category_create({ auth }) {
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
                                ="max-w-md mx-auto">
                                <div className
                                    ="grid md:grid-cols-2 md:gap-6">
                                    <div className
                                        ="relative z-0 w-full mb-5 group">
                                        <input type="text" name="name" id="name" className
                                            ="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                                        <label for="name" className
                                            ="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category Name</label>
                                    </div>
                                    <div className
                                        ="relative z-0 w-full mb-5 group">
                                        <input type="text" name="description" id="description" className
                                            ="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                                        <label for="description" className
                                            ="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category Description</label>
                                    </div>

                                </div>
                                <button type="submit" className
                                    ="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 duration-300 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Category_create