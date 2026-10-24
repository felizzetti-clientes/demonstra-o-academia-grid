import { LogoLink } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { MainNav } from "./MainNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-preto lg:bg-preto/94 lg:backdrop-blur-md">
      <Container className="flex h-header items-center justify-between gap-6">
        <LogoLink rotulo="Academia GRID — página inicial" />
        <MainNav />
      </Container>
    </header>
  );
}
