export type TeamMember = {
  id: string;
  name: string;
  role: string;
  //imageSrc: string;
  //imageAlt: string;
};

export const teamMembers = [
  {
    id: 'magal-abreu',
    name: 'Magal Abreu',
    role: 'Barbeiro e fundador',
  },
] satisfies readonly TeamMember[];