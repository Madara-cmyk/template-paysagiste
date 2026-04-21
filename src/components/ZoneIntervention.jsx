const CITIES = [
  'Toulouse', 'Colomiers', 'Blagnac', 'Tournefeuille', 'Muret',
  'Labège', 'Castanet-Tolosan', 'Ramonville-Saint-Agne', 'L\'Union',
  'Balma', 'Portet-sur-Garonne', 'Plaisance-du-Touch', 'Cugnaux',
  'Léguevin', 'Pibrac', 'Aussonne', 'Fenouillet', 'Saint-Alban',
  'Aucamville', 'Cornebarrieu',
]

export default function ZoneIntervention() {
  return (
    <section className="zones section" id="zones">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Déplacement inclus</span>
          <h2 className="section-title">Zone d'intervention — Toulouse & Haute-Garonne</h2>
          <p className="section-subtitle">
            Alexis intervient à Toulouse et dans toute la Haute-Garonne (31). Particuliers, copropriétés et entreprises.
          </p>
        </div>
        <div className="zones__cities-grid">
          {CITIES.map(city => (
            <div className="zone-city" key={city}>{city}</div>
          ))}
        </div>
        <p className="zones__note">
          Votre ville n'est pas listée ?{' '}
          <a href="#contact">Contactez Alexis</a>, il étudie toute demande en Haute-Garonne.
        </p>
      </div>
    </section>
  )
}
