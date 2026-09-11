export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
};

export const teamMembers = [
  {
    id: 'magal-abreu',
    name: 'Magal Abreu',
    role: 'Barbeiro - Fundador - Low Fade & Degradês - Barba Italiana - Visagismo Masculino',
    imageSrc: '/images/magal_santos.png',
    imageAlt: 'Sydney Abreu ( Magal )',
  },
  {
    id: 'erica-carvalho',
    name: 'Erica Carvalho',
    role: 'Pigmentação Capilar - Alisamentos & Progressivas - Tratamentos & Reconstrução',
    imageSrc: '/images/erica_santos.png',
    imageAlt: 'Erica Carvalho',
  },
] satisfies readonly TeamMember[];
