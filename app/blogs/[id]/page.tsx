import { notFound } from "next/navigation";

export default async function BlogPage({ params } : any) {

    const apiUrl = `https://api.twingly.com/blog/livefeed/api/v5/GetData?apikey=DC949A8C-6197-4BB1-861C-C3F759F523BB&timestamp=2017-04-24T10:22:37.354Z&format=json&maxPosts=50`;

    let data;

    try {
        const response = await fetch(apiUrl, { cache: 'force-cache' });
        data = await response.json();
    } catch (error) {
        console.log(error);
        data = null;
    }

    const blog = data?.documents?.find((blog) => blog.id === params.id);

    if (!blog) {
        notFound();
    }

    return (
        <div className='blog-detail-container'>
            <h1>{blog.blog_name}</h1>
            <p>Published at: {blog.published_at}</p>
            <p>{blog.content}</p>
        </div>
    );
}

  