import { notFound } from "next/navigation";

export default async function BlogPage({ params } : any) {

    const apiUrl = `https://api.twingly.com/blog/livefeed/api/v5/GetData?apikey=${process.env.BLOG_API_KEY}&timestamp=${process.env.BLOG_TIMESTAMP}&format=${process.env.BLOG_FORMAT}&maxPosts=${process.env.MAXPOSTS}`;

    let data;

    try {
        const response = await fetch(apiUrl);
        data = await response.json();
    } catch (error) {
        console.log(error);
        data = null;
    }

    const blog = data?.documents?.find((blog : any) => blog.id === params.id);

    if (!blog) {
        notFound();
    }

    return (
        <div key={blog.id} className='blog-detail-container'>
            <h1>{blog.blog_name}</h1>
            <p>Published at: {blog.published_at}</p>
            <p>{blog.content}</p>
        </div>
    );
}

  