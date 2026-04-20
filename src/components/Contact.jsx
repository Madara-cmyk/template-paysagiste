import { useState } from 'react'

const SERVICES_OPTIONS = [
  'Élagage / abattage',
  'Entretien de jardin',
  'Taille de haies',
  'Remise en état',
  'Débroussaillage',
  'Évacuation déchets verts',
  'Autre',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Votre nom est requis.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Adresse email invalide.'
    if (!form.service) e.service = 'Veuillez choisir un service.'
    if (!form.message.trim()) e.message = 'Décrivez votre projet.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact__success">
            <div className="contact__success-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                <circle cx="24" cy="24" r="24" fill="#fdf0f3" />
                <path d="M14 24l7 7 13-13" stroke="#7a1520" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>Message envoyé !</h2>
            <p>Merci pour votre demande. Nous vous répondrons sous 24h ouvrées.</p>
            <button className="btn btn--primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}>
              Nouvelle demande
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__info">
            <span className="section-badge">Parlons de votre projet</span>
            <h2 className="section-title">Demandez votre devis gratuit</h2>
            <p className="contact__intro">
              Décrivez-nous votre projet et nous vous recontactons sous 24h pour établir un devis personnalisé et sans engagement.
            </p>
            <ul className="contact__details">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>06 32 69 19 94</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>contactoccitaniagardens@gmail.com</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Toulouse & Occitanie</span>
              </li>
            </ul>
            <div className="contact__hours">
              <strong>Horaires d'ouverture</strong>
              <span>Lundi – Vendredi : 8h – 18h</span>
              <span>Samedi : 9h – 12h</span>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact">
            <div className="form-row">
              <div className={`form-field${errors.name ? ' form-field--error' : ''}`}>
                <label htmlFor="name">Nom complet <span aria-hidden="true">*</span></label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jean Dupont" autoComplete="name" />
                {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
              </div>
              <div className={`form-field${errors.email ? ' form-field--error' : ''}`}>
                <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jean@exemple.fr" autoComplete="email" />
                {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Téléphone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="06 12 34 56 78" autoComplete="tel" />
              </div>
              <div className={`form-field${errors.service ? ' form-field--error' : ''}`}>
                <label htmlFor="service">Service souhaité <span aria-hidden="true">*</span></label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Sélectionner…</option>
                  {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <span className="form-error" role="alert">{errors.service}</span>}
              </div>
            </div>
            <div className={`form-field${errors.message ? ' form-field--error' : ''}`}>
              <label htmlFor="message">Décrivez votre projet <span aria-hidden="true">*</span></label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Surface estimée, type de travaux souhaités, contraintes particulières…" />
              {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Envoyer ma demande
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
            <p className="form-notice">* Champs obligatoires. Vos données sont traitées en toute confidentialité.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
