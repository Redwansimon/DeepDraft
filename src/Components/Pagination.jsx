// import React from 'react'

// const Pagination = ({onPageChange, currentpage, blogs, pageSize}) => {
//     const totalpages= Math.ceil(blogs.length / pageSize)
//     console.log(totalpages)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Pagination

import React from 'react';

const Pagination = ({ onPageChange, currentpage, blogsCount, pageSize }) => {
  const totalpages = Math.ceil(blogsCount / pageSize);
  console.log(totalpages)

  if (totalpages <= 1) return null;

  return (
    <div className="flex gap-2 justify-center mt-6">
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
    </div>
  );
};

export default Pagination; // ✅ Make sure this line exists
