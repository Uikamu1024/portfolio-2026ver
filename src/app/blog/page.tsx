// src/app/blog/page.tsx
// ブログ一覧ページ

import { getAllPosts } from '@/lib/blog'
import BlogRow from '@/components/BlogRow'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
      <p className="font-mono text-xs tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
        // blog
      </p>
      <h1 className="text-3xl font-extrabold text-white mb-8">記事一覧</h1>

      {posts.length === 0 ? (
        <p className="font-mono text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
          記事がまだありません。content/blog/ にMarkdownファイルを追加してね。
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {posts.map((post) => (
            <BlogRow key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
