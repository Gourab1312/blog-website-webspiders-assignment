import Link from "next/link";

export default async function Page() {
    const apiKey = '7E3B1139-FB2F-40AD-A870-1C1995E9A272';
    const timestamp = new Date().toISOString();
    let data;
    try{
        const response = await fetch(`https://api.twingly.com/blog/livefeed/api/v5/GetData?apikey=DC949A8C-6197-4BB1-861C-C3F759F523BB&timestamp=2017-04-24T10:22:37.354Z&format=json&maxPosts=50`, { cache: 'force-cache' });
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
