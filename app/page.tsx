import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="hero">
      <p className="meta">Personal writing, notes, and useful ideas.</p>
      <h1>A clean, simple blog.</h1>
      <p className="lede">
        This is a lightweight blog designed for easy publishing, quick edits, and future automation.
      </p>
      <Link href="/blog" className="button">Read the blog</Link>

      <h2>Latest posts</h2>
      <div className="grid">
        {posts.map((post) => (
          <Link className="card" href={`/blog/${post.slug}`} key={post.slug}>
            <p className="meta">{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
