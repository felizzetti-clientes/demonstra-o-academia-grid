/** Indica se o link `href` corresponde à rota atual. */
export function rotaAtiva(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
