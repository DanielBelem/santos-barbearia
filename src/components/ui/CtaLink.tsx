import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type CtaLinkVariant = 'light' | 'dark' | 'outline-light' | 'outline-dark';

type CtaLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: CtaLinkVariant;
  }
>;

const variantClasses: Record<CtaLinkVariant, string> = {
  light:
    'border-white bg-white text-ink hover:border-white hover:bg-black hover:text-white',
  dark: 'border-ink bg-ink text-white hover:border-ink hover:bg-white hover:text-ink',
  'outline-light': 'border-white bg-transparent text-white hover:bg-white hover:text-ink',
  'outline-dark': 'border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
};

export function CtaLink({
  children,
  variant = 'dark',
  className = '',
  target,
  rel,
  onClick,
  ...anchorProps
}: CtaLinkProps) {
  const safeRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;

  return (
    <a
      {...anchorProps}
      target={target}
      rel={safeRel}
      onClick={(event) => {
        onClick?.(event);

        if (
          !event.defaultPrevented &&
          typeof anchorProps.href === 'string' &&
          anchorProps.href.startsWith('#')
        ) {
          event.preventDefault();

          const element = document.querySelector(anchorProps.href);

          element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
