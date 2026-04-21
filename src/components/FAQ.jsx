import { useState } from 'react'

const FAQS = [
  {
    category: 'Tarifs & devis',
    items: [
      {
        q: 'Le devis est-il vraiment gratuit ?',
        a: 'Oui, totalement gratuit et sans engagement. Alexis se déplace pour évaluer votre projet et vous remet un devis détaillé sous 48h. Aucune mauvaise surprise : le tarif est fixé avant le début des travaux.',
      },
      {
        q: 'Combien coûte un élagage à Toulouse ?',
        a: 'Le tarif dépend de la hauteur et du nombre d\'arbres, de l\'accessibilité du chantier et de la quantité de déchets à évacuer. Chaque situation est différente — la meilleure façon d\'avoir un prix précis est de demander un devis gratuit.',
      },
      {
        q: 'Intervenez-vous pour les particuliers et les professionnels ?',
        a: 'Oui. Occitania Gardens intervient pour les particuliers, les copropriétés, les entreprises et les collectivités dans toute la Haute-Garonne et les départements voisins.',
      },
    ],
  },
  {
    category: 'Interventions',
    items: [
      {
        q: 'Dans quelles villes intervenez-vous ?',
        a: 'Nous intervenons principalement à Toulouse et dans toute la Haute-Garonne (31), mais aussi dans le Tarn (81), le Tarn-et-Garonne (82), le Gers (32) et l\'Ariège (09). Consultez la section "Zone d\'intervention" pour le détail des villes couvertes.',
      },
      {
        q: 'Vous déplacez-vous loin de Toulouse ?',
        a: 'Oui, dans un rayon d\'environ 80 km autour de Toulouse. Pour les chantiers importants, nous étudions toute demande hors zone — n\'hésitez pas à nous contacter.',
      },
      {
        q: 'Quels sont les délais d\'intervention ?',
        a: 'Pour les demandes urgentes (arbre dangereux, tempête), nous intervenons dans les meilleurs délais. Pour les chantiers planifiés, comptez généralement 1 à 2 semaines selon la période de l\'année.',
      },
    ],
  },
  {
    category: 'Technique & réglementation',
    items: [
      {
        q: 'Le débroussaillage est-il obligatoire en Occitanie ?',
        a: 'Oui. En zone à risque incendie (classée par arrêté préfectoral), le débroussaillage est obligatoire dans un rayon de 50 mètres autour des constructions. En Haute-Garonne et dans les départements voisins, de nombreuses communes sont concernées. Occitania Gardens réalise ces interventions en conformité avec la réglementation en vigueur.',
      },
    ],
  },
  {
    category: 'Pratique',
    items: [
      {
        q: 'Que faites-vous des déchets verts après l\'intervention ?',
        a: 'L\'évacuation complète des déchets verts (branchages, tontes, feuilles) est incluse dans la plupart de nos prestations. Le chantier est laissé propre à notre départ. Précisez-le lors de votre demande de devis si vous souhaitez conserver certains déchets (bois de chauffage, broyat).',
      },
      {
        q: 'Faut-il être présent pendant l\'intervention ?',
        a: 'Ce n\'est pas obligatoire. Une visite préalable suffit pour cadrer le travail. Alexis peut intervenir en votre absence, à condition d\'avoir accès au chantier. Un compte-rendu vous est communiqué à la fin de l\'intervention.',
      },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{q}</span>
        <svg className="faq-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      {open && <div className="faq-item__answer"><p>{a}</p></div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq section section--alt" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Questions fréquentes</span>
          <h2 className="section-title">Tout ce que vous voulez savoir</h2>
          <p className="section-subtitle">
            Une question sur nos services, nos tarifs ou nos zones d'intervention ? La réponse est probablement ici.
          </p>
        </div>
        <div className="faq__grid">
          {FAQS.map(({ category, items }) => (
            <div className="faq__category" key={category}>
              <h3 className="faq__category-title">{category}</h3>
              <div className="faq__items">
                {items.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
