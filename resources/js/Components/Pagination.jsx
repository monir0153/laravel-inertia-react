import React from 'react';

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === lastPage;

    const handlePreviousPage = () => {
        if (!isFirstPage) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (!isLastPage) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={handlePreviousPage}
                disabled={isFirstPage}
                className="px-3 py-1 mr-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
                Previous
            </button>
            <button
                onClick={handleNextPage}
                disabled={isLastPage}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
