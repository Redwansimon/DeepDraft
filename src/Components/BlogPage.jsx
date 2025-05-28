import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';


const BlogPage = () => {
    const [blogs, setblogs] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    const pageSize = 12;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null)

    // useEffect(() => {
    //     async function fetchBlogs() {
    //         let url = '/blogsData.json'; // 👈 This fetches from public folder

    //         const response = await fetch(url);
    //         const data = await response.json();

    //         // Optional: filter by category and paginate manually if needed
    //         let filteredData = data;
    //         if (selectedCategory) {
    //             filteredData = data.filter(blog => blog.category === selectedCategory);
    //         }

    //         // Simple pagination logic
    //         const startIndex = (currentpage - 1) * pageSize;
    //         const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

    //         setblogs(paginatedData);
    //     }

    //     fetchBlogs();
    // }, [currentpage, pageSize, selectedCategory]);
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
    }


    // useEffect(()=>{
    //     async function fetchblogs() {
    //         let url = `http://localhost:5000/blogs?page=${currentpage}&limit=${pageSize}`;
    //         // filter by category
    //         if(selectedCategory){
    //             url +=`&category=${selectedCategory}`;

    //         }
    //         const response = await fetch(url);
    //         const data =await response.json();
    //         setblogs(data);

    //     }
    //     fetchblogs();

    // },[currentpage,pageSize,selectedCategory])



    return (
        <div>
            {/* page category section */}
            <div className="">page category</div>

            {/* blogs cards section */}
            <div className="">
                <BlogCard blogs={blogs} currentpage={currentpage} selectedCategory={selectedCategory} pageSize={pageSize} />
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
