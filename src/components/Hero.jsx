function CherryBlossom() {
  return (
    <svg viewBox="0 0 260 660" xmlns="http://www.w3.org/2000/svg" fill="none">
      <defs>
        <filter id="wc" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="16"/>
        </filter>
      </defs>

      {/* Watercolor washes behind flower clusters */}
      <ellipse cx="192" cy="335" rx="72" ry="58" fill="#FFB0B2" opacity="0.22" filter="url(#wc)"/>
      <ellipse cx="232" cy="218" rx="55" ry="46" fill="#FF8B8E" opacity="0.17" filter="url(#wc)"/>
      <ellipse cx="244" cy="112" rx="46" ry="38" fill="#FFB0B2" opacity="0.15" filter="url(#wc)"/>
      <ellipse cx="85"  cy="415" rx="48" ry="40" fill="#FF9EA0" opacity="0.16" filter="url(#wc)"/>

      {/* Main branch */}
      <path d="M8 660 C34 568 76 458 120 342 C158 238 188 146 218 36"
            stroke="#2a1008" strokeWidth="5.5" strokeLinecap="round" opacity="0.82"/>
      {/* Sub-branch left */}
      <path d="M88 445 C64 422 42 408 20 398"
            stroke="#2a1008" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
      {/* Sub-branch right lower */}
      <path d="M98 418 C132 390 165 364 196 336"
            stroke="#2a1008" strokeWidth="3.5" strokeLinecap="round" opacity="0.75"/>
      {/* Sub-branch right mid */}
      <path d="M145 310 C174 280 202 254 230 220"
            stroke="#2a1008" strokeWidth="3" strokeLinecap="round" opacity="0.72"/>
      {/* Sub-branch right upper */}
      <path d="M185 196 C207 168 230 145 252 116"
            stroke="#2a1008" strokeWidth="2.5" strokeLinecap="round" opacity="0.65"/>
      {/* Small twig */}
      <path d="M172 252 C156 234 144 218 138 202"
            stroke="#2a1008" strokeWidth="1.8" strokeLinecap="round" opacity="0.55"/>

      {/* ── CLUSTER 1 — lower right (3 flowers) ── */}
      <g transform="translate(198,328)" opacity="0.97">
        <g transform="rotate(10)"><ellipse cx="0" cy="-17" rx="8.5" ry="13.5" fill="#FFB0B2"/></g>
        <g transform="rotate(82)"><ellipse cx="0" cy="-17" rx="8.5" ry="13.5" fill="#FF8B8E"/></g>
        <g transform="rotate(154)"><ellipse cx="0" cy="-17" rx="8.5" ry="13.5" fill="#FFB0B2"/></g>
        <g transform="rotate(226)"><ellipse cx="0" cy="-17" rx="8.5" ry="13.5" fill="#FF9EA0"/></g>
        <g transform="rotate(298)"><ellipse cx="0" cy="-17" rx="8.5" ry="13.5" fill="#FF8B8E"/></g>
        <circle cx="0" cy="0" r="5" fill="#FFE580" opacity="0.9"/>
      </g>
      <g transform="translate(218,350)" opacity="0.88">
        <g transform="rotate(-15)"><ellipse cx="0" cy="-14" rx="7" ry="11.5" fill="#FF8B8E"/></g>
        <g transform="rotate(57)"><ellipse cx="0" cy="-14" rx="7" ry="11.5" fill="#FFB0B2"/></g>
        <g transform="rotate(129)"><ellipse cx="0" cy="-14" rx="7" ry="11.5" fill="#FF8B8E"/></g>
        <g transform="rotate(201)"><ellipse cx="0" cy="-14" rx="7" ry="11.5" fill="#FFB0B2"/></g>
        <g transform="rotate(273)"><ellipse cx="0" cy="-14" rx="7" ry="11.5" fill="#FF9EA0"/></g>
        <circle cx="0" cy="0" r="4" fill="#FFE580" opacity="0.85"/>
      </g>
      <g transform="translate(180,344)" opacity="0.84">
        <g transform="rotate(20)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FFB0B2"/></g>
        <g transform="rotate(92)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF8B8E"/></g>
        <g transform="rotate(164)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FFB0B2"/></g>
        <g transform="rotate(236)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF9EA0"/></g>
        <g transform="rotate(308)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF8B8E"/></g>
        <circle cx="0" cy="0" r="3.5" fill="#FFE580" opacity="0.8"/>
      </g>

      {/* ── CLUSTER 2 — mid right (2 flowers) ── */}
      <g transform="translate(232,216)" opacity="0.93">
        <g transform="rotate(5)"><ellipse cx="0" cy="-16" rx="8" ry="13" fill="#FFB0B2"/></g>
        <g transform="rotate(77)"><ellipse cx="0" cy="-16" rx="8" ry="13" fill="#FF8B8E"/></g>
        <g transform="rotate(149)"><ellipse cx="0" cy="-16" rx="8" ry="13" fill="#FFB0B2"/></g>
        <g transform="rotate(221)"><ellipse cx="0" cy="-16" rx="8" ry="13" fill="#FF9EA0"/></g>
        <g transform="rotate(293)"><ellipse cx="0" cy="-16" rx="8" ry="13" fill="#FF8B8E"/></g>
        <circle cx="0" cy="0" r="4.5" fill="#FFE580" opacity="0.88"/>
      </g>
      <g transform="translate(248,234)" opacity="0.82">
        <g transform="rotate(-20)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FF8B8E"/></g>
        <g transform="rotate(52)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FFB0B2"/></g>
        <g transform="rotate(124)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FF8B8E"/></g>
        <g transform="rotate(196)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FFB0B2"/></g>
        <g transform="rotate(268)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FF9EA0"/></g>
        <circle cx="0" cy="0" r="3.8" fill="#FFE580" opacity="0.82"/>
      </g>

      {/* ── CLUSTER 3 — upper (2 flowers) ── */}
      <g transform="translate(252,112)" opacity="0.88">
        <g transform="rotate(0)"><ellipse cx="0" cy="-14" rx="7" ry="12" fill="#FFB0B2"/></g>
        <g transform="rotate(72)"><ellipse cx="0" cy="-14" rx="7" ry="12" fill="#FF8B8E"/></g>
        <g transform="rotate(144)"><ellipse cx="0" cy="-14" rx="7" ry="12" fill="#FFB0B2"/></g>
        <g transform="rotate(216)"><ellipse cx="0" cy="-14" rx="7" ry="12" fill="#FF9EA0"/></g>
        <g transform="rotate(288)"><ellipse cx="0" cy="-14" rx="7" ry="12" fill="#FF8B8E"/></g>
        <circle cx="0" cy="0" r="4" fill="#FFE580" opacity="0.85"/>
      </g>
      <g transform="translate(236,98)" opacity="0.76">
        <g transform="rotate(30)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF8B8E"/></g>
        <g transform="rotate(102)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FFB0B2"/></g>
        <g transform="rotate(174)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF8B8E"/></g>
        <g transform="rotate(246)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FFB0B2"/></g>
        <g transform="rotate(318)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF9EA0"/></g>
        <circle cx="0" cy="0" r="3.5" fill="#FFE580" opacity="0.78"/>
      </g>

      {/* ── Fleur twig ── */}
      <g transform="translate(136,200)" opacity="0.8">
        <g transform="rotate(15)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FFB0B2"/></g>
        <g transform="rotate(87)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF8B8E"/></g>
        <g transform="rotate(159)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FFB0B2"/></g>
        <g transform="rotate(231)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF9EA0"/></g>
        <g transform="rotate(303)"><ellipse cx="0" cy="-12" rx="6" ry="10" fill="#FF8B8E"/></g>
        <circle cx="0" cy="0" r="3.5" fill="#FFE580" opacity="0.8"/>
      </g>

      {/* ── Fleur branche gauche ── */}
      <g transform="translate(20,394)" opacity="0.82">
        <g transform="rotate(-10)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FFB0B2"/></g>
        <g transform="rotate(62)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FF8B8E"/></g>
        <g transform="rotate(134)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FFB0B2"/></g>
        <g transform="rotate(206)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FF9EA0"/></g>
        <g transform="rotate(278)"><ellipse cx="0" cy="-13" rx="6.5" ry="11" fill="#FF8B8E"/></g>
        <circle cx="0" cy="0" r="4" fill="#FFE580" opacity="0.8"/>
      </g>

      {/* ── Pétales tombants ── */}
      <ellipse cx="44"  cy="498" rx="5.5" ry="9"   fill="#FFB0B2" opacity="0.52" transform="rotate(-30 44 498)"/>
      <ellipse cx="142" cy="438" rx="5"   ry="8"   fill="#FF8B8E" opacity="0.46" transform="rotate(20 142 438)"/>
      <ellipse cx="68"  cy="558" rx="4.5" ry="7.5" fill="#FFB0B2" opacity="0.42" transform="rotate(-50 68 558)"/>
      <ellipse cx="112" cy="512" rx="4.5" ry="7.5" fill="#FF9EA0" opacity="0.4"  transform="rotate(35 112 512)"/>
      <ellipse cx="178" cy="478" rx="4"   ry="6.5" fill="#FFB0B2" opacity="0.36" transform="rotate(-15 178 478)"/>
      <ellipse cx="34"  cy="612" rx="4"   ry="6"   fill="#FF8B8E" opacity="0.3"  transform="rotate(25 34 612)"/>
      <ellipse cx="158" cy="388" rx="4.5" ry="7"   fill="#FFB0B2" opacity="0.42" transform="rotate(-40 158 388)"/>
      <ellipse cx="88"  cy="470" rx="3.5" ry="5.5" fill="#FF9EA0" opacity="0.36" transform="rotate(50 88 470)"/>
      <ellipse cx="205" cy="420" rx="3.5" ry="5.5" fill="#FFB0B2" opacity="0.32" transform="rotate(-22 205 420)"/>
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
