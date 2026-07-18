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
      className="relative isolate min-h-[42rem] overflow-hidden bg-ink text-white"
    >
      <ImageWithFallback
        src="/images/hero.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-center grayscale"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/20" />

      <Container className="flex min-h-[42rem] items-center py-20">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-white/65 uppercase">
            Bem-vindo à
          </p>

          <h1
            id="hero-title"
            className="font-display text-6xl leading-[0.92] sm:text-7xl lg:text-8xl"
          >
            Santos
            <span className="mt-3 block font-body text-xl font-normal tracking-[0.3em] uppercase sm:text-2xl">
              Barbearia
            </span>
          </h1>

          <div
            aria-hidden="true"
            className="my-8 h-px w-12 bg-white/60"
          />

          <p className="max-w-md text-lg leading-8 text-white/75">
            Cortes clássicos. Estilo moderno. Confiança que se vê e
            qualidade que se sente.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaLink
              href={whatsappUrl}
              target="_blank"
              variant="light"
            >
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