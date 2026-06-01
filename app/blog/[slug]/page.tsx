import { notFound } from 'next/navigation';
import { getAllPosts, getPost, renderMarkdown } from '@/lib/posts';

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Over 40 Style Fix`,
    description: post.description,
  };
}

export default async function PostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="article">
      <p className="meta">{post.date}</p>
      <h1>{post.title}</h1>
      <p className="lede">{post.description}</p>
      <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
    </article>
  );
}
