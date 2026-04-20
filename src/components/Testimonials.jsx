const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophie Lefebvre',
    location: 'Versailles (78)',
    rating: 5,
    text: `VerdiPro a entièrement repensé notre jardin de 800m\u00b2. Le résultat est absolument magnifique. L\u2019équipe est professionnelle, ponctuelle et très attentive à nos souhaits. Je recommande vivement\u00a0!`,
    initials: 'SL',
    color: '#2d6a4f',
  },
  {
    id: 2,
    name: 'Marc Dubois',
    location: 'Saint-Germain-en-Laye (78)',
    rating: 5,
    text: `Nous faisons appel à VerdiPro pour l\u2019entretien de notre jardin depuis 3 ans. Toujours impeccable, fiables et de bons conseils pour les plantations saisonnières. Un vrai plaisir.`,
    initials: 'MD',
    color: '#40916c',
  },
  {
    id: 3,
    name: 'Isabelle Morel',
    location: 'Fontainebleau (77)',
    rating: 5,
    text: 'La création de notre terrasse et la plantation de la haie bocagère ont dépassé toutes nos espérances. Délai respecté, tarif transparent et équipe vraiment sympathique. Merci !',
    initials: 'IM',
    color: '#1b4332',
  },
  {
    id: 4,
    name: 'Pierre Garnier',
    location: 'Vincennes (94)',
    rating: 4,
    text: `Excellent travail pour notre potager surélevé et l\u2019installation du système d\u2019arrosage automatique. Très bon rapport qualité-prix, résultat soigné et livraison dans les temps.`,
    initials: 'PG',
    color: '#52b788',
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
