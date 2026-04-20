export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-overlay" />
      </div>
      <div className="hero__content container">
        <span className="hero__badge">Paysagiste certifié · Île-de-France</span>
        <h1 className="hero__title">
          Votre jardin,<br />
          <em>notre passion.</em>
        </h1>
        <p className="hero__subtitle">
          Paysagiste professionnel à Paris, Versailles, Saint-Germain-en-Laye et dans toute l'Île-de-France.<br />
          Création, aménagement et entretien de jardins — du projet à la réalisation.
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
