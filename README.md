# Academia GRID — site institucional

Protótipo demonstrativo, não oficial, desenvolvido pela **Felizzetti Studios** para a Academia GRID (Joinville/SC).

## Stack

| Item | Versão |
|---|---|
| Next.js (App Router, Turbopack) | 16.4.3 |
| React | 19.3.1 |
| TypeScript | 5.9.3 |
| Tailwind CSS (`@tailwindcss/postcss`) | 4.3.3 |
| ESLint + `eslint-config-next` | 9.x + 16.4.3 |
| Node.js | ≥ 20.9 (testado na 22) |

## Comandos

```bash
npm install         # dependências
npm run dev         # desenvolvimento em http://localhost:3000
npm run typecheck   # TypeScript
npm run lint        # ESLint
npm run build       # build de produção
npm run start       # servir o build
npm run check       # typecheck + lint + build
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` (não versionado) ou configure no painel da Vercel.

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domínio definitivo, sem barra no final. Base de canônicas, Open Graph, sitemap e `llms.txt`. **Ainda não definido.** Sem ele, usa `http://localhost:3000`. |
| `NEXT_PUBLIC_INDEXAR` | `false` (padrão) mantém o site inteiro com `noindex`: meta robots, cabeçalho `X-Robots-Tag` e `robots.txt` com `Disallow: /`. Mude para `true` só na publicação oficial. |

## Rotas

| Rota | Página |
|---|---|
| `/` | Início |
| `/academia` | A Academia |
| `/estrutura` | Estrutura e modalidades (subnavegação por âncoras) |
| `/galeria` | Galeria (filtros e visualizador com teclado e gesto) |
| `/planos` | Planos e matrícula (atalhos de WhatsApp) |
| `/contato` | Contato, mapa e canais oficiais |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | Gerados a partir da configuração |

## Estrutura

```
src/
  app/                  rotas (App Router), layout, globals.css, sitemap, robots, llms.txt, 404, ícone
  config/site.ts        dados da academia (fonte única) e itens pendentes
  content/              fotos, diferenciais, ambientes, galeria
  components/
    layout/             cabeçalho, navegação, rodapé, WhatsApp flutuante
    ui/                 botões, links, tipografia, seção, foto, ícones
    sections/           blocos reutilizados pelas páginas
    gallery/            galeria e visualizador (client components)
    brand/              marca provisória
  lib/                  WhatsApp, SEO/metadados, utilitários
  fonts/                fontes locais (licença SIL OFL)
public/images/          as 6 fotografias reais
```

Para atualizar dados (telefone, endereço, avaliação etc.), edite `src/config/site.ts`.

## Publicação na Vercel

1. Importe o repositório. O framework é detectado automaticamente.
2. Defina `NEXT_PUBLIC_SITE_URL` com o domínio definitivo.
3. Mantenha `NEXT_PUBLIC_INDEXAR=false` enquanto for protótipo.

## Pendências de conteúdo

Itens marcados no código com `VALIDAR` e `PENDENTE`:

- Domínio definitivo (`NEXT_PUBLIC_SITE_URL`).
- Logotipo oficial em vetor. O componente `LogoMarca` é uma representação provisória.
- Fotos originais em alta resolução. As atuais vêm de capturas (~900 px).
- Horários de funcionamento, modalidades, planos e valores. Hoje aparecem como "consulte a equipe".
- Confirmar o equipamento do mezanino, a marca Cimerian, o funcionamento do espaço para crianças e o estacionamento.
- Atualizar a nota e o total de avaliações do Google.
- Confirmar que o número (47) 99170-0039 atende pelo WhatsApp.
