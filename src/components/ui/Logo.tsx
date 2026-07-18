type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <a
      href="#inicio"
      aria-label="Santos Barbearia — voltar ao início"
      className={`grid size-16 shrink-0 place-items-center rounded-full border-2 text-center ${
        inverted ? 'border-white text-white' : 'border-ink text-ink'
      }`}
    >
      <span className="font-display text-lg leading-none font-bold tracking-wide">
        Santos
      </span>
    </a>
  );
}
