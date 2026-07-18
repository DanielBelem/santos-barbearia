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
      <a
        href="#conteudo-principal"
        className="fixed top-3 left-3 z-[100] -translate-y-24 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-lg transition-transform focus:translate-y-0"
      >
        Saltar para o conteúdo principal
      </a>

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