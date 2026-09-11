import { useState } from 'react';

import { TeamCard } from '../components/cards/TeamCard';
import { Container } from '../components/layout/Container';
import { TeamProfileDialog } from '../components/team/TeamProfileDialog';
import { SectionHeading } from '../components/ui/SectionHeading';

import { teamMembers, type TeamMember } from '../data/team';

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
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

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} onSelect={setSelectedMember} />
            ))}
          </div>
        </Container>
      </section>

      <TeamProfileDialog
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}
