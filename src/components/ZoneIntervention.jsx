const ZONES = [
  { dept: '75', name: 'Paris', cities: ['Paris 1er–20e', 'Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Levallois-Perret'] },
  { dept: '78', name: 'Yvelines', cities: ['Versailles', 'Saint-Germain-en-Laye', 'Rambouillet', 'Mantes-la-Jolie'] },
  { dept: '77', name: 'Seine-et-Marne', cities: ['Fontainebleau', 'Melun', 'Meaux', 'Provins'] },
  { dept: '92', name: 'Hauts-de-Seine', cities: ['Nanterre', 'Issy-les-Moulineaux', 'Antony', 'Clamart'] },
  { dept: '91', name: 'Essonne', cities: ['Évry-Courcouronnes', 'Massy', 'Palaiseau', 'Corbeil-Essonnes'] },
  { dept: '94', name: 'Val-de-Marne', cities: ['Créteil', 'Vincennes', 'Vitry-sur-Seine', 'Champigny-sur-Marne'] },
  { dept: '93', name: 'Seine-Saint-Denis', cities: ['Montreuil', 'Saint-Denis', 'Aubervilliers', 'Noisy-le-Grand'] },
  { dept: '95', name: "Val-d'Oise", cities: ['Cergy', 'Pontoise', 'Argenteuil', 'Sarcelles'] },
]

export default function ZoneIntervention() {
  return (
    <section className="zones section" id="zones">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Déplacement inclus</span>
          <h2 className="section-title">Zone d'intervention en Île-de-France</h2>
          <p className="section-subtitle">
            Nous intervenons dans les 8 départements franciliens. Particuliers, copropriétés et entreprises.
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
          <a href="#contact">Contactez-nous</a>, nous étudions toute demande en Île-de-France.
        </p>
      </div>
    </section>
  )
}
