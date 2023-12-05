<<<<<<< HEAD
const BlogList = ({blogs, title}:{blogs:any; title:string;}) => {
    // const blogs = props.blogs;
    // const title = props.title;

=======
const BlogList = ({blogs, title, handleDelete}:{blogs:any; title:string; handleDelete:any}) => {
    // const blogs = props.blogs;
    // const title = props.title;
>>>>>>> e04e4e4 (Lesson #12 onwards)
    // console.log(props,blogs);
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog: any) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
<<<<<<< HEAD
=======
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
>>>>>>> e04e4e4 (Lesson #12 onwards)
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;