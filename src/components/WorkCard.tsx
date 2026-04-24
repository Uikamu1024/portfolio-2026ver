// src/components/WorkCard.tsx
// Works ページで使うガラスカード

import { Work } from '@/lib/works'

export default function WorkCard({ work }: { work: Work }) {
  return (
    <div className="glass-card rounded-xl p-5">
      {/* 番号 */}
      <span
        className="font-mono text-lg mb-3 block"
        style={{ color: 'rgba(165,180,252,0.5)' }}
      >
        [{work.id.toString().padStart(2, '0')}]
      </span>

      <p className="font-bold text-sm text-white mb-1">{work.title}</p>
      <p className="font-mono text-xs mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
        {work.subtitle}
      </p>

      {/* タグ */}
      <div className="flex flex-wrap gap-1">
        {work.tags.map((tag) => (
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
    </div>
  )
}
