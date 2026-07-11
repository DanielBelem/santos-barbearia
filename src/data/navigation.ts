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
    label: 'Sobre nós',
    href: '#sobre',
  },
  {
    label: 'Serviços',
    href: '#servicos',
  },
  {
    label: 'Barbeiros',
    href: '#equipa',
  },
  {
    label: 'Contactos',
    href: '#contactos',
  },
] satisfies readonly NavigationItem[];