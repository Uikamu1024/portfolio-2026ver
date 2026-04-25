// src/app/contact/page.tsx
// コンタクトページ
// ★SNSのリンクをここで変えてね

const links = [
  //{ label: 'GitHub', handle: '@your-github', url: 'https://github.com/your-github' },
  { label: 'Twitter / X', handle: '@Uikamuu', url: 'https://twitter.com/Uikamuu' },
  //{ label: 'Email', handle: 'hello@example.com', url: 'mailto:hello@example.com' },
]

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 animate-fade-in">
      <p className="font-mono text-xs tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
        // contact
      </p>
      <h1 className="text-3xl font-extrabold text-white mb-4">連絡先</h1>
      <p className="text-sm mb-10" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8' }}>
        ぜひお話しをしましょう
      </p>

      <div className="flex flex-col gap-3">
        {links.map(({ label, handle, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl px-5 py-4 flex justify-between items-center group"
            style={{ textDecoration: 'none' }}
          >
            <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {label}
            </span>
            <span
              className="text-sm font-bold transition-colors group-hover:text-white"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {handle}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
