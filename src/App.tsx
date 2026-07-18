import { useState } from 'react'
import { Header } from './components/layout/Header'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />


    </>
  )
}

export default App
