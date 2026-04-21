const LINKS = {
  Services: [
    'Élagage & abattage',
    'Entretien de jardins',
    'Taille de haies',
    'Remise en état',
    'Débroussaillage',
    'Évacuation déchets verts',
  ],
  'Zone d\u2019intervention': [
    'Toulouse',
    'Colomiers',
    'Blagnac',
    'Muret',
    'Tournefeuille',
    'Haute-Garonne (31)',
  ],
  Légal: [
    'Mentions légales',
    'Politique de confidentialité',
  ],
}

export default function Footer({ onOpenModal }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="header__logo footer__logo">
              <span className="footer__logo-img">
                <img src="/Logo.png" alt="Occitania Gardens" width="40" height="40" style={{objectFit:'contain'}} />
              </span>
              <span>Occitania Gardens</span>
            </a>
            <p className="footer__tagline">
              Alexis Jouanny — paysagiste indépendant à Toulouse. Élagage, entretien et remise en état en Haute-Garonne.
            </p>

            <div className="footer__social-block">
              <p className="footer__social-label">Suivez-nous sur les réseaux</p>
              <a
                href="https://www.instagram.com/occitaniagardens/"
                className="footer__instagram-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Occitania Gardens"
              >
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                </svg>
                @occitaniagardens
              </a>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Liens du pied de page">
            {Object.entries(LINKS).map(([group, items]) => (
              <div className="footer__nav-group" key={group}>
                <h3 className="footer__nav-title">{group}</h3>
                <ul>
                  {items.map(item => (
                    <li key={item}>
                      {item === 'Mentions légales' ? (
                        <button onClick={() => onOpenModal('mentions')} className="footer__legal-btn">{item}</button>
                      ) : item === 'Politique de confidentialité' ? (
                        <button onClick={() => onOpenModal('confidentialite')} className="footer__legal-btn">{item}</button>
                      ) : (
                        <a href="#">{item}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Occitania Gardens. Tous droits réservés.</p>
          <p>Fait avec soin — Toulouse, Haute-Garonne</p>
        </div>
      </div>
    </footer>
  )
}
