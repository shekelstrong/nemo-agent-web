import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const links = [
    { href: '/#features', label: 'Возможности' },
    { href: '/#how', label: 'Как работает' },
    { href: '/#pricing', label: 'Тарифы' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/articles', label: 'Статьи' },
  ]

  return (
    <nav className={`glass-nav transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container-x flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-ios-blue via-ios-purple to-ios-teal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold text-white">Nemo Agent</span>
            <span className="text-[10px] text-ios-blue font-semibold tracking-widest uppercase">Buildo</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://t.me/nemo_agent_bot"
            target="_blank"
            rel="noreferrer"
            className="glass-btn glass-btn-primary text-sm py-2.5 px-5"
          >
            Попробовать бесплатно
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 glass mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-white/80 hover:text-white font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://t.me/nemo_agent_bot"
            target="_blank"
            rel="noreferrer"
            className="glass-btn glass-btn-primary text-sm mt-2"
          >
            Попробовать бесплатно
          </a>
        </div>
      )}
    </nav>
  )
}
