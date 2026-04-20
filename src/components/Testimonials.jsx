const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophie Marchand',
    location: 'Toulouse (31)',
    rating: 5,
    text: `Alexis est intervenu pour l\u2019élagage de nos grands chênes et la remise en état du jardin. Travail impeccable, chantier propre et tarif honnête. Je recommande sans hésiter\u00a0!`,
    initials: 'SM',
    color: '#c03a3e',
  },
  {
    id: 2,
    name: 'Marc Dufour',
    location: 'Colomiers (31)',
    rating: 5,
    text: `Nous faisons appel à Alexis pour l\u2019entretien de notre jardin depuis 2 ans. Ponctuel, soigneux et toujours de bons conseils. Notre haie n\u2019a jamais été aussi belle.`,
    initials: 'MD',
    color: '#FF6165',
  },
  {
    id: 3,
    name: 'Isabelle Roux',
    location: 'Montauban (82)',
    rating: 5,
    text: `Notre terrain était complètement en friche. Alexis a tout remis en ordre en deux jours. Résultat bluffant, délai tenu et prix clairement annoncé dès le départ. Merci !`,
    initials: 'IR',
    color: '#8a2528',
  },
  {
    id: 4,
    name: 'Pierre Castel',
    location: 'Albi (81)',
    rating: 5,
    text: `Débroussaillage d\u2019un grand terrain en pente, vraiment pas facile. Alexis a géré ça avec sérieux et efficacité. Évacuation complète incluse, rien à redire. Très bon rapport qualité-prix.`,
    initials: 'PC',
    color: '#e04a4e',
  },
]

function StarRating({ count }) {
  return (
    <div className="stars" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 16 16" width="16" height="16" className={i < count ? 'star star--filled' : 'star'}>
          <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.132L8 10.5l-3.708 2.084L5 8.452 2 5.528l4.146-.772L8 1z" fill="currentColor" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials section" id="temoignages">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Ce qu'ils disent</span>
          <h2 className="section-title">Témoignages clients</h2>
          <p className="section-subtitle">
            La confiance de nos clients est notre plus belle récompense.
          </p>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map(({ id, name, location, rating, text, initials, color }) => (
            <blockquote className="testimonial-card" key={id}>
              <StarRating count={rating} />
              <p className="testimonial-card__text">{text}</p>
              <footer className="testimonial-card__footer">
                <div className="testimonial-card__avatar" style={{ background: color }}>
                  {initials}
                </div>
                <div>
                  <cite className="testimonial-card__name">{name}</cite>
                  <span className="testimonial-card__location">{location}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
