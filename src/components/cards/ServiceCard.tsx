import type { Service, ServiceIconName } from '../../data/services';

type ServiceCardProps = {
  service: Service;
  position: number;
};

function ServiceIconPlaceholder({
  name,
  position,
}: {
  name: ServiceIconName;
  position: number;
}) {
  const readableLabels: Record<ServiceIconName, string> = {
    haircut: 'Corte',
    beard: 'Barba',
    complete: 'Completo',
    care: 'Cuidados',
  };

  return (
    <div
      aria-hidden="true"
      title={readableLabels[name]}
      className="mx-auto grid size-16 place-items-center rounded-full border border-white/30 font-display text-xl text-white"
    >
      {String(position).padStart(2, '0')}
    </div>
  );
}

export function ServiceCard({
  service,
  position,
}: ServiceCardProps) {
  return (
    <article className="px-6 py-8 text-center">
      <ServiceIconPlaceholder
        name={service.icon}
        position={position}
      />

      <h3 className="mt-6 text-sm font-semibold tracking-[0.16em] text-white uppercase">
        {service.title}
      </h3>

      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/60">
        {service.description}
      </p>
    </article>
  );
}