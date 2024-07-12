import Link from "next/link";

export default async function Page() {
    const apiUrl = `https://api.twingly.com/blog/livefeed/api/v5/GetData?apikey=${process.env.BLOG_API_KEY}&timestamp=${process.env.BLOG_TIMESTAMP}&format=${process.env.BLOG_FORMAT}&maxPosts=${process.env.MAXPOSTS}`;
    let data;
    try{
        const response = await fetch(apiUrl);
        data = await response.json();
    }catch(error){
        console.log(error);
    }
   
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='blog-listing-container flex flex-col items-start justify-start gap-8 py-6 border-b-slate-500'>
            {data?.documents?.map((blog : any) => (
                <Link href={`/blogs/${blog.id}`}>
                <p>{blog.blog_name} - {blog.published_at}</p>
              </Link>
            ))}
        </div>
    );
  }
