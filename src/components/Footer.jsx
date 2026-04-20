const LINKS = {
  Services: [
    'Création de jardins',
    'Entretien régulier',
    'Aménagement extérieur',
    'Engazonnement',
    `Système d\u2019arrosage`,
    'Élagage & abattage',
  ],
  Entreprise: [
    'À propos',
    'Nos engagements',
    'Certifications',
    'Recrutement',
  ],
  Légal: [
    'Mentions légales',
    'Politique de confidentialité',
    'CGV',
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="header__logo footer__logo">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="#2d6a4f" />
                <path d="M16 6 C10 10, 8 16, 10 22 C12 18, 14 16, 16 14 C18 16, 20 18, 22 22 C24 16, 22 10, 16 6Z" fill="#95d5b2" />
                <rect x="15" y="20" width="2" height="6" rx="1" fill="#1b4332" />
              </svg>
              <span>VerdiPro</span>
            </a>
            <p className="footer__tagline">
              Votre paysagiste professionnel en Île-de-France depuis 2009. Qualité, passion et respect de l'environnement.
            </p>
            <div className="footer__social">
              {['Facebook', 'Instagram', 'LinkedIn'].map(name => (
                <a key={name} href="#" className="footer__social-link" aria-label={name}>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <rect width="20" height="20" rx="4" fill="currentColor" opacity="0.15" />
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor">{name[0]}</text>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__nav" aria-label="Liens du pied de page">
            {Object.entries(LINKS).map(([group, items]) => (
              <div className="footer__nav-group" key={group}>
                <h3 className="footer__nav-title">{group}</h3>
                <ul>
                  {items.map(item => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} VerdiPro. Tous droits réservés.</p>
          <p>Fait avec soin — Île-de-France</p>
        </div>
      </div>
    </footer>
  )
}
