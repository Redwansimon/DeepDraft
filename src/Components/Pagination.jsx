
import React from 'react';

const Pagination = ({ onPageChange, currentpage, blogsCount, pageSize }) => {
  const totalpages = Math.ceil(blogsCount / pageSize);

  if (totalpages <= 1) return null; // No pagination needed if only 1 page

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-6 items-center">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentpage - 1)}
        disabled={currentpage === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Number Buttons */}
      {[...Array(totalpages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-4 py-2 border rounded ${
              currentpage === pageNumber ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentpage + 1)}
        disabled={currentpage === totalpages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
