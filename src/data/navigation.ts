export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export const navigationItems = [
  {
    label: 'Início',
    href: '#inicio',
  },
  {
    label: 'Serviços',
    href: '#servicos',
  },
  {
    label: 'Profissionais',
    href: '#equipa',
  },
  {
    label: 'Contactos',
    href: '#contactos',
  },
] satisfies readonly NavigationItem[];
