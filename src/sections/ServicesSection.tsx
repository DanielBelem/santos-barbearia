import { Container } from '../components/layout/Container';
import { ServiceCard } from '../components/cards/ServiceCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { services, formatServicePrice } from '../data/services';

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="bg-ink py-20 text-white sm:py-28"
    >
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Os nossos serviços"
          title="Cuidado, estilo e precisão."
          centered
          inverted
        />

        <div className="mt-14 grid gap-4 divide-amber-400 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} position={index + 1} />
          ))}
        </div>

        <details className="group mx-auto mt-10 max-w-2xl rounded-lg border border-amber-400">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-6 py-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Consultar preços
            <span
              aria-hidden="true"
              className="text-2xl transition-transform group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>

          <div className="px-6 pb-6">
            <dl className="divide-y divide-black/10">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-4 text-white"
                >
                  <div
                    aria-hidden="true"
                    className="maxd-w-80 mx-auto h-px w-full bg-amber-400 sm:mx-0"
                  />
                  <dt className="font-medium">{service.title}</dt>

                  <dd className="text-sm text-neutral-600 tabular-nums">
                    {formatServicePrice(service)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </details>
      </Container>
    </section>
  );
}
