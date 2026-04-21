import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ZoneIntervention from './components/ZoneIntervention'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LegalModal from './components/LegalModal'
import MentionsLegales from './components/MentionsLegales'
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite'

export default function App() {
  const [modal, setModal] = useState(null)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <ZoneIntervention />
        <Contact />
      </main>
      <Footer onOpenModal={setModal} />
      {modal === 'mentions' && (
        <LegalModal title="Mentions légales" onClose={() => setModal(null)}>
          <MentionsLegales />
        </LegalModal>
      )}
      {modal === 'confidentialite' && (
        <LegalModal title="Politique de confidentialité" onClose={() => setModal(null)}>
          <PolitiqueConfidentialite />
        </LegalModal>
      )}
    </>
  )
}
