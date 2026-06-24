import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import AboutSection from './components/AboutSection'
import Technologies from './components/Technologies'
import FeaturedSolutions from './components/FeaturedSolutions'
import QualityFeatures from './components/QualityFeatures'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Clients from './components/Clients'
import ContactBanner from './components/ContactBanner'

function App() {
  return (
    <div className="antialiased selection:bg-industrial-yellow selection:text-on-surface">
      <Header />
      <main className="elegant-grid pt-10 overflow-x-hidden">
        <HeroSlider />
        <AboutSection />
        <Clients />
        <Technologies />
        <FeaturedSolutions />
        <QualityFeatures />
        <Testimonials />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
