import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Offers from './components/Offers'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <Pillars />
      <WhyUs />
      <Process />
      <About />
      <Testimonials />
      <Offers />
      <section id="contatti">
        <FinalCTA />
      </section>
      <Footer />
    </div>
  )
}

export default App
