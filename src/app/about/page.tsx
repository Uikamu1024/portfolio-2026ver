// src/app/about/page.tsx
// 自己紹介ページ
// ★ここの情報を自分のものに書き換えてね

export default function AboutPage() {
  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Backend', items: ['PHP', 'Laravel', 'MySQL'] },
    { category: 'Learning', items: ['Python', 'TypeScript', 'React', 'Next.js'] },
    { category: 'Design', items: ['Figma', 'UI Design', 'Web Design'] },
  ]

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
      <p className="font-mono text-xs tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
        // about
      </p>
      <h1 className="text-3xl font-extrabold text-white mb-10">自己紹介</h1>

      {/* プロフィール */}
      <div
        className="glass-card rounded-xl p-6 mb-8"
      >
        <h2 className="font-bold text-white text-lg mb-1">uikaむ</h2>
        <p className="font-mono text-xs mb-4" style={{ color: '#67e8f9' }}>
          Student Engineer · Kyoto
        </p>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.9' }}>
          {/* ★ここを自分の紹介文に変えてね */}
          京都の大学でWebとAIを学ぶ学生エンジニア。
          Webデザインコンテストで受賞経験があり、チームでのWebアプリ開発も経験済み。
          現在はPythonを中心に学習しながら、TypeScript・Reactへの移行を計画中。
          医療AI・Webサービス・データサイエンスに興味がある。
        </p>
      </div>

      {/* スキル */}
      <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
        // skills
      </p>
      <div className="grid grid-cols-2 gap-3 mb-10">
        {skills.map(({ category, items }) => (
          <div key={category} className="glass-card rounded-xl p-4">
            <p className="font-mono text-xs mb-3" style={{ color: '#a5b4fc' }}>{category}</p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 経歴 */}
      <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
        // timeline
      </p>
      <div className="flex flex-col gap-3">
        {[
          { date: '2025', event: 'AIハッカソン参加予定' },
          { date: '2024', event: 'LaravelでQ&Aサービスをチーム開発' },
          { date: '2023', event: 'Webデザインコンテスト受賞' },
        ].map(({ date, event }) => (
          <div key={date} className="flex gap-4 items-start">
            <span className="font-mono text-xs pt-0.5 w-12 shrink-0" style={{ color: '#67e8f9' }}>
              {date}
            </span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {event}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
