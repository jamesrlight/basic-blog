import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog | Basic Blog',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section>
      <h1>Blog</h1>
      <p className="lede">Posts are plain Markdown files in <code>content/posts</code>.</p>
      <div className="grid">
        {posts.map((post) => (
          <Link className="card" href={`/blog/${post.slug}`} key={post.slug}>
            <p className="meta">{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p className="tags">{post.tags.join(' · ')}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
