import { fotos, type CategoriaFoto, type Foto } from "./fotos";

/** Formato do item no mosaico da galeria. */
export type FormatoMosaico = "padrao" | "alto" | "largo" | "grande" | "alto-final";

export interface ItemGaleria {
  foto: Foto;
  rotulo: string;
  formato: FormatoMosaico;
}

export const filtrosGaleria: readonly { valor: CategoriaFoto | "todas"; rotulo: string }[] = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "salao", rotulo: "Salão" },
  { valor: "fachada", rotulo: "Fachada" },
];

export const itensGaleria: readonly ItemGaleria[] = [
  { foto: fotos.salaoMezanino, rotulo: "Vista do alto do salão", formato: "alto" },
  { foto: fotos.corredorMusculacao, rotulo: "Corredor de musculação", formato: "largo" },
  { foto: fotos.salaoPrincipal, rotulo: "Salão principal", formato: "padrao" },
  { foto: fotos.maquinasCimerian, rotulo: "Equipamentos", formato: "padrao" },
  { foto: fotos.fachada, rotulo: "Fachada", formato: "grande" },
  { foto: fotos.predioEstacionamento, rotulo: "Prédio e estacionamento", formato: "alto-final" },
];
