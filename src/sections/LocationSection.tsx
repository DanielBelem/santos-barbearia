import { Container } from '../components/layout/Container';
import { CtaLink } from '../components/ui/CtaLink';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { siteConfig } from '../config/site';
import { buildTelephoneUrl, buildWhatsAppUrl } from '../utils/contact';

export function LocationSection() {
  const telephoneUrl = buildTelephoneUrl(siteConfig.phoneInternational);

  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phoneInternational,
    siteConfig.whatsappMessage,
  );

  return (
    <section
      id="contactos"
      aria-labelledby="location-title"
      className="bg-ink py-20 text-white"
    >
      <Container>
        <div className="grid items-stretch gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
              Onde estamos
            </p>

            <h2 id="location-title" className="font-display mt-4 text-5xl">
              Visite-nos.
            </h2>

            <address className="mt-8 space-y-6 text-sm leading-6 text-white/70 not-italic">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>

              <p>
                <a href={telephoneUrl} className="transition-colors hover:text-white">
                  {siteConfig.phoneDisplay}
                </a>
              </p>

              <p>
                {siteConfig.openingHours.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </p>
            </address>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CtaLink
                href={siteConfig.googleMapsUrl}
                target="_blank"
                variant="outline-light"
              >
                Ver no Google Maps
              </CtaLink>

              <CtaLink href={whatsappUrl} target="_blank" variant="light">
                WhatsApp
              </CtaLink>
            </div>
          </div>

          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir localização da Santos Barbearia no Google Maps"
            className="group relative min-h-96 overflow-hidden border border-white/10"
          >
            <ImageWithFallback
              src="/images/location-map.webp"
              alt="Mapa da localização da Santos Barbearia em Ponte de Lima."
              loading="lazy"
              width={1400}
              height={800}
              className="size-full object-cover grayscale transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
            />

            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/5" />

            <span className="text-ink absolute top-1/2 left-1/2 -translate-1/2 bg-white px-5 py-3 text-xs font-semibold tracking-wide uppercase shadow-xl">
              Santos Barbearia
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
