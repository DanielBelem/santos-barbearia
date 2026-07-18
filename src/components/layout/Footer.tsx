import { siteConfig } from '../../config/site';
import { navigationItems } from '../../data/navigation';
import { buildTelephoneUrl, buildWhatsAppUrl } from '../../utils/contact';
import { Logo } from '../ui/Logo';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phoneInternational,
    siteConfig.whatsappMessage,
  );

  const telephoneUrl = buildTelephoneUrl(siteConfig.phoneInternational);

  return (
    <footer className="border-line bg-paper border-t py-14">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />

            <p className="text-smoke mt-5 max-w-xs text-sm leading-6">
              Tradição, técnica e cuidado num espaço pensado para si.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.15em] uppercase">
              Navegação
            </h2>

            <ul className="text-smoke mt-5 space-y-3 text-sm">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-ink transition-colors">
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

            <ul className="text-smoke mt-5 space-y-3 text-sm">
              <li>
                <a href={telephoneUrl} className="hover:text-ink transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-ink transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
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

            <ul className="text-smoke mt-5 flex flex-wrap gap-4 text-sm">
              {siteConfig.socialLinks.map((socialLink) => (
                <li key={socialLink.label}>
                  <a
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink transition-colors"
                  >
                    {socialLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-line text-smoke mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-xs sm:flex-row">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
