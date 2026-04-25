'use client'
// src/components/Terminal.tsx
// ターミナル風の自己紹介ボックス

import { useEffect, useState } from 'react'

// 表示するコマンドと出力の定義
// ここを編集してスキルや情報を変更できます
const lines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'student engineer · ai enthusiast' },
  { type: 'cmd', text: 'skills --list' },
  { type: 'out', text: 'Studying Python' },
  { type: 'cmd', text: 'next --learning' },
  { type: 'out', text: 'TypeScript · React · Next.js · Machine Learning' },
  { type: 'cmd', text: 'awards' },
  { type: 'out', text: '★ Web Create Contest Winner' },
  
  
]

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0)

  // 1行ずつ順番に表示するアニメーション
  useEffect(() => {
    if (visibleCount >= lines.length) return
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1)
    }, 180)
    return () => clearTimeout(timer)
  }, [visibleCount])

  return (
    <div
      className="rounded-xl p-5 font-mono text-xs"
      style={{
        background: 'rgba(0,0,0,0.45)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* ウィンドウボタン */}
      <div className="flex gap-1.5 mb-4">
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
      </div>

      {/* 行の表示 */}
      <div className="space-y-1">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} style={{ lineHeight: '1.8' }}>
            {line.type === 'cmd' ? (
              <span>
                <span style={{ color: '#a5b4fc' }}>~ </span>
                <span style={{ color: '#67e8f9' }}>{line.text}</span>
              </span>
            ) : (
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>{line.text}</span>
            )}
          </div>
        ))}

        {/* カーソル点滅 */}
        {visibleCount >= lines.length && (
          <div>
            <span style={{ color: '#a5b4fc' }}>~ </span>
            <span className="cursor-blink" />
          </div>
        )}
      </div>
    </div>
  )
}
