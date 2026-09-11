import { CtaLink } from '../components/ui/CtaLink';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { Container } from '../components/layout/Container';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/contact';

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phoneInternational,
    siteConfig.whatsappMessage,
  );

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="bg-ink relative isolate min-h-[42rem] overflow-hidden text-white"
    >
      <ImageWithFallback
        src="/images/barbearia_black_white.png"
        alt="Imagem de Santos Barbearia em preto e branco"
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full translate-y-[30%] scale-[0.98] object-cover object-bottom object-center grayscale"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/20" />

      <Container className="flex min-h-[42rem] items-center py-20">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-normal tracking-[0.2em] text-white/80 uppercase sm:text-2xl">
            Bem-vindo à
          </p>

          <h1
            id="hero-title"
            className="font-display text-7xl leading-[0.85] font-semibold tracking-[-0.02em] uppercase sm:text-8xl lg:text-9xl"
          >
            Santos
            <span className="font-body mt-3 block text-xl font-normal uppercase sm:text-2xl">
              Barbearia
            </span>
          </h1>

          <div aria-hidden="true" className="my-8 h-px w-80 bg-white/60" />

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaLink href={whatsappUrl} target="_blank" variant="light">
              Marcar pelo WhatsApp
            </CtaLink>

            <CtaLink href="#servicos" variant="outline-light">
              Conhecer serviços
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
