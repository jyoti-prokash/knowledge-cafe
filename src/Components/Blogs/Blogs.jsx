import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmarks}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-xl font-bold">Total Blogs: {blogs.length}</h2>
            {
                blogs.map(blog=> <Blog blog={blog} handleBookmarks={handleBookmarks}></Blog>)
            }
        </div>
    );
};

export default Blogs;