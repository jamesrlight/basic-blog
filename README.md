# Style Fix Journal

A lightweight Next.js fashion and beauty blog for women.

## Content model

Posts are Markdown files in:

```text
content/posts
```

Each post uses frontmatter:

```md
---
title: "Post title"
date: "2026-06-01"
description: "Short description"
tags: "hair, outfits, style mistakes"
---
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contact email

Set this Vercel environment variable:

```text
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```
