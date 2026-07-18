import { useState } from 'react'
import { Header } from './components/layout/Header'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { TeamSection } from './sections/TeamSection'
import { LocationSection } from './sections/LocationSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <LocationSection />

    </>
  )
}

export default App
