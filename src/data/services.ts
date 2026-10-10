export type ServiceIconName = 'haircut' | 'beard' | 'complete' | 'care';

export type Service = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  priceInCents: number | null;
  from?: boolean;
};

export const services = [
  {
    id: 'haircut',
    title: 'Corte de cabelo',
    description:
      'Cortes modernos e clássicos, adaptados ao formato do rosto e ao estilo de cada cliente.',
    imageSrc: '/images/cut.png',
    imageAlt: 'Haircut',
    priceInCents :  1300,
  },
  {
    id: 'beard',
    title: 'Barba',
    description: 'Aparagem, desenho e modelação da barba, com acabamento cuidado.',
    imageSrc: '/images/beard.png',
    imageAlt: 'Beard Trim',
    priceInCents :  1400,
  },
  {
    id: 'complete',
    title: 'Ritual completo',
    description: 'Corte, barba, toalha quente e finalização para um resultado completo.',
    imageSrc: '/images/complete.png',
    imageAlt: 'Full Service',
    priceInCents :  1500,
  },
  {
    id: 'care',
    title: 'Cuidados',
    description: 'Seleção de produtos profissionais para cabelo, barba e pele.',
    imageSrc: '/images/care.png',
    imageAlt: 'Produtos de cuidados',
    priceInCents :  1600,
  },
] satisfies readonly Service[];

const currencyFormatter = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
});

export function formatServicePrice(service: Service): string {
  if (service.priceInCents == null) {
    return 'Preço por confirmar';
  }
  const price = currencyFormatter.format(service.priceInCents / 100);

  return service.from ? `Desde ${price}` : price;
}
