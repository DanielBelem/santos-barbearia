import { useEffect, useState } from 'react';
import { siteConfig } from '../../config/site';
import { navigationItems } from '../../data/navigation';
import { buildWhatsAppUrl } from '../../utils/contact';
import { CtaLink } from '../ui/CtaLink';
import { Logo } from '../ui/Logo';
import { Container } from './Container';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.phoneInternational,
    siteConfig.whatsappMessage,
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden lg:block"
        >
          <ul className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-55"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CtaLink
          href={whatsappUrl}
          target="_blank"
          className="hidden lg:inline-flex"
        >
          Marcar pelo WhatsApp
        </CtaLink>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="grid size-12 place-items-center lg:hidden"
        >
          <span aria-hidden="true" className="space-y-1.5">
            <span
              className={`block h-px w-7 bg-current transition-transform ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-7 bg-current transition-opacity ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-7 bg-current transition-transform ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </Container>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] overflow-y-auto border-t border-black/10 bg-paper lg:hidden"
        >
          <Container className="flex min-h-full flex-col py-10">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block border-b border-line py-5 font-display text-3xl"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <CtaLink
              href={whatsappUrl}
              target="_blank"
              onClick={closeMenu}
              className="mt-10 w-full"
            >
              Marcar pelo WhatsApp
            </CtaLink>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}