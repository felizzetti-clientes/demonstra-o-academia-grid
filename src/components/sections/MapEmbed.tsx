import { enderecoLinha1, site } from "@/config/site";
import { SmartLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Mapa incorporado do Google, com link de reserva caso não carregue. */
export function MapEmbed() {
  return (
    <div className="surge relative h-full min-h-105 border border-linha bg-faixa lg:min-h-130">
      <SmartLink
        href={site.links.googleMaps}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[0.95rem] text-suave"
      >
        <Icon name="pin" className="size-8 text-laranja" />
        Abrir a localização no Google Maps
      </SmartLink>
      <iframe
        title={`Mapa com a localização da ${site.nome} na ${enderecoLinha1}, ${site.endereco.cidade}`}
        src={site.links.mapaEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 z-10 size-full border-0 [filter:grayscale(1)_invert(.9)_contrast(.88)_brightness(.95)]"
      />
    </div>
  );
}
