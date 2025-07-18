import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';



// const BlogCard = ({blogs,currentpage,selectedCategory,pageSize}) => {
//     const filteredBlogs = blogs.filter((blogs)=> !selectedCategory || blogs.category === selectedCategory).slice((currentpage-1)*pageSize,currentpage*pageSize)

//     console.log(blogs)
    
//   return (
//     <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
//       {
//         filteredBlogs.map(blog=><Link key={blog.id} 
//         className='p-5 shadow-lg rounded cursor-pointer'
//         >
//            <div>
//              <img src={blog.image} alt="" className='w-full' />
//            </div>
//            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
//            <p className='mb-2 text-gray-600 '><FaUser className='inline-flex items-center mr-2'/> {blog.author}</p>
//            <p className='text-sm text-gray-500'>Published:{blog.published_date}</p>
//         </Link>)
//       }
//     </div>
//   )
// }

// export default BlogCard
const BlogCard = ({ blogs }) => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        blogs.map(blog => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
            <div>
              <img src={blog.image} alt={blog.title} className='w-full' />
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>
              {blog.title}
            </h3>
            <p className='mb-2 text-gray-600'>
              <FaUser className='inline-flex items-center mr-2' /> {blog.author}
            </p>
            <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
          </Link>
        ))
      }
    </div>
  );
};

export default BlogCard
