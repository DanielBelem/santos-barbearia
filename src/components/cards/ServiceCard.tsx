import type { Service } from '../../data/services';

type ServiceCardProps = {
  service: Service;
  position: number;
};

export function ServiceCard({ service, position: _position }: ServiceCardProps) {
  return (
    <article className="px-6 py-8 text-center">
      <div className="mx-auto grid size-16 place-items-center overflow-hidden rounded-full border border-white/30 bg-white">
        <img
          src={service.imageSrc}
          alt={service.imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-6 text-sm font-semibold tracking-[0.16em] text-white uppercase">
        {service.title}
      </h3>

      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/60">
        {service.description}
      </p>
    </article>
  );
}
