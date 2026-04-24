// src/app/page.tsx
// トップページ（ヒーロー + ターミナル + Works + Blog プレビュー）

import Link from 'next/link'
import { getLatestPosts } from '@/lib/blog'
import { works } from '@/lib/works'
import Terminal from '@/components/Terminal'
import WorkCard from '@/components/WorkCard'
import BlogRow from '@/components/BlogRow'

export default async function Home() {
  const latestPosts = await getLatestPosts(3)

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">

      {/* ─── Hero ─── */}
      <section className="mb-16">
        {/* ステータスバッジ */}
        <div
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest mb-6 px-3 py-1 rounded-full"
          style={{
            color: '#67e8f9',
            background: 'rgba(6,182,212,0.1)',
            border: '1px solid rgba(6,182,212,0.25)',
          }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full animate-blink"
            style={{ background: '#67e8f9' }}
          />
          available for internship
        </div>

        <h1
          className="text-5xl font-extrabold leading-tight mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Engineer &<br />
          <span className="gradient-text">Designer.</span>
        </h1>

        <p className="font-mono text-sm mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
          // student developer · kyoto
        </p>

        <p className="text-base mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.9' }}>
          WebとAIの交差点で、デザインと技術を掛け合わせた
          プロダクトをつくる学生エンジニア。
        </p>

        <div className="flex gap-3 flex-wrap">
          <Link
            href="/works"
            className="font-display font-bold text-sm px-6 py-2.5 rounded-md transition-opacity hover:opacity-80"
            style={{
              background: 'linear-gradient(135deg, #a5b4fc, #67e8f9)',
              color: '#0a0e1a',
            }}
          >
            works を見る →
          </Link>
          <Link
            href="/blog"
            className="font-display font-bold text-sm px-6 py-2.5 rounded-md transition-colors"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            blog を読む
          </Link>
        </div>
      </section>

      {/* ─── Terminal ─── */}
      <section className="mb-16">
        <Terminal />
      </section>

      {/* ─── Works ─── */}
      <section className="mb-16">
        <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
          // featured works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* ─── Blog ─── */}
      <section>
        <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
          // recent posts
        </p>
        <div className="flex flex-col gap-2">
          {latestPosts.map((post) => (
            <BlogRow key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/blog"
            className="font-mono text-xs tracking-widest transition-colors"
            style={{ color: 'rgba(165,180,252,0.6)' }}
          >
            すべての記事を見る →
          </Link>
        </div>
      </section>
    </div>
  )
}
