import type { TeamMember } from '../../data/team';
import { ImageWithFallback } from '../ui/ImageWithFallback';

type TeamCardProps = {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
};

export function TeamCard({ member, onSelect }: TeamCardProps) {
  return (
    <article className="mx-auto w-full max-w-[22rem]">
      <button
        type="button"
        onClick={() => onSelect(member)}
        aria-label={`Abrir perfil de ${member.name}`}
        className="group block w-full cursor-pointer text-left"
      >
        <div className="bg-charcoal relative mx-auto overflow-hidden">
          <ImageWithFallback
            src={member.imageSrc}
            alt={member.imageAlt}
            loading="lazy"
            width={700}
            height={850}
            className="aspect-[4/5] w-full object-cover object-center grayscale transition duration-500 group-hover:scale-[1.02] group-hover:blur-[2px] motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-black/35 text-2xl font-light text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100"
          >
            +
          </span>
        </div>

        <div className="pt-5 text-center">
          <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">
            {member.name}
          </h3>

          <p className="text-smoke mt-1 text-sm">{member.role}</p>
        </div>
      </button>
    </article>
  );
}
