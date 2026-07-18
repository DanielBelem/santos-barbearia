import { TeamCard } from '../components/cards/TeamCard';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { teamMembers } from '../data/team';

export function TeamSection() {
  return (
    <section
      id="equipa"
      aria-labelledby="team-title"
      className="bg-paper py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="team-title"
          eyebrow="A nossa equipa"
          title="Profissionais apaixonados pelo que fazem."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}