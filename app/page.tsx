import Link from "next/link";

export default function Home() {
  return (
    <div className="home-wrapper w-full flex justify-center items-center">
      <div className="home-container w-full flex justify-center items-center max-w-[1440px] px-6 lg:px-12 py-5 lg:py-10">
        <div className="heading-and-link-container flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl">Blog Assignment</h1>
          <Link className="lg:mt-5 mt-2.5 underline text-base lg:text-lg" href="/blogs">Go to Blogs Listing</Link>
        </div>
      </div>
    </div>
  );
}
