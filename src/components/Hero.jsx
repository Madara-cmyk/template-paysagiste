
export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-overlay" />
        <div className="hero__cherry hero__cherry--left"><img src="/Cerisier.png" alt="" /></div>
        <div className="hero__cherry hero__cherry--right"><img src="/Cerisier.png" alt="" /></div>
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
