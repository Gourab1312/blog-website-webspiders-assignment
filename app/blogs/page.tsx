import Link from "next/link";

export default async function Page() {
  const apiUrl = `https://api.twingly.com/blog/livefeed/api/v5/GetData?apikey=${process.env.BLOG_API_KEY}&timestamp=${process.env.BLOG_TIMESTAMP}&format=${process.env.BLOG_FORMAT}&maxPosts=${process.env.MAXPOSTS}`;
  let data;
  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  if (!data) {
    return (
      <div className="loading-wrapper w-full flex items-center justify-center">
        <div className="loading-container w-full max-w-[1440px] px-6 lg:px-12 py-5 lg:py-10 flex flex-col items-center justify-center h-screen">
          <p className="text-2xl lg:text-4xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-listing-wrapper w-full flex items-center justify-center">
      <div className="blog-listing-container w-full max-w-[1440px] px-6 lg:px-12 py-5 lg:py-10 flex flex-col items-center justify-start gap-2.5">
        <h2 className="text-2xl lg:text-4xl mb-4">Blogs</h2>
        {data?.documents?.map((blog: any) => (
          <Link
            className="lg:mt-5 mt-2.5 underline text-base lg:text-lg"
            key={blog.id}
            href={`/blogs/${blog.id}`}
          >
            <p>
              {blog.blog_name} - {blog.published_at}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
