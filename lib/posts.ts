import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  content: string;
};

const fallbackImages = [
  '/images/style-1.svg',
  '/images/style-2.svg',
  '/images/style-3.svg',
  '/images/style-4.svg',
  '/images/style-5.svg',
];

function imageForSlug(slug: string) {
  const index = Math.abs(slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)) % fallbackImages.length;
  return fallbackImages[index];
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content: fileContent };
  }

  const metadata: Record<string, string> = {};
  match[1].split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(':').trim().replace(/^['"]|['"]$/g, '');
    }
  });

  return { metadata, content: match[2].trim() };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const { metadata, content } = parseFrontmatter(fileContent);

      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || '',
        description: metadata.description || '',
        tags: metadata.tags ? metadata.tags.split(',').map((tag) => tag.trim()) : [],
        image: metadata.image || imageForSlug(slug),
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function renderMarkdown(markdown: string) {
  return markdown
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
      if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`;
      if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`;
      if (line.trim() === '') return '';
      return `<p>${line}</p>`;
    })
    .join('\n')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
}
