export type ServiceIconName =
  | 'haircut'
  | 'beard'
  | 'complete'
  | 'care';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconName;
};

export const services = [
  {
    id: 'haircut',
    title: 'Corte de cabelo',
    description:
      'Cortes modernos e clássicos, adaptados ao formato do rosto e ao estilo de cada cliente.',
    icon: 'haircut',
  },
  {
    id: 'beard',
    title: 'Barba',
    description:
      'Aparagem, desenho e modelação da barba, com acabamento cuidado.',
    icon: 'beard',
  },
  {
    id: 'complete',
    title: 'Ritual completo',
    description:
      'Corte, barba, toalha quente e finalização para um resultado completo.',
    icon: 'complete',
  },
  {
    id: 'care',
    title: 'Cuidados',
    description:
      'Seleção de produtos profissionais para cabelo, barba e pele.',
    icon: 'care',
  },
] satisfies readonly Service[];