const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.5 2 4 5 4 9M12 3c-2.5 2-4 5-4 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9" />
      </svg>
    ),
    title: 'Création de jardins',
    description: 'Conception et réalisation de jardins sur mesure, adaptés à votre style de vie et à votre environnement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 12v9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h7.5" />
      </svg>
    ),
    title: 'Entretien régulier',
    description: `Taille, tonte, désherbage et soins saisonniers pour maintenir votre jardin en parfait état toute l\u2019année.`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
      </svg>
    ),
    title: 'Aménagement extérieur',
    description: 'Terrasses, allées, murets et structures extérieures conçus avec des matériaux nobles et durables.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Engazonnement',
    description: 'Semis et pose de gazon en rouleaux pour une pelouse dense, verte et résistante dès le premier jour.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
      </svg>
    ),
    title: `Système d\u2019arrosage`,
    description: `Installation de systèmes d\u2019irrigation automatiques intelligents pour un arrosage optimal et économique.`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Élagage & abattage',
    description: 'Élagage raisonné, taille en hauteur et abattage sécurisé de vos arbres par des professionnels certifiés.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Ce que nous faisons</span>
          <h2 className="section-title">Nos services</h2>
          <p className="section-subtitle">
            Une offre complète pour créer, embellir et entretenir vos espaces verts avec expertise et passion.
          </p>
        </div>
        <div className="services__grid">
          {SERVICES.map(({ icon, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-card__icon">{icon}</div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
