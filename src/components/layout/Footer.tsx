import { siteConfig } from '../../config/site';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-line bg-paper border-t py-14">
      <Container>
        <div className="border-line text-smoke mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-xs sm:flex-row">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
        <div className=" "></div>
      </Container>
    </footer>
  );
}
