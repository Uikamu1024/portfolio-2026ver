// src/lib/blog.ts
// Markdownファイルからブログ記事を読み込むユーティリティ
// content/blog/ フォルダに .md ファイルを追加するだけで記事が増えます

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// ブログ記事のメタデータの型定義
export type PostMeta = {
  slug: string    // URLになる（ファイル名）
  title: string
  date: string
  tags: string[]
  summary: string
}

// 記事の全データ（本文含む）
export type Post = PostMeta & {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

// 全記事のメタデータを取得（日付降順）
export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
    const { data } = matter(raw)

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      tags: data.tags ?? [],
      summary: data.summary ?? '',
    } satisfies PostMeta
  })

  // 日付の新しい順に並べる
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

// 最新 n 件だけ取得
export async function getLatestPosts(n: number): Promise<PostMeta[]> {
  const all = await getAllPosts()
  return all.slice(0, n)
}

// slug から1記事を取得
export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    tags: data.tags ?? [],
    summary: data.summary ?? '',
    content,
  }
}
