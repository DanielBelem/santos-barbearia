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
      'Cortes modernos e clássicos à tua medida. Corte infantil também disponível por 14 €.',
    imageSrc: '/images/cut.png',
    imageAlt: 'Corte de cabelo',
    priceInCents: 1400,
    from: true,
  },
  {
    id: 'beard',
    title: 'Corte + Barba',
    description:
      'O teu corte com uma barba cuidada e definida. Adiciona depilação do nariz por mais 3 €.',
    imageSrc: '/images/beard.png',
    imageAlt: 'Corte de cabelo e barba',
    priceInCents: 2200,
  },
  {
    id: 'complete',
    title: 'Barbearia Premium',
    description:
      'Corte, barba, esfoliação facial, vapor de ozónio, máscara black e depilação do nariz.',
    imageSrc: '/images/complete.png',
    imageAlt: 'Serviço de barbearia premium',
    priceInCents: 3000,
  },
  {
    id: 'care',
    title: 'Coloração',
    description:
      'Renova o teu visual com tintura capilar desde 10 €, madeixas por 25 € ou platinado por 40 €.',
    imageSrc: '/images/care.png',
    imageAlt: 'Coloração e cuidados do cabelo',
    priceInCents: 1000,
    from: true,
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