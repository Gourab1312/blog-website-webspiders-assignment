import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Blog Assignment</h1>
      <Link href="/blogs">
        Go to Blogs Listing
      </Link>
    </div>
  );
}
