import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario')
    
    const handleDelete = (id: number) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        const AbortCont = new AbortController();

        setTimeout(() => {
        console.log('use effect ran')
        // console.log(blogs)
        }, 2000)

        return () => AbortCont.abort();
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
            {/* <button onClick ={() => setName('luigi')}>change name</button>
            <p>{ name }</p> */}
        </div>
    );
}
 
export default Home;