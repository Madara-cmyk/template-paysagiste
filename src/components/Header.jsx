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
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#FF6165" />
            <rect x="17" y="10" width="6" height="20" fill="white" rx="1"/>
            <rect x="10" y="17" width="20" height="6" fill="white" rx="1"/>
            <circle cx="20" cy="7"    r="3"   fill="white"/>
            <circle cx="15" cy="9.5"  r="2.1" fill="white"/>
            <circle cx="25" cy="9.5"  r="2.1" fill="white"/>
            <circle cx="20" cy="33"   r="3"   fill="white"/>
            <circle cx="15" cy="30.5" r="2.1" fill="white"/>
            <circle cx="25" cy="30.5" r="2.1" fill="white"/>
            <circle cx="7"  cy="20"   r="3"   fill="white"/>
            <circle cx="9.5" cy="15"  r="2.1" fill="white"/>
            <circle cx="9.5" cy="25"  r="2.1" fill="white"/>
            <circle cx="33" cy="20"   r="3"   fill="white"/>
            <circle cx="30.5" cy="15" r="2.1" fill="white"/>
            <circle cx="30.5" cy="25" r="2.1" fill="white"/>
          </svg>
          <span className="header__brand">Occitania Gardens</span>
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
