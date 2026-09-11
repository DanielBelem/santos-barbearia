import { Container } from '../components/layout/Container';
import { CtaLink } from '../components/ui/CtaLink';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { SectionHeading } from '../components/ui/SectionHeading';

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Sobre nós"
              title="Mais de 10 anos a cuidar do seu estilo."
              description="Na Santos Barbearia, unimos técnica, tradição e um ambiente acolhedor para oferecer um serviço 100% personalizado e excecional."
            />

            <div className="mt-12 hidden justify-center sm:flex">
              <CtaLink href="#equipa" variant="dark">
                Conheça a nossa equipa
              </CtaLink>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="border-ink/15 absolute -right-4 -bottom-4 hidden size-full border sm:block"
            />

            <ImageWithFallback
              src="/images/magal_cutting_black_white.png"
              alt="Magal a cortar cabelo em preto e branco"
              loading="lazy"
              width={1400}
              height={900}
              className="relative aspect-[14/9] size-full scale-[0.98] object-cover object-center grayscale"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
