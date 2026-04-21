import { useState } from 'react'

const PROJECTS = [
  {
    id: 1,
    title: 'Jardin contemporain à Versailles',
    category: 'Création',
    before: { bg: '#b0a4a6', label: 'Terrain en friche — herbes hautes, sol nu' },
    after: { bg: '#c4a0aa', label: 'Jardin remis en état, haies taillées et pelouse tondue' },
  },
  {
    id: 2,
    title: 'Élagage grands chênes à Colomiers',
    category: 'Élagage',
    before: { bg: '#a89898', label: 'Branches mortes, arbres non entretenus depuis 5 ans' },
    after: { bg: '#b89098', label: 'Couronne allégée, branches mortes supprimées' },
  },
  {
    id: 3,
    title: 'Taille de haie à Montauban',
    category: 'Taille',
    before: { bg: '#b0a598', label: 'Haie de 40m non taillée, dépassant sur la voie' },
    after: { bg: '#c4a098', label: 'Haie nette, finitions soignées, évacuation incluse' },
  },
  {
    id: 4,
    title: 'Remise en état à Tournefeuille',
    category: 'Remise en état',
    before: { bg: '#a89ea0', label: 'Jardin abandonné, ronces et végétation envahissante' },
    after: { bg: '#b898a4', label: 'Terrain dégagé, débroussaillé et prêt à replanter' },
  },
]

function BeforeAfterSlider({ before, after }) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const update = (clientX, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }

  const onMouseMove = (e) => {
    if (!dragging) return
    update(e.clientX, e.currentTarget.getBoundingClientRect())
  }

  const onTouchMove = (e) => {
    update(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())
  }

  return (
    <div
      className="ba-slider"
      onMouseMove={onMouseMove}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={onTouchMove}
      role="img"
      aria-label={`Comparaison avant/après : ${before.label} → ${after.label}`}
    >
      <div className="ba-slider__panel ba-slider__panel--after" style={{ background: after.bg }}>
        <div className="ba-slider__placeholder">
          <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
            <rect width="80" height="60" rx="4" fill="rgba(255,255,255,0.08)" />
            <circle cx="28" cy="22" r="8" fill="rgba(255,255,255,0.2)" />
            <path d="M8 52 L24 34 L36 44 L52 28 L72 52Z" fill="rgba(255,255,255,0.18)" />
          </svg>
          <span className="ba-slider__label ba-slider__label--after">Après</span>
          <p className="ba-slider__caption">{after.label}</p>
        </div>
      </div>

      <div className="ba-slider__panel ba-slider__panel--before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, background: before.bg }}>
        <div className="ba-slider__placeholder">
          <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
            <rect width="80" height="60" rx="4" fill="rgba(0,0,0,0.08)" />
            <circle cx="28" cy="22" r="8" fill="rgba(255,255,255,0.15)" />
            <path d="M8 52 L24 38 L38 46 L54 32 L72 52Z" fill="rgba(255,255,255,0.12)" />
          </svg>
          <span className="ba-slider__label ba-slider__label--before">Avant</span>
          <p className="ba-slider__caption">{before.label}</p>
        </div>
      </div>

      <div
        className="ba-slider__handle"
        style={{ left: `${position}%` }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
        aria-hidden="true"
      >
        <div className="ba-slider__handle-line" />
        <div className="ba-slider__handle-btn">
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path d="M7 4l-4 6 4 6M13 4l4 6-4 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="ba-slider__handle-line" />
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="gallery section" id="galerie">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Nos réalisations</span>
          <h2 className="section-title">Avant / Après</h2>
          <p className="section-subtitle">
            Glissez le curseur pour découvrir la transformation de nos chantiers.
          </p>
        </div>
        <div className="gallery__grid">
          {PROJECTS.map((project) => (
            <div className="gallery__item" key={project.id}>
              <BeforeAfterSlider before={project.before} after={project.after} />
              <div className="gallery__item-info">
                <span className="gallery__category">{project.category}</span>
                <h3 className="gallery__title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
