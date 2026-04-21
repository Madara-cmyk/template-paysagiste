import { useEffect } from 'react'

export default function LegalModal({ title, children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="legal-modal" onClick={e => e.stopPropagation()}>
        <div className="legal-modal__header">
          <h2 className="legal-modal__title">{title}</h2>
          <button className="legal-modal__close" onClick={onClose} aria-label="Fermer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="legal-modal__body">{children}</div>
      </div>
    </div>
  )
}
