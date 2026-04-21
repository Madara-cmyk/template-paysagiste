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
          <svg width="38" height="38" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M42 22 H58 V42 H78 V58 H58 V78 H42 V58 H22 V42 H42 Z" fill="#1a1a1a"/>
            <circle cx="50" cy="13" r="8"  fill="#1a1a1a"/>
            <circle cx="39" cy="19" r="6"  fill="#1a1a1a"/>
            <circle cx="61" cy="19" r="6"  fill="#1a1a1a"/>
            <circle cx="50" cy="87" r="8"  fill="#1a1a1a"/>
            <circle cx="39" cy="81" r="6"  fill="#1a1a1a"/>
            <circle cx="61" cy="81" r="6"  fill="#1a1a1a"/>
            <circle cx="13" cy="50" r="8"  fill="#1a1a1a"/>
            <circle cx="19" cy="39" r="6"  fill="#1a1a1a"/>
            <circle cx="19" cy="61" r="6"  fill="#1a1a1a"/>
            <circle cx="87" cy="50" r="8"  fill="#1a1a1a"/>
            <circle cx="81" cy="39" r="6"  fill="#1a1a1a"/>
            <circle cx="81" cy="61" r="6"  fill="#1a1a1a"/>
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
