export type ServiceIconName = 'haircut' | 'beard' | 'complete' | 'care';

export type Service = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export const services = [
  {
    id: 'haircut',
    title: 'Corte de cabelo',
    description:
      'Cortes modernos e clássicos, adaptados ao formato do rosto e ao estilo de cada cliente.',
    imageSrc: '/images/cut.png',
    imageAlt: 'Haircut',
  },
  {
    id: 'beard',
    title: 'Barba',
    description: 'Aparagem, desenho e modelação da barba, com acabamento cuidado.',
    imageSrc: '/images/beard.png',
    imageAlt: 'Beard Trim',
  },
  {
    id: 'complete',
    title: 'Ritual completo',
    description: 'Corte, barba, toalha quente e finalização para um resultado completo.',
    imageSrc: '/images/complete.png',
    imageAlt: 'Full Service',
  },
  {
    id: 'care',
    title: 'Cuidados',
    description: 'Seleção de produtos profissionais para cabelo, barba e pele.',
    imageSrc: '/images/care.png',
    imageAlt: 'Produtos de cuidados',
  },
] satisfies readonly Service[];
