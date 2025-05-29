import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import { useParams, useLoaderData } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const SingleBlog = () => {
    const { id } = useParams();
    const blogs = useLoaderData();


    const blog = blogs.find(b => b.id === parseInt(id)); // match id

    if (!blog) return <p>Blog not found</p>;
    const { title, image, category, author, published_date, reading_time, content } = blog;

    return (
        <div className="">
            <div className="py-40 bg-black text-center text-white px-4">
                <h1 className='text-5xl lg:text-7xl leadiing-snug font-bold mb-5'>Single Blog Page</h1>
            </div>
            {/* blogdetails */}
            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
                <div className='lg:w-3/4 mx-auto '>
                    <div className="">
                        <img src={image} alt="" className='w-full mx-auto rounded ' />
                    </div>
                    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600 '><FaUser className='inline-flex items-center mr-2' />{author} | {published_date}</p>
                    <p className='mb-3 text-gray-600 '><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>
                    <p className='text-base text-gray-500 mb-6'>{content}</p>
                    <div className='text-base text-gray-500 mb-6'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam ipsum ducimus doloremque rerum. Nisi minus qui necessitatibus placeat? Minus non repellat dignissimos cum culpa. Vel minima corporis libero ipsam?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quaerat vel cumque atque expedita! Sequi, sapiente eaque iste, quibusdam, reiciendis perspiciatis non unde sunt voluptate saepe est consectetur quae nesciunt.</p><br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui nostrum nulla eum quo tenetur voluptate! Tempora repudiandae deleniti incidunt! Eius voluptate illum quibusdam amet pariatur facere corporis deserunt officiis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quaerat vel cumque atque expedita! Sequi, sapiente eaque iste, quibusdam, reiciendis perspiciatis non unde sunt voluptate saepe est consectetur quae nesciunt.</p><br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui nostrum nulla eum quo tenetur voluptate! Tempora repudiandae deleniti incidunt! Eius voluptate illum quibusdam amet pariatur facere corporis deserunt officiis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quaerat vel cumque atque expedita! Sequi, sapiente eaque iste, quibusdam, reiciendis perspiciatis non unde sunt voluptate saepe est consectetur quae nesciunt.</p><br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui nostrum nulla eum quo tenetur voluptate! Tempora repudiandae deleniti incidunt! Eius voluptate illum quibusdam amet pariatur facere corporis deserunt officiis.</p>
                    </div>
                    {/* sidebar */}

                </div>
                                    <div>
                        <Sidebar/>
                    </div>
            </div>
        </div>
    );
};

export default SingleBlog;

