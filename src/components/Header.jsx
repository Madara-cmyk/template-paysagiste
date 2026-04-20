import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#" className="header__logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#2d6a4f" />
            <path d="M16 6 C10 10, 8 16, 10 22 C12 18, 14 16, 16 14 C18 16, 20 18, 22 22 C24 16, 22 10, 16 6Z" fill="#95d5b2" />
            <rect x="15" y="20" width="2" height="6" rx="1" fill="#1b4332" />
          </svg>
          <span className="header__brand">VerdiPro</span>
        </a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`} aria-label="Navigation principale">
          <ul className="header__nav-list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="header__nav-link" onClick={handleNavClick}>{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary header__cta" onClick={handleNavClick}>
            Devis gratuit
          </a>
        </nav>

        <button
          className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
