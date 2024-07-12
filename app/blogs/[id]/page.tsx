export default async function BlogPage({ params }: any) {
  const apiUrl = `https://api.twingly.com/blog/livefeed/api/v5/GetData?apikey=${process.env.BLOG_API_KEY}&timestamp=${process.env.BLOG_TIMESTAMP}&format=${process.env.BLOG_FORMAT}&maxPosts=${process.env.MAXPOSTS}`;

  let data;

  try {
    const response = await fetch(apiUrl,{ cache: 'no-store' });
    data = await response.json();
  } catch (error) {
    console.log(error);
    data = null;
  }

  const blog = data?.documents?.find((blog: any) => blog.id === params.id);

  if (!blog) {
    <div className="loading-wrapper w-full flex items-center justify-center">
        <div className="loading-container w-full max-w-[1440px] px-6 lg:px-12 py-5 lg:py-10 flex flex-col items-center justify-center h-screen">
          <p className="text-2xl lg:text-4xl">Loading...</p>
        </div>
      </div>
  }

  return (
    <div className="home-container w-full flex justify-center items-center">
      <div className="heading-and-link-container flex items-center justify-center max-w-[1440px] px-6 lg:px-12 py-5 lg:py-10">
        <div className="blog-detail-container flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-6xl font-semibold text-center">{blog.blog_name}</h1>
          <p className="text-sm lg:text-base font-regular mt-3 text-center">Published at: {blog.published_at}</p>
          <p className="text-xl lg:text-2xl font-regular mt-3 text-center">{blog.title}</p>
          <p className="text-base lg:text-lg font-regular mt-3 text-center">{blog.text}</p>
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
}
