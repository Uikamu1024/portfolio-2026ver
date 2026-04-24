// src/components/BlogRow.tsx
// ブログ一覧の1行コンポーネント

import Link from 'next/link'
import { PostMeta } from '@/lib/blog'

export default function BlogRow({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-all duration-200 group"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        textDecoration: 'none',
      }}
    >
      <span
        className="font-mono text-xs whitespace-nowrap"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        {post.date}
      </span>
      <span
        className="flex-1 text-sm font-bold transition-colors group-hover:text-white"
        style={{ color: 'rgba(255,255,255,0.75)' }}
      >
        {post.title}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.2)' }}>→</span>
    </Link>
  )
}
