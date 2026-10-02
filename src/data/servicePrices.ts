type ServicePrice = {
  id: string;
  name: string;
  priceInCents: number | null;
  from?: boolean;
};

export const servicePrices: readonly ServicePrice[] = [
  {
    id: 'corte',
    name: 'Corte de cabelo',
    priceInCents: 1300,
  },

  {
    id: 'barba',
    name: 'Aparar barba',
    priceInCents: null,
  },

  {
    id: 'corte-barba',
    name: 'Corte + barba',
    priceInCents: null,
  },

  {
    id: 'tratamento',
    name: 'Tratamento capilar',
    priceInCents: null,
  },
];

const currencyFormatter = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
});

export function formatServicePrice(service: ServicePrice): string {
  if (service.priceInCents == null) {
    return 'Preço por confirmar';
  }
  const price = currencyFormatter.format(service.priceInCents / 100);

  return service.from ? `Desde ${price}` : price;
}
