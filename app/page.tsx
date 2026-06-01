import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <section className="hero">
      <p className="meta">Style advice for women over 40</p>
      <h1>Fashion, hair and style mistakes that add years to your look.</h1>
      <p className="lede">
        Practical advice on outfits, shoes, handbags, jewellery and hairstyles that help you look more polished and current.
      </p>
      <Link href="/blog" className="button">Read the articles</Link>

      <h2>Latest articles</h2>
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
