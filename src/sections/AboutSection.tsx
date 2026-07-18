import { Container } from '../components/layout/Container';
import { CtaLink } from '../components/ui/CtaLink';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { SectionHeading } from '../components/ui/SectionHeading';

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="bg-paper py-20 sm:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Sobre nós"
              title="Mais que um corte, uma experiência."
              description="Na Santos Barbearia, cada detalhe importa. Unimos técnica, tradição e um ambiente acolhedor para oferecer o melhor serviço e realçar o melhor de cada cliente."
            />

            <CtaLink
              href="#equipa"
              className="mt-8"
              variant="dark"
            >
              Conheça a nossa equipa
            </CtaLink>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 hidden size-full border border-ink/15 sm:block"
            />

            <ImageWithFallback
              src="/images/barbershop-interior.webp"
              alt="Interior da Santos Barbearia, com cadeiras de barbeiro e espelhos."
              loading="lazy"
              width={1400}
              height={900}
              className="relative aspect-[14/9] size-full object-cover grayscale"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}