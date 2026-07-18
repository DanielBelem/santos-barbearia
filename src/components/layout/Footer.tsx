import { siteConfig } from '../../config/site';
import { navigationItems } from '../../data/navigation';
import {
  buildTelephoneUrl,
  buildWhatsAppUrl,
} from '../../utils/contact';
import { Logo } from '../ui/Logo';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phoneInternational,
    siteConfig.whatsappMessage,
  );

  const telephoneUrl = buildTelephoneUrl(
    siteConfig.phoneInternational,
  );

  return (
    <footer className="border-t border-line bg-paper py-14">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />

            <p className="mt-5 max-w-xs text-sm leading-6 text-smoke">
              Tradição, técnica e cuidado num espaço pensado para si.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.15em] uppercase">
              Navegação
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-smoke">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.15em] uppercase">
              Contactos
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-smoke">
              <li>
                <a
                  href={telephoneUrl}
                  className="transition-colors hover:text-ink"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.15em] uppercase">
              Redes sociais
            </h2>

            <ul className="mt-5 flex flex-wrap gap-4 text-sm text-smoke">
              {siteConfig.socialLinks.map((socialLink) => (
                <li key={socialLink.label}>
                  <a
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-ink"
                  >
                    {socialLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-line pt-6 text-xs text-smoke sm:flex-row">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos
            reservados.
          </p>

        </div>
      </Container>
    </footer>
  );
}