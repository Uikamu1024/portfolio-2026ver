// src/app/works/page.tsx
// 作品一覧ページ

import { works } from '@/lib/works'
import WorkCard from '@/components/WorkCard'

export default function WorksPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <p className="font-mono text-xs tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
        // works
      </p>
      <h1 className="text-3xl font-extrabold text-white mb-8">制作物</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  )
}
