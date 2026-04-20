import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ZoneIntervention from './components/ZoneIntervention'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
      <Footer />
    </>
  )
}
