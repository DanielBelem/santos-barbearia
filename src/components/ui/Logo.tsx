type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted: _inverted = false }: LogoProps) {
  return (
    <a href="#inicio" aria-label="Santos Barbearia — voltar ao início" className="block">
      <img
        src="/images/santos_logo_transp.png"
        alt="Santos Barbearia"
        className="h-36 w-auto"
      />
    </a>
  );
}
