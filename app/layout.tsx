import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Over 40 Style Fix',
  description: 'Fashion, hair and style mistakes women over 40 make — and what to do instead.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">Over 40 Style Fix</Link>
          <nav>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Over 40 Style Fix</footer>
      </body>
    </html>
  );
}
