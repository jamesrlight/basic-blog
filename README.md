# Basic Blog

A simple Next.js blog designed for Vercel.

## How posts work

Posts live in:

```text
content/posts
```

Each post is a Markdown file with frontmatter:

```md
---
title: "My post"
date: "2026-06-01"
description: "Short summary."
tags: "tag one, tag two"
---

Post body goes here.
```

## Contact email

Set this environment variable in Vercel:

```text
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

## Commands

```bash
npm install
npm run dev
npm run build
```
