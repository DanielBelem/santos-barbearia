import type { TeamMember } from '../../data/team';
import { ImageWithFallback } from '../ui/ImageWithFallback';

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="mx-auto w-full max-w-[22rem]">
      <div className="bg-charcoal mx-auto overflow-hidden">
        <ImageWithFallback
          src={member.imageSrc}
          alt={member.imageAlt}
          loading="lazy"
          width={700}
          height={850}
          className="mx-auto aspect-[4/5] w-full max-w-[22rem] object-cover grayscale transition duration-500 hover:scale-[1.03] hover:grayscale-0 motion-reduce:transition-none"
        />
      </div>

      <div className="pt-5 text-center">
        <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">
          {member.name}
        </h3>

        <p className="text-smoke mt-1 text-sm">{member.role}</p>
      </div>
    </article>
  );
}
