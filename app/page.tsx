import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

const categories = [
  { name: 'Hair', description: 'Cuts, colour and styling choices that can date your look.' },
  { name: 'Clothing', description: 'Fit, fabric and outfit mistakes that make clothes work harder.' },
  { name: 'Shoes', description: 'Footwear errors that throw off proportion and polish.' },
  { name: 'Handbags', description: 'Bag choices that can quietly ruin an otherwise good outfit.' },
  { name: 'Jewellery', description: 'Accessory mistakes that make outfits feel cluttered or dated.' },
];

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const latest = posts.slice(1, 7);

  return (
    <>
      <section className="magazine-hero">
        <div>
          <p className="eyebrow">Style advice for women over 40</p>
          <h1>Fashion, hair and style mistakes that add years to your look.</h1>
          <p className="lede">
            Practical, direct advice on the outfit habits, hair choices and accessory errors that make style feel dated, heavy or less polished.
          </p>
          <Link href="/blog" className="button">Read the latest articles</Link>
        </div>
        <img className="hero-image" src="/images/style-1.svg" alt="Editorial fashion illustration for Over 40 Style Fix" />
      </section>

      {featured && (
        <section className="featured-section">
          <p className="eyebrow">Featured article</p>
          <Link className="featured-card" href={`/blog/${featured.slug}`}>
            <img className="featured-image" src={featured.image} alt="" />
            <div>
              <p className="meta">{featured.date}</p>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <span className="read-more">Read article →</span>
            </div>
          </Link>
        </section>
      )}

      <section>
        <div className="section-heading">
          <p className="eyebrow">Browse by topic</p>
          <h2>Common mistake categories</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.name}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Latest</p>
          <h2>Recent style mistakes</h2>
        </div>
        <div className="grid magazine-grid">
          {latest.map((post) => (
            <Link className="card image-card" href={`/blog/${post.slug}`} key={post.slug}>
              <img className="card-image" src={post.image} alt="" />
              <div className="card-body">
                <p className="meta">{post.date}</p>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p className="tags">{post.tags.join(' · ')}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="newsletter-box">
        <p className="eyebrow">Coming soon</p>
        <h2>Style mistakes checklist</h2>
        <p>Later, this area can become an email signup for a free over-40 style checklist.</p>
      </section>
    </>
  );
}
