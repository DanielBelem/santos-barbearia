export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  url: string;
  email: string;
  phoneDisplay: string;
  phoneInternational: string;
  whatsappMessage: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  openingHours: readonly string[];
  googleMapsUrl: string;
  socialLinks: readonly SocialLink[];
};

export const siteConfig = {
  name: 'Santos Barbearia',
  shortName: 'Santos',
  description:
    'Cortes clássicos, estilo moderno e cuidados de barba em São Mamede de Infesta.',
  url: 'https://santosbarbearia.pt',
  email: 'geral@santosbarbearia.pt', // email necessita confirmação
  phoneDisplay: '+351 913 135 742',
  phoneInternational: '351913135742',
  whatsappMessage: 'Olá! Gostaria de marcar um serviço.',
  address: {
    street: 'R. Godinho de Faria 210',
    postalCode: '4465-149',
    city: 'São Mamede de Infesta',
    country: 'Portugal',
  },
  openingHours: [
    'Segunda a sábado: 09:00–19:30',
    'Domingo: encerrado',
  ],
  googleMapsUrl: 'https://maps.app.goo.gl/Nzo621sCiMb817hh8',
  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/santosbarbearia.sm',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/SantosBarbearia.SM?locale=pt_PT',
    },
  ],
} satisfies SiteConfig;