'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/works', label: 'works' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className="relative z-50 px-6 py-4 border-b"
      style={{
        borderColor: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        background: 'rgba(10,14,26,0.6)',
      }}
    >
      <div className="flex justify-between items-center">
        {/* ロゴ */}
        <Link
          href="/"
          className="font-mono text-sm tracking-wider"
          style={{ color: '#a5b4fc' }}
        >
          uikamu.dev
        </Link>

        {/* PC用ナビリンク */}
        <ul className="hidden md:flex gap-6 list-none m-0 p-0">
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

        {/* ハンバーガーボタン（スマホのみ） */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: '#a5b4fc',
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: '#a5b4fc',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: '#a5b4fc',
              transformOrigin: 'center',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <ul
          className="md:hidden flex flex-col gap-4 list-none m-0 p-0 pt-4 pb-2"
        >
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
      )}
    </nav>
  )
}
