# React Posts Viewer

A small React + TypeScript app that fetches posts from
[JSONPlaceholder](https://jsonplaceholder.typicode.com), lets you filter them
by title, and shows each post's details together with its comments.

## Features

- Fetches and lists all posts
- Filter posts by title with a search box
- Click a post to view its body and comments

## Tech stack

- React + TypeScript
- Vite (dev server & build)
- Native `fetch` API for HTTP calls

## Getting started

```bash
npm install
npm run dev
```

The app runs on the URL Vite prints (default http://localhost:5173).

## Available scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

## Project structure

- `src/api.ts` — API layer (all HTTP calls)
- `src/types.tsx` — shared TypeScript types
- `src/components/` — SearchBox, PostList, PostDetail, CommentList
- `src/App.tsx` — top-level state and view switching
