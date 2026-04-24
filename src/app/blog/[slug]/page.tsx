// src/app/blog/[slug]/page.tsx
// ブログ記事の詳細ページ（動的ルーティング）
// [slug] の部分がURLになる → /blog/hello-world など

import { getAllPosts, getPost } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

// 静的生成のためのパス一覧を返す
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 animate-fade-in">
      {/* 戻るリンク */}
      <Link
        href="/blog"
        className="font-mono text-xs tracking-widest mb-8 inline-block transition-colors hover:opacity-70"
        style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
      >
        ← blog 一覧に戻る
      </Link>

      {/* メタ情報 */}
      <div className="mb-2">
        <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {post.date}
        </span>
      </div>

      <h1 className="text-3xl font-extrabold text-white mb-4">{post.title}</h1>

      {/* タグ */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{
                color: '#a5b4fc',
                background: 'rgba(165,180,252,0.1)',
                border: '1px solid rgba(165,180,252,0.2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* 本文（Markdownレンダリング） */}
      <div className="prose-dark">
        <MDXRemote source={post.content} />
      </div>
    </div>
  )
}
