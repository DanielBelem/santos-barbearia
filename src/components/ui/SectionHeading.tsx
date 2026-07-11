type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
  centered = false,
}: SectionHeadingProps) {
  return (
    <header className={centered ? 'mx-auto max-w-3xl text-center' : ''}>
      <p
        className={`mb-4 text-xs font-semibold tracking-[0.2em] uppercase ${
          inverted ? 'text-white/60' : 'text-smoke'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-balance font-display text-4xl leading-tight sm:text-5xl ${
          inverted ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-2xl leading-7 ${
            inverted ? 'text-white/70' : 'text-smoke'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}