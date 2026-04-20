const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="6" cy="6.5" r="2.5" strokeLinejoin="round"/>
        <circle cx="6" cy="17.5" r="2.5" strokeLinejoin="round"/>
        <path strokeLinecap="round" d="M20 4L8.5 15.5"/>
        <path strokeLinecap="round" d="M20 20L8.5 8.5"/>
      </svg>
    ),
    title: 'Élagage & abattage',
    description: "Élagage raisonné, recépage et abattage sécurisé de tous types d'arbres. Évacuation des déchets incluse.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-7"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15c-3 0-6-3-6-7 0 0 2.5-1 5 0s5 3 1 7z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17c2-1 5-3 5-7 0 0-2.5-1-5 0"/>
      </svg>
    ),
    title: 'Entretien de jardins',
    description: 'Tonte, désherbage, débroussaillage et soins saisonniers pour un jardin toujours impeccable.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8v3a3 3 0 006 0V8"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 8v3a3 3 0 006 0V8"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14v3M12 14v3M18 14v3"/>
      </svg>
    ),
    title: 'Taille de haies',
    description: 'Taille précise de haies, arbustes et massifs. Travail soigné avec finitions nettes et évacuation complète.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C9.5 3 7 5.5 7 8c0 1.5.5 3 2 4h6c1.5-1 2-2.5 2-4 0-2.5-2.5-5-5-5z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h4v2h-4z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 21h5"/>
      </svg>
    ),
    title: 'Remise en état',
    description: "Jardins à l'abandon, terrains en friche, espaces négligés : remise en ordre complète avec résultat visible dès le premier passage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1A3.75 3.75 0 0012 18z"/>
      </svg>
    ),
    title: 'Débroussaillage',
    description: 'Débroussaillage de terrains, talus et zones difficiles. Intervention rapide, même sur grandes surfaces.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
      </svg>
    ),
    title: 'Évacuation déchets verts',
    description: 'Collecte et évacuation de tous vos déchets verts : branchages, tontes, tailles. Chantier propre garanti.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Ce que nous faisons</span>
          <h2 className="section-title">Nos services de paysagisme à Toulouse</h2>
          <p className="section-subtitle">
            Élagage, entretien, taille et remise en état — pour les particuliers, copropriétés et collectivités de Haute-Garonne et alentours.
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
