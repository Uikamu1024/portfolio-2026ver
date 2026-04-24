'use client'
// src/components/Nav.tsx
// ナビゲーションバー。'use client' でインタラクション対応

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/works', label: 'works' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="relative z-50 flex justify-between items-center px-6 py-4 border-b"
      style={{
        borderColor: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        background: 'rgba(10,14,26,0.6)',
      }}
    >
      {/* ロゴ */}
      <Link
        href="/"
        className="font-mono text-sm tracking-wider"
        style={{ color: '#a5b4fc' }}
      >
        uikaむ.dev
      </Link>

      {/* ナビリンク */}
      <ul className="flex gap-6 list-none m-0 p-0">
        {links.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <li key={href}>
              <Link
                href={href}
                className="font-mono text-xs tracking-widest transition-colors duration-200"
                style={{
                  color: isActive ? '#a5b4fc' : 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                }}
              >
                {isActive ? `[${label}]` : label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
