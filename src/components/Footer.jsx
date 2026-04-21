const LINKS = {
  Services: [
    'Élagage & abattage',
    'Entretien de jardins',
    'Taille de haies',
    'Remise en état',
    'Débroussaillage',
    'Évacuation déchets verts',
  ],
  'Zones d\u2019intervention': [
    'Toulouse (31)',
    'Haute-Garonne (31)',
    'Tarn-et-Garonne (82)',
    'Tarn (81)',
    'Gers (32)',
    'Ariège (09)',
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
              <svg width="38" height="38" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M42 22 H58 V42 H78 V58 H58 V78 H42 V58 H22 V42 H42 Z" fill="white"/>
                <circle cx="50" cy="13" r="8"  fill="white"/>
                <circle cx="39" cy="19" r="6"  fill="white"/>
                <circle cx="61" cy="19" r="6"  fill="white"/>
                <circle cx="50" cy="87" r="8"  fill="white"/>
                <circle cx="39" cy="81" r="6"  fill="white"/>
                <circle cx="61" cy="81" r="6"  fill="white"/>
                <circle cx="13" cy="50" r="8"  fill="white"/>
                <circle cx="19" cy="39" r="6"  fill="white"/>
                <circle cx="19" cy="61" r="6"  fill="white"/>
                <circle cx="87" cy="50" r="8"  fill="white"/>
                <circle cx="81" cy="39" r="6"  fill="white"/>
                <circle cx="81" cy="61" r="6"  fill="white"/>
              </svg>
              <span>Occitania Gardens</span>
            </a>
            <p className="footer__tagline">
              Alexis Jouanny — paysagiste indépendant à Toulouse. Élagage, entretien et remise en état en Occitanie.
            </p>
            <div className="footer__social">
              {[{ name: 'Instagram', href: 'https://www.instagram.com/occitaniagardens/' }].map(({ name, href }) => (
                <a key={name} href={href} className="footer__social-link" aria-label={name} target="_blank" rel="noopener noreferrer">
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
          <p>Fait avec soin — Toulouse, Occitanie</p>
        </div>
      </div>
    </footer>
  )
}
