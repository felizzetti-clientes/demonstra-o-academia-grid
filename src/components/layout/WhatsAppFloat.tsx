import { linkWhatsApp } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

export function WhatsAppFloat() {
  return (
    <a
      href={linkWhatsApp("conhecer")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a GRID no WhatsApp"
      className="chanfro fixed right-4.5 bottom-4.5 z-40 grid size-14 place-items-center bg-laranja text-preto shadow-[0_8px_28px_rgb(0_0_0/0.45)] transition-colors hover:bg-laranja-hover"
    >
      <Icon name="whatsapp" className="size-6.5" />
    </a>
  );
}
