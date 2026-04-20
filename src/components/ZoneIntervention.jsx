const ZONES = [
  { dept: '31', name: 'Haute-Garonne', cities: ['Toulouse', 'Colomiers', 'Blagnac', 'Muret', 'Tournefeuille', 'Labège'] },
  { dept: '82', name: 'Tarn-et-Garonne', cities: ['Montauban', 'Castelsarrasin', 'Moissac', 'Grisolles'] },
  { dept: '81', name: 'Tarn', cities: ['Albi', 'Gaillac', 'Lavaur', 'Castres'] },
  { dept: '32', name: 'Gers', cities: ['Auch', "L'Isle-Jourdain", 'Gimont', 'Vic-Fezensac'] },
  { dept: '09', name: 'Ariège', cities: ['Pamiers', 'Foix', 'Saverdun', 'Saint-Girons'] },
]

export default function ZoneIntervention() {
  return (
    <section className="zones section" id="zones">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Déplacement inclus</span>
          <h2 className="section-title">Zone d'intervention — Toulouse & Occitanie</h2>
          <p className="section-subtitle">
            Alexis intervient dans toute la Haute-Garonne et les départements voisins. Particuliers, copropriétés et entreprises.
          </p>
        </div>
        <div className="zones__grid">
          {ZONES.map(({ dept, name, cities }) => (
            <div className="zone-card" key={dept}>
              <div className="zone-card__header">
                <span className="zone-card__dept">{dept}</span>
                <h3 className="zone-card__name">{name}</h3>
              </div>
              <ul className="zone-card__cities">
                {cities.map(city => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="zones__note">
          Votre ville n'est pas listée ?{' '}
          <a href="#contact">Contactez Alexis</a>, il étudie toute demande en Occitanie.
        </p>
      </div>
    </section>
  )
}
