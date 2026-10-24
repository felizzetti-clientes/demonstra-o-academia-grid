import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

/** Faixa laranja inspirada na faixa do mezanino: "GRID ACADEMIA ////// STRONGER THAN YESTERDAY". */
export function BrandBand() {
  return (
    <div className="bg-laranja text-preto" aria-label={`${site.nomeCurto} — ${site.slogan}`} role="img">
      <Container className="flex min-h-24 flex-col items-start justify-center gap-1.5 py-5.5 lg:flex-row lg:items-center lg:justify-between lg:gap-7">
        <span className="flex items-baseline gap-2.5 font-marca text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold tracking-[0.05em] whitespace-nowrap italic">
          GRID <small className="text-[0.42em] tracking-[0.24em] not-italic">ACADEMIA</small>
        </span>
        <span aria-hidden className="listras-pretas hidden h-5.5 max-w-105 flex-1 xl:block" />
        <span className="titulo text-[clamp(1.05rem,2vw,1.5rem)] tracking-[0.02em] text-preto italic">{site.slogan}</span>
      </Container>
    </div>
  );
}
