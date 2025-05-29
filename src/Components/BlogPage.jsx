import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import Category from './Category';
import Sidebar from './Sidebar';


const BlogPage = () => {
    const [blogs, setblogs] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    const pageSize = 12;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null)

    const [totalBlogsCount, setTotalBlogsCount] = useState(0);

    useEffect(() => {
        async function fetchBlogs() {
            let url = '/blogsData.json';
            const response = await fetch(url);
            const data = await response.json();

            let filteredData = data;
            if (selectedCategory) {
                filteredData = data.filter(blog => blog.category === selectedCategory);
            }

            setTotalBlogsCount(filteredData.length); // <- total count

            const startIndex = (currentpage - 1) * pageSize;
            const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);
            setblogs(paginatedData);
        }

        fetchBlogs();
    }, [currentpage, pageSize, selectedCategory]);


    const handleCategory = (category) => {
        setSelectedCategory(category);
        setcurrentpage(1);
        setActiveCategory(category);
    }


    const handlePageChange = (pageNumber) => {
        setcurrentpage(pageNumber);
        console.log(currentpage)
    }





    return (
        <div>
            {/* page category section */}
            <div className="">
                <Category onSelectCategory={handleCategory} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
            </div>

            {/* blogs cards section */}
            <div className=" flex flex-col lg:flex-row gap-12">
                {/* blog cards */}
                <BlogCard blogs={blogs} currentpage={currentpage} selectedCategory={selectedCategory} pageSize={pageSize} />


                {/* side bar components */}
                <Sidebar/>
            </div>

            {/* pagination section */}
            <div className="">
                {/* <Pagination onPageChange={handlePageChange} currentpage={currentpage} blogs={blogs} pageSize={pageSize} ></Pagination> */}
                <Pagination
                    onPageChange={handlePageChange}
                    currentpage={currentpage}
                    blogsCount={totalBlogsCount}
                    pageSize={pageSize}
                />

            </div>
        </div>
    )
}

export default BlogPage
