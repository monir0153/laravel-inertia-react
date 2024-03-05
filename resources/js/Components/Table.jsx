import React from 'react';

const Table = ({ data, columns }) => {
    // Extract the data array from the pagination object
    const dataArray = data.data;

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                    <tr>
                        {columns?.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataArray?.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {columns?.map((column, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {column.render ? column.render(row) : row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
