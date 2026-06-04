
import './App.css'
import ParticlesBg from './components/ParticlesBg'
import About from './sections/About'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    /* 1. This is the Base Layer: It holds the background color and covers the whole screen */
    <div className="relative min-h-screen bg-[#0d1117] overflow-x-hidden">
      
      {/* 2. The Mid Layer: Particles sit on top of the color but have -z-10 to stay behind text */}
      <ParticlesBg />

      {/* 3. The Top Layer: All your content goes here */}
      <main className="relative z-20">
        <Navbar />
        {/* Spacer to prevent Navbar from covering Hero content */}
        <div className="pt-16"></div>
        
        <Hero />
        <About />
        <Education />
        
        {/* I removed 'Skillss' and kept 'Skills' (the new layout we discussed) */}
        <Skills />
        
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default App
