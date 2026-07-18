import { Container } from '../components/layout/Container';
import { CtaLink } from '../components/ui/CtaLink';
import { siteConfig } from '../config/site';
import { buildTelephoneUrl, buildWhatsAppUrl } from '../utils/contact';

export function LocationSection() {
  const telephoneUrl = buildTelephoneUrl(siteConfig.phoneInternational);

  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phoneInternational,
    siteConfig.whatsappMessage,
  );

  const mapQuery = `Santos Barbearia ${siteConfig.address.city} ${siteConfig.address.country}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=17&output=embed`;

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

          <div className="group relative min-h-96 overflow-hidden border border-white/10">
            <iframe
              title="Mapa da Santos Barbearia"
              src={mapEmbedUrl}
              loading="lazy"
              className="h-full w-full border-none grayscale contrast-[0.92] opacity-95"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/15" />
          </div>
        </div>
      </Container>
    </section>
  );
}
