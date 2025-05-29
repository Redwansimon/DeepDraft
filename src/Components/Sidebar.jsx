import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [popularBlogs ,setPopularBlogs]=useState([]);
    useEffect(()=>{
        fetch('/blogsData.json')
        .then(res=>res.json())
        .then (data=>setPopularBlogs(data.slice(0,15)))
    },[])
console.log(popularBlogs);
  return (
    <div className=''>
        <div className="">
            <h3 className='text-2xl font-semibold px-4 border border-b-2 mb-3 shadow-sm'>Latest Blogs</h3>
            <div>
                {
                    popularBlogs.slice(0,5).map(blog=>(
                        <div className="my-5 border-b-2 border-spacing-2 px-4" key={blog.id}> 
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                                        <Link to="/" className="text-base pb-2 hover:text-orange-500 py-1 inline-flex items-center ">Read More<FaArrowRight className="mt-1 ml-2"/></Link>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* popular blogs */}
        <div className="">
            <h3 className='text-2xl font-semibold px-4 border border-b-2 mt-20 mb-3 shadow-sm'>Popular Blogs</h3>
            <div>
                {
                    popularBlogs.slice(6,10).map(blog=>(
                        <div className="my-5 border-b-2 border-spacing-2 px-4" key={blog.id}> 
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                                        <Link to="/" className="text-base pb-2 hover:text-orange-500 py-1 inline-flex items-center ">Read More<FaArrowRight className="mt-1 ml-2"/></Link>
                        </div>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
