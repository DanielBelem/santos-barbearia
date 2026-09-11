import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AboutSection } from './sections/AboutSection';
import { HeroSection } from './sections/HeroSection';
import { LocationSection } from './sections/LocationSection';
import { ServicesSection } from './sections/ServicesSection';
import { TeamSection } from './sections/TeamSection';

function App() {
  return (
    <>
      <Header />

      <main id="conteudo-principal">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
