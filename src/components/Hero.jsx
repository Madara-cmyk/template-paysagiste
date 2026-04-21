function CherryBlossom() {
  return (
    <svg viewBox="0 0 220 600" xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Main branch */}
      <path d="M10 600 C35 520 70 430 105 330 C140 230 170 140 200 30"
            stroke="#3d1a1a" strokeWidth="2.8" strokeLinecap="round" opacity="0.65"/>
      {/* Sub-branch 1 */}
      <path d="M65 430 C92 405 118 382 145 355"
            stroke="#3d1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      {/* Sub-branch 2 */}
      <path d="M112 325 C135 300 158 278 182 252"
            stroke="#3d1a1a" strokeWidth="1.7" strokeLinecap="round" opacity="0.6"/>
      {/* Sub-branch 3 */}
      <path d="M158 218 C174 192 192 170 210 142"
            stroke="#3d1a1a" strokeWidth="1.4" strokeLinecap="round" opacity="0.55"/>

      {/* Flower 1 — end of sub-branch 1 */}
      <g transform="translate(148,350)" opacity="0.88">
        <circle cx="0"    cy="-9"  r="6" fill="#FFB0B2"/>
        <circle cx="8.6"  cy="-2.8" r="6" fill="#FF8B8E"/>
        <circle cx="5.3"  cy="7.3" r="6" fill="#FFB0B2"/>
        <circle cx="-5.3" cy="7.3" r="6" fill="#FF8B8E"/>
        <circle cx="-8.6" cy="-2.8" r="6" fill="#FFB0B2"/>
        <circle cx="0" cy="0" r="2.8" fill="#FFE066" opacity="0.7"/>
      </g>

      {/* Flower 2 — end of sub-branch 2 */}
      <g transform="translate(185,247)" opacity="0.82">
        <circle cx="0"    cy="-8"  r="5.5" fill="#FF8B8E"/>
        <circle cx="7.6"  cy="-2.5" r="5.5" fill="#FFB0B2"/>
        <circle cx="4.7"  cy="6.5" r="5.5" fill="#FF8B8E"/>
        <circle cx="-4.7" cy="6.5" r="5.5" fill="#FFB0B2"/>
        <circle cx="-7.6" cy="-2.5" r="5.5" fill="#FF8B8E"/>
        <circle cx="0" cy="0" r="2.5" fill="#FFE066" opacity="0.65"/>
      </g>

      {/* Flower 3 — on main branch mid-point */}
      <g transform="translate(105,325)" opacity="0.8">
        <circle cx="0"    cy="-7"  r="5" fill="#FFB0B2"/>
        <circle cx="6.7"  cy="-2.2" r="5" fill="#FF6165"/>
        <circle cx="4.1"  cy="5.7" r="5" fill="#FFB0B2"/>
        <circle cx="-4.1" cy="5.7" r="5" fill="#FF6165"/>
        <circle cx="-6.7" cy="-2.2" r="5" fill="#FFB0B2"/>
        <circle cx="0" cy="0" r="2.2" fill="#FFE066" opacity="0.6"/>
      </g>

      {/* Flower 4 — tip of sub-branch 3 */}
      <g transform="translate(212,138)" opacity="0.75">
        <circle cx="0"    cy="-6"  r="4.5" fill="#FF8B8E"/>
        <circle cx="5.7"  cy="-1.9" r="4.5" fill="#FFB0B2"/>
        <circle cx="3.5"  cy="4.9" r="4.5" fill="#FF8B8E"/>
        <circle cx="-3.5" cy="4.9" r="4.5" fill="#FFB0B2"/>
        <circle cx="-5.7" cy="-1.9" r="4.5" fill="#FF8B8E"/>
        <circle cx="0" cy="0" r="2" fill="#FFE066" opacity="0.6"/>
      </g>

      {/* Flower 5 — upper main branch */}
      <g transform="translate(190,80)" opacity="0.7">
        <circle cx="0"    cy="-6"  r="4.5" fill="#FFB0B2"/>
        <circle cx="5.7"  cy="-1.9" r="4.5" fill="#FF8B8E"/>
        <circle cx="3.5"  cy="4.9" r="4.5" fill="#FFB0B2"/>
        <circle cx="-3.5" cy="4.9" r="4.5" fill="#FF8B8E"/>
        <circle cx="-5.7" cy="-1.9" r="4.5" fill="#FFB0B2"/>
        <circle cx="0" cy="0" r="2" fill="#FFE066" opacity="0.55"/>
      </g>

      {/* Falling petals */}
      <ellipse cx="55"  cy="380" rx="4" ry="6.5" fill="#FFB0B2" opacity="0.4" transform="rotate(-25 55 380)"/>
      <ellipse cx="130" cy="280" rx="3.5" ry="5.5" fill="#FF8B8E" opacity="0.35" transform="rotate(15 130 280)"/>
      <ellipse cx="170" cy="190" rx="3" ry="5"   fill="#FFB0B2" opacity="0.3" transform="rotate(-40 170 190)"/>
      <ellipse cx="85"  cy="470" rx="3" ry="4.5" fill="#FF6165" opacity="0.25" transform="rotate(30 85 470)"/>
      <ellipse cx="160" cy="430" rx="2.5" ry="4" fill="#FFB0B2" opacity="0.3" transform="rotate(-10 160 430)"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-overlay" />
        <div className="hero__cherry hero__cherry--left"><CherryBlossom /></div>
        <div className="hero__cherry hero__cherry--right"><CherryBlossom /></div>
      </div>
      <div className="hero__content container">
        <span className="hero__badge">Paysagiste · Toulouse & Occitanie</span>
        <h1 className="hero__title">
          Votre jardin,<br />
          <em>entre de bonnes mains.</em>
        </h1>
        <p className="hero__subtitle">
          Paysagiste indépendant à Toulouse — élagage, entretien de jardins, taille de haies, débroussaillage et remise en état en Haute-Garonne et Occitanie.<br />
          Alexis Jouanny : réactif, soigneux, devis gratuit sous 48h.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--lg">Demander un devis gratuit</a>
          <a href="#galerie" className="btn btn--ghost btn--lg">Voir nos réalisations</a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <strong>+200</strong>
            <span>Jardins réalisés</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <strong>15 ans</strong>
            <span>D'expérience</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <strong>98%</strong>
            <span>Clients satisfaits</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
