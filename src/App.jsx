
import './App.css'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import ParticlesBg from './components/ParticlesBg'
import About from './sections/About'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function AppContent() {
  const { isDark } = useTheme();

  return (
    /* 1. Base Layer: holds background color, carries data-theme for CSS variable switching */
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#0d1117]"
      data-theme={isDark ? 'dark' : 'light'}
    >
      {/* 2. Mid Layer: Particles sit behind text */}
      <ParticlesBg />

      {/* 3. Top Layer: All content */}
      <main className="relative z-20">
        <Navbar />
        {/* Spacer to prevent Navbar from covering Hero content */}
        <div className="pt-16"></div>

        <Hero />
        <About />
        <Education />

        {/* Skills (new layout) */}
        <Skills />

        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
