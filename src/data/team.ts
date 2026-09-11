export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  bio: readonly string[];
  services: readonly string[];
};

export const teamMembers = [
  {
    id: 'magal-abreu',
    name: 'Magal Abreu',
    role: 'Barbeiro - Fundador - Low Fade & Degradês - Barba Italiana - Visagismo Masculino',
    imageSrc: '/images/magal_santos.png',
    imageAlt: 'Sydney Abreu ( Magal )',
    eyebrow: 'Barbeiro - Fundador',
    bio: [
      'Com mais de 10 anos de experiência na área da barbearia, Sidney Abreu ( Magal ),é um barbeiro especializado em cortes modernos e personalizados, sempre focado em realçar o estilo e a personalidade de cada cliente.',
      'Ao longo da sua trajetória, desenvolveu técnicas de precisão em Low Fade, degradês, acabamento detalhado e Barba Italiana, tornando-se referência pelo cuidado com os detalhes e pela qualidade dos resultados.',
      'Mais do que realizar um corte de cabelo, o objetivo é proporcionar uma experiência completa, com atendimento personalizado, ambiente acolhedor e compromisso com a satisfação de cada cliente.',
      'A atualização constante nas tendências e técnicas da barbearia moderna garante cortes atuais, acabamento impecável e um serviço à altura das expectativas de quem procura qualidade, profissionalismo e confiança.',
    ],
    services: ['Low Fade', 'Degradês', 'Acabamento Detalhado', 'Barba Italiana'],
  },
  {
    id: 'erica-carvalho',
    name: 'Erica Carvalho',
    role: 'Pigmentação Capilar - Alisamentos & Progressivas - Tratamentos & Reconstrução',
    imageSrc: '/images/erica_santos.png',
    imageAlt: 'Erica Carvalho',
    eyebrow: 'Hairdresser',
    bio: [
      'Com mais de 10 anos de experiência na área da beleza, Erica Carvalho é especialista em transformar e valorizar a imagem das suas clientes através de técnicas modernas e de um atendimento personalizado.',
      'Especializada em pigmentação capilar, alisamentos e progressivas, tratamentos químicos, hidratações profundas, reconstruções e recuperação da fibra capilar, trabalha com foco na saúde e beleza dos cabelos, proporcionando resultados duradouros e naturais.',
      'Ao longo da sua carreira, aperfeiçoou constantemente as suas técnicas, acompanhando as principais tendências e inovações do setor, garantindo segurança, qualidade e excelência em cada procedimento.',
      'O seu compromisso é oferecer uma experiência acolhedora e profissional, compreendendo as necessidades de cada cliente e desenvolvendo soluções personalizadas para realçar a beleza e fortalecer a autoestima.',
    ],
    services: [
      'Pigmentação Capilar',
      'Alisamentos & Progressivas',
      'Tratamentos & Reconstrução',
    ],
  },
] satisfies readonly TeamMember[];
