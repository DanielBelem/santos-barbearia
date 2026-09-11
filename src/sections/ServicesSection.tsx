import { Container } from '../components/layout/Container';
import { ServiceCard } from '../components/cards/ServiceCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { services } from '../data/services';
import { CtaLink } from '../components/ui/CtaLink';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/contact';

export function ServicesSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phoneInternational,
    siteConfig.whatsappMessage,
  );

  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="bg-ink py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Os nossos serviços"
          title="Cuidado, estilo e precisão."
          inverted
          centered
        />

        <div className="mt-14 grid divide-y divide-white/15 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} position={index + 1} />
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <CtaLink href={whatsappUrl} target="_blank" variant="light">
            Consultar Preços
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
