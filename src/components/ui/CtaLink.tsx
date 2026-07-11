import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type CtaLinkVariant = 'light' | 'dark' | 'outline-light' | 'outline-dark';

type CtaLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: CtaLinkVariant;
  }
>;

const variantClasses: Record<CtaLinkVariant, string> = {
  light:
    'border-white bg-white text-ink hover:border-paper hover:bg-paper',
  dark:
    'border-ink bg-ink text-white hover:border-charcoal hover:bg-charcoal',
  'outline-light':
    'border-white bg-transparent text-white hover:bg-white hover:text-ink',
  'outline-dark':
    'border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
};

export function CtaLink({
  children,
  variant = 'dark',
  className = '',
  target,
  rel,
  ...anchorProps
}: CtaLinkProps) {
  const safeRel =
    target === '_blank' ? rel ?? 'noopener noreferrer' : rel;

  return (
    <a
      {...anchorProps}
      target={target}
      rel={safeRel}
      className={`inline-flex min-h-12 items-center justify-center border px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}