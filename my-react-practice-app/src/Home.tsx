<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> e04e4e4 (Lesson #12 onwards)
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    
<<<<<<< HEAD
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
=======
    const handleDelete = (id: number) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log('use effect ran')
        console.log(blogs)
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
>>>>>>> e04e4e4 (Lesson #12 onwards)
        </div>
    );
}
 
export default Home;