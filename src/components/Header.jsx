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
          <img src="/Logo.png" alt="Occitania Gardens" width="44" height="44" style={{objectFit:'contain'}} />
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
