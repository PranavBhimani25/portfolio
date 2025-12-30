import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
