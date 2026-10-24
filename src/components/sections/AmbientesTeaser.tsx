import Image from "next/image";
import Link from "next/link";
import { fotos, type Foto } from "@/content/fotos";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Heading } from "@/components/ui/Typography";

const ambientes: readonly { numero: string; titulo: string; texto: string; href: string; foto: Foto }[] = [
  { numero: "01", titulo: "Musculação", texto: "Máquinas articuladas em fileiras amplas.", href: "/estrutura#musculacao", foto: fotos.corredorMusculacao },
  { numero: "02", titulo: "Mezanino", texto: "Vista privilegiada do salão.", href: "/estrutura#mezanino", foto: fotos.salaoMezanino },
  { numero: "03", titulo: "Equipamentos", texto: "Máquinas, anilhas, halteres e bancos.", href: "/estrutura#pesos-livres", foto: fotos.maquinasCimerian },
];

/** Prévia dos ambientes na página inicial, com links para a página Estrutura. */
export function AmbientesTeaser() {
  return (
    <ul className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr]">
      {ambientes.map((a, i) => (
        <li key={a.href} className={cn("surge", i === 0 && "md:col-span-2 lg:col-span-1")}>
          <Link
            href={a.href}
            className={cn(
              "group relative block overflow-hidden bg-faixa",
              "aspect-[4/3.6] lg:aspect-auto lg:h-[clamp(420px,38vw,540px)]",
              i === 0 && "md:aspect-[16/10]",
            )}
          >
            <Image
              src={a.foto.src}
              alt={a.foto.alt}
              fill
              sizes={i === 0 ? "(max-width: 1024px) 100vw, 480px" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"}
              quality={85}
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
            />
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#080809]/92 via-[#080809]/15 to-transparent" />
            <span className="absolute top-4.5 right-4.5 z-10 grid size-10.5 place-items-center border border-white/15 bg-preto/75 transition-colors group-hover:border-laranja group-hover:bg-laranja group-hover:text-preto">
              <Icon name="seta-diagonal" className="size-4.5" />
            </span>
            <span className="absolute inset-x-6 bottom-5.5 z-10 block">
              <span className="rotulo text-[0.78rem] text-laranja">{a.numero}</span>
              <Heading as="h3" tamanho="card" className="my-1.5">
                {a.titulo}
              </Heading>
              <span className="block text-[0.9rem] text-[#c9cace]">{a.texto}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
