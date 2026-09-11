import { useEffect, useRef } from 'react';

import type { TeamMember } from '../../data/team';
import { ImageWithFallback } from '../ui/ImageWithFallback';

type TeamProfileDialogProps = {
  member: TeamMember | null;
  onClose: () => void;
};

export function TeamProfileDialog({ member, onClose }: TeamProfileDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (member && !dialog.open) {
      dialog.showModal();
    }

    if (!member && dialog.open) {
      dialog.close();
    }
  }, [member]);

  function handleClose() {
    onClose();
  }

  function handleBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  }

  if (!member) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={handleBackdropClick}
      aria-labelledby="professional-name"
      className="m-auto h-[92dvh] w-[calc(100vw-24px)] max-w-none overflow-hidden bg-white p-0 backdrop:bg-black/60 backdrop:backdrop-blur-md sm:h-[min(90vh,850px)] sm:w-[min(94vw,1100px)]"
    >
      <div className="h-full overflow-y-auto bg-white lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:overflow-hidden">
        {/* FOTO */}
        <div className="relative bg-black p-5 lg:h-full">
          <ImageWithFallback
            src={member.imageSrc}
            alt={member.imageAlt}
            className="aspect-[4/5] h-auto w-full object-cover object-center grayscale lg:aspect-auto lg:h-full"
          />

          {/* X */}
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Fechar perfil"
            className="absolute top-3 right-3 z-20 grid size-11 place-items-center rounded-full bg-white text-2xl leading-none text-black shadow-md transition hover:scale-105"
          >
            ×
          </button>
        </div>

        {/* CONTEÚDO */}
        <div className="bg-white px-6 py-10 sm:px-10 lg:h-full lg:overflow-y-auto lg:px-14 lg:py-12">
          <header>
            <p className="text-xs font-semibold tracking-[0.28em] text-neutral-500 uppercase">
              {member.eyebrow}
            </p>

            <h2
              id="professional-name"
              className="font-display mt-3 text-4xl font-semibold tracking-tight uppercase sm:text-5xl"
            >
              {member.name}
            </h2>

            <p className="mt-1 text-lg text-neutral-500 italic">{member.role}</p>
          </header>

          <div className="my-7 h-px bg-black/10" />

          <section>
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase">Sobre</h3>

            <div className="mt-5 space-y-5 text-base leading-7 text-neutral-600">
              {member.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase">
              Serviços disponíveis
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {member.services.map((service) => (
                <span
                  key={service}
                  className="border border-black/10 bg-[#f5f3ef] px-4 py-3 text-xs font-medium tracking-[0.05em] uppercase"
                >
                  {service}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </dialog>
  );
}
