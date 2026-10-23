# TODO.md — Plano de execução passo a passo

> Documento operacional do projeto `pagina-pessoal`.
> Companheiro de `SPECS.md` (o quê) e `AGENT.md` (como se comportar).
> Este arquivo responde: **o que fazer, em que ordem, e como provar que funcionou.**

---

## Como usar este arquivo

1. Execute as tarefas **na ordem numérica**. Não pule, não reordene.
2. Cada tarefa tem: objetivo, arquivos, passos, critério de conclusão, teste e mensagem de commit.
3. **Rode o teste antes de marcar a tarefa como concluída.** Teste que não foi executado conta como falha.
4. Se um teste falhar: pare, corrija, rode o teste de novo. Não avance com teste vermelho.
5. Se faltar informação (texto, foto, link), use o placeholder indicado e registre em `SPECS.md` → seção 12.
6. Um commit por fase, com a mensagem exata indicada.
7. Ao final de cada fase, atualize a tabela de progresso abaixo.

### Legenda

| Símbolo | Significado |
|---|---|
| `[ ]` | Não iniciado |
| `[~]` | Em andamento |
| `[x]` | Concluído e testado |
| `[!]` | Bloqueado (depende de conteúdo humano) |

### Proibido (para qualquer executor)

- Adicionar framework, biblioteca, CDN, bundler, npm, Tailwind, Bootstrap, jQuery, React.
- Adicionar fonte externa (Google Fonts) ou ícone de biblioteca externa.
- Inventar empresas, cargos, datas, métricas, depoimentos ou projetos reais.
- Remover o prefixo `[TODO]` de conteúdo que ainda não é real.
- Alterar `SPECS.md` sem registrar a mudança na seção 12.
- Fazer `git push --force`, reescrever histórico ou commitar segredos.
- Marcar tarefa como concluída sem executar o teste correspondente.

---

## Progresso

| Fase | Escopo | Status |
|---|---|---|
| 0 | Preparação do ambiente | [ ] |
| 1 | Esqueleto HTML + metadados | [ ] |
| 2 | Tokens e CSS base | [ ] |
| 3 | Header + Hero | [ ] |
| 4 | Projetos | [ ] |
| 5 | Sobre + Habilidades + Experiência | [ ] |
| 6 | Contato + Footer | [ ] |
| 7 | Tema claro/escuro | [ ] |
| 8 | Bilíngue PT/EN | [ ] |
| 9 | Interações (menu, scroll, animações) | [ ] |
| 10 | SEO, 404 e ativos | [ ] |
| 11 | QA completo | [ ] |
| 12 | Deploy no GitHub Pages | [ ] |
| 13 | Verificação pós-deploy | [ ] |

---

## Fase 0 — Preparação

### T00 — Confirmar pré-requisitos

- **Objetivo:** garantir que o ambiente consegue rodar o site localmente e publicar.
- **Passos:**
  1. No terminal, dentro de `pagina-pessoal/`, rode `git status`. Deve estar limpo ou só com `AGENT.md`/`SPECS.md`/`TODO.md` não commitados.
  2. Rode `gh auth status`. Deve mostrar `Logged in to github.com account davimigliorinibonissoni-sys`.
  3. Rode `python --version`. Se existir (3.x), use-o para servir o site. Se não existir, use `npx serve` apenas localmente (não adicionar ao projeto).
  4. Rode `git config --global user.name` e `git config --global user.email`. Ambos devem retornar valores.
- **Pronto quando:** os quatro comandos acima retornam sucesso.
- **Teste:** nenhum (é verificação de ambiente).
- **Commit:** `adiciona planejamento do projeto`

### T01 — Commitar a documentação de planejamento

- **Arquivos:** `AGENT.md`, `SPECS.md`, `TODO.md`, `README.md`
- **Passos:**
  1. Substituir o conteúdo de `README.md` por:

```markdown
# pagina-pessoal

Site pessoal e portfólio de Davi Migliorini Bonissoni.
Publicado em https://davimigliorinibonissoni-sys.github.io/pagina-pessoal/

## Documentação

- [AGENT.md](AGENT.md) — diretrizes de design e execução
- [SPECS.md](SPECS.md) — especificação do projeto
- [TODO.md](TODO.md) — plano de execução e testes

## Rodar localmente

```sh
python -m http.server 8000
# abra http://localhost:8000
```
```

  2. `git add AGENT.md SPECS.md TODO.md README.md`
  3. `git commit -m "adiciona planejamento do projeto"`
  4. `git push`
- **Pronto quando:** `git status` limpo e `git log --oneline -1` mostra o commit.
- **Teste:** abra `https://github.com/davimigliorinibonissoni-sys/pagina-pessoal` e confirme os 4 arquivos.

---

## Fase 1 — Esqueleto HTML e metadados

### T10 — Criar `index.html` com a estrutura completa

- **Arquivos:** `index.html`
- **Passos:**
  1. Criar o arquivo com `<!doctype html>`, `<html lang="pt-BR" data-theme="dark">`.
  2. No `<head>`, incluir exatamente: `charset`, `viewport`, `title`, `description`, `canonical`, `theme-color`, Open Graph (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`), Twitter (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), `link rel="stylesheet" href="assets/css/styles.css"` e o script inline anti-flash (Anexo A).
  3. No `<body>`, criar nesta ordem, com os `id` indicados:
     - `a.skip-link` → `href="#conteudo"` (Anexo B)
     - `header.site-header` com `.brand`, `nav#menu-principal.nav`, `.header-controls` (T30)
     - `main#conteudo`
     - `section#inicio.hero` (T31)
     - `section#projetos.section` (T40)
     - `section#sobre.section` (T50)
     - `section#habilidades.section` (T51)
     - `section#experiencia.section` (T52)
     - `section#contato.section` (T60)
     - `footer.site-footer` (T61)
  4. Encerrar com `<script src="assets/js/i18n.js" defer></script>` e `<script src="assets/js/main.js" defer></script>`.
  5. Deixar as seções com `<h2>` e um parágrafo `[TODO]` provisório — serão preenchidas nas fases seguintes.
- **Pronto quando:** o arquivo abre no navegador sem erro e mostra os títulos das seções.
- **Teste:** abrir `index.html` direto no navegador (duplo clique). Deve exibir a lista de seções em texto simples, sem CSS ainda.
- **Commit:** `cria estrutura base da pagina`

### T11 — Criar pastas e arquivos vazios

- **Arquivos:** `assets/css/styles.css`, `assets/js/main.js`, `assets/js/i18n.js`, `assets/img/`, `assets/icons/`
- **Passos:**
  1. Criar as pastas: `assets/css`, `assets/js`, `assets/img`, `assets/icons`.
  2. Criar os três arquivos com um comentário de cabeçalho (ex.: `/* estilos do site */`).
  3. `main.js` e `i18n.js` devem começar com `'use strict';`.
- **Pronto quando:** a árvore de arquivos bate com `SPECS.md` → seção 7.
- **Teste:** `Get-ChildItem -Recurse -File | Select-Object FullName` e comparar com a estrutura prevista.
- **Commit:** `cria estrutura de assets`

### T12 — Adicionar idioma e tema iniciais via JS mínimo

- **Arquivos:** `assets/js/main.js`
- **Passos:**
  1. Ler `localStorage.getItem('theme')`; se nulo, usar `matchMedia('(prefers-color-scheme: light)')`.
  2. Aplicar em `document.documentElement.dataset.theme`.
  3. Ler `localStorage.getItem('lang')`; se nulo, usar `'pt'` (idioma padrão do site).
  4. Aplicar `document.documentElement.lang` (`pt-BR` ou `en`).
  5. Envolver tudo em `try/catch` para não quebrar com storage bloqueado.
- **Pronto quando:** recarregar a página mantém o atributo `data-theme` correto.
- **Teste:** no console, `document.documentElement.dataset.theme` retorna `dark` ou `light`.
- **Commit:** `aplica tema e idioma iniciais`

---

## Fase 2 — Tokens e CSS base

### T20 — Criar os design tokens

- **Arquivos:** `assets/css/styles.css`
- **Passos:**
  1. Copiar o bloco de tokens do Anexo C (`:root` com tema escuro e `[data-theme="light"]`).
  2. Incluir também tokens de espaço (`--space-1` a `--space-10`), raio, tipografia e tempo.
  3. Não usar valores mágicos fora dos tokens nas fases seguintes.
- **Pronto quando:** abrir o DevTools → `:root` mostra todas as variáveis.
- **Teste:** `Select-String -Path assets/css/styles.css -Pattern "--bg|--accent|--space-1"` retorna os tokens.
- **Commit:** `adiciona design tokens`

### T21 — Reset e estilos base

- **Passos:**
  1. `*, *::before, *::after { box-sizing: border-box; }`
  2. `body` com `background: var(--bg)`, `color: var(--text)`, `font-family` system stack, `line-height: 1.65`, `-webkit-font-smoothing: antialiased`.
  3. `img, svg { display: block; max-width: 100%; }`
  4. `html { scroll-behavior: smooth; scroll-padding-top: 88px; }` e `@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }`
  5. `.container { width: min(100% - 2 * var(--gutter), 1120px); margin-inline: auto; }`
  6. Foco visível global: `:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }`
- **Pronto quando:** a página deixa de parecer HTML cru e não há scroll horizontal em 360px.
- **Teste:** DevTools em 360px → `document.documentElement.scrollWidth <= 360` deve ser `true`.
- **Commit:** `adiciona reset e estilos base`

### T22 — Tipografia e títulos de seção

- **Passos:**
  1. Escala tipográfica conforme `SPECS.md` → seção 6 (clamp no `h1`).
  2. `.eyebrow`: 0.75rem, uppercase, `letter-spacing: 0.08em`, cor `--accent`.
  3. `.section { padding-block: clamp(64px, 10vw, 128px); }`
  4. `.section__title { font-size: clamp(1.75rem, 4vw, 2.75rem); letter-spacing: -0.02em; }`
  5. `.section__lead { color: var(--muted); max-width: 60ch; }`
- **Pronto quando:** títulos e textos têm hierarquia visível em mobile e desktop.
- **Teste:** capturar screenshot em 360px e 1440px; o `h1` não deve quebrar palavra.
- **Commit:** `define escala tipografica`

### T23 — Componentes base

- **Passos:**
  1. `.btn` com `display:inline-flex`, `gap: 8px`, `padding: 12px 20px`, `border-radius: 999px`, `font-weight: 600`, `transition: 150ms ease-out`.
  2. `.btn--primary`: fundo `--accent`, texto `--accent-contrast`; hover com `filter: brightness(1.08)`.
  3. `.btn--ghost`: transparente, borda `1px solid var(--border)`, texto `--text`.
  4. `.tag`: pill pequena, borda, `--muted`, 0.75rem.
  5. `.card`: `background: var(--surface)`, `border: 1px solid var(--border)`, `border-radius: 12px`, `padding: 24px`.
  6. Estados `:hover`, `:focus-visible`, `:active` desenhados para `.btn` e `.card`.
- **Pronto quando:** um botão e um card de exemplo renderizam corretamente nos dois temas.
- **Teste:** adicionar temporariamente um `<button class="btn btn--primary">Teste</button>` no HTML, conferir e remover.
- **Commit:** `cria componentes base`

---

## Fase 3 — Header e Hero

### T30 — Header fixo com navegação e controles

- **Arquivos:** `index.html`, `assets/css/styles.css`, `assets/js/main.js`
- **Passos:**
  1. `<header class="site-header">` fixo no topo (`position: sticky; top: 0; z-index: 50`), fundo `--bg` com 85% de opacidade + `backdrop-filter: blur(12px)`, borda inferior `1px solid var(--border)`.
  2. `.brand` com o nome "Davi Migliorini Bonissoni" (ou iniciais em mobile) linkando para `#inicio`.
  3. `nav` com links: Início, Projetos, Sobre, Habilidades, Experiência, Contato (âncoras correspondentes).
  4. `.header-controls` com: botão de idioma (`PT | EN`) e botão de tema (ícone sol/lua em SVG inline).
  5. Botões com `type="button"`, `aria-label` descritivo e `aria-pressed` para o tema.
  6. Altura do header: 64px no mobile, 72px no desktop.
- **Pronto quando:** header permanece visível ao rolar e os links levam às seções com o título não coberto.
- **Teste:** clicar em cada link; a seção deve aparecer abaixo do header, sem sobreposição.
- **Commit:** `cria header com navegacao`

### T31 — Hero

- **Passos:**
  1. Estrutura: `.hero__eyebrow` ("Desenvolvedor Full Stack"), `h1.hero__title` (nome), `p.hero__text` (`[TODO]`), `.hero__actions` com dois botões (Ver projetos → `#projetos`; Baixar CV → `assets/cv.pdf` com atributo `download`), `.hero__social` (GitHub, LinkedIn, e-mail).
  2. Ícones sociais em SVG inline com `aria-hidden="true"` + texto acessível no link.
  3. Layout: coluna única no mobile, duas colunas no desktop (texto 7/12, destaque 5/12).
  4. `min-height: calc(100svh - 72px)` no desktop; no mobile, `min-height: auto` com padding generoso.
  5. Fundo com gradiente radial sutil usando `--accent` em baixa opacidade (sem imagem).
- **Pronto quando:** em 360×640 o nome, o cargo e o CTA "Ver projetos" aparecem sem rolar.
- **Teste:** DevTools em 360×640 → verificar que `.hero__actions` está visível na primeira dobra.
- **Commit:** `cria secao hero`

---

## Fase 4 — Projetos

### T40 — Grid de projetos com 6 placeholders

- **Arquivos:** `index.html`, `assets/css/styles.css`
- **Passos:**
  1. `.project-grid` com `display: grid`, `gap: 24px`, `grid-template-columns: 1fr`; `@media (min-width: 640px)` → 2 colunas; `@media (min-width: 1024px)` → 3 colunas.
  2. Criar 6 `<article class="card project-card">` com: `h3.project-card__title`, `p.project-card__desc`, `ul.project-card__tags` (2–4 `.tag`), `.project-card__links` com "Código" e "Demo".
  3. Todos os textos marcados com `[TODO]` (ex.: `[TODO] Nome do projeto`).
  4. Links sem destino real: usar `<span class="btn btn--ghost" aria-disabled="true">Código</span>` — **não** usar `href="#"`.
  5. Cada card com `data-i18n` nos textos (Fase 8 preencherá).
- **Pronto quando:** 6 cards aparecem em 3/2/1 colunas conforme o breakpoint.
- **Teste:** redimensionar para 360, 768, 1120 e 1440px e conferir a contagem de colunas.
- **Commit:** `cria grid de projetos`

### T41 — Hover e foco dos cards

- **Passos:**
  1. `.project-card:hover` eleva 2px (`transform: translateY(-2px)`) e muda a borda para `--accent` com 40% de opacidade.
  2. Transição de 150ms `ease-out`.
  3. `:focus-within` replica o estado de hover para navegação por teclado.
  4. Em `prefers-reduced-motion`, remover o `transform`.
- **Pronto quando:** passar o mouse e tabular pelos cards produz feedback visível.
- **Teste:** navegar com `Tab`; o card em foco deve ter borda destacada e nenhum elemento interno sem foco visível.
- **Commit:** `adiciona estados de interacao dos cards`

---

## Fase 5 — Sobre, Habilidades e Experiência

### T50 — Seção Sobre

- **Passos:**
  1. Grid de 2 colunas no desktop (5/12 mídia, 7/12 texto), 1 coluna no mobile.
  2. `.about__media` com `<img src="assets/img/profile.webp" alt="Foto de Davi Migliorini Bonissoni" width="800" height="800" loading="lazy">`.
  3. Enquanto a foto não existir, usar um `div` placeholder com borda tracejada e texto `[TODO] foto` — **não** referenciar arquivo inexistente.
  4. Dois parágrafos `[TODO]` + lista curta de 3 destaques (ex.: foco atual, localização, disponibilidade).
- **Pronto quando:** a seção não quebra e o placeholder é claramente identificável.
- **Teste:** verificar que nenhuma imagem retorna 404 na aba Network.
- **Commit:** `cria secao sobre`

### T51 — Habilidades

- **Passos:**
  1. `.skills__grid` com 3 `.skill-group` (Front-end, Back-end, Ferramentas), 3/1 colunas.
  2. Cada grupo: `h3.skill-group__title` + `ul.skill-list` com itens em `.tag`.
  3. Conteúdo conforme `SPECS.md` → seção 5, mantendo `[TODO]` onde o repertório real não foi confirmado.
- **Pronto quando:** três grupos legíveis e alinhados nos breakpoints.
- **Teste:** em 360px, os grupos empilham sem overflow; em 1120px, ficam lado a lado.
- **Commit:** `cria secao de habilidades`

### T52 — Experiência (timeline)

- **Passos:**
  1. `.timeline` como `<ol>` com linha vertical via `::before` (1px `--border`).
  2. 3 `.timeline__item` com: `.timeline__period` (`[TODO] 2024 — atual`), `.timeline__role`, `.timeline__org`, `.timeline__desc`.
  3. Marcador circular de 8px alinhado à linha, na cor `--accent`.
  4. No mobile, a linha fica à esquerda (16px) e o conteúdo desloca 32px.
- **Pronto quando:** timeline legível e alinhada em todos os breakpoints.
- **Teste:** zoom de 200% no navegador — nada deve sobrepor.
- **Commit:** `cria secao de experiencia`

---

## Fase 6 — Contato e Footer

### T60 — Seção de contato

- **Passos:**
  1. `h2` "Vamos conversar" + parágrafo `[TODO]` curto.
  2. E-mail em destaque como `mailto:davimigliorinibonissoni@gmail.com` com `font-size` grande e sublinhado no hover.
  3. Botões GitHub (`https://github.com/davimigliorinibonissoni-sys`) e LinkedIn (`https://www.linkedin.com/in/davimigliorinibonissoni`).
  4. Links externos com `target="_blank" rel="noopener noreferrer"` + `aria-label` indicando "abre em nova aba".
- **Pronto quando:** clicar no e-mail abre o cliente de e-mail e os links abrem os perfis.
- **Teste:** clicar nos três; conferir URLs corretas.
- **Commit:** `cria secao de contato`

### T61 — Footer

- **Passos:**
  1. Nome + ano atual via JS (`new Date().getFullYear()`), com fallback estático `2026`.
  2. Texto "Feito com HTML, CSS e JavaScript".
  3. Link "Voltar ao topo" → `#inicio`.
- **Pronto quando:** ano correto e link de retorno funciona.
- **Teste:** clicar em "Voltar ao topo" e conferir o scroll até o hero.
- **Commit:** `cria footer`

---

## Fase 7 — Tema claro/escuro

### T70 — Alternância de tema

- **Arquivos:** `assets/js/main.js`, `assets/css/styles.css`
- **Passos:**
  1. Selecionar `[data-theme-toggle]`.
  2. Ao clicar: alternar `dark` ↔ `light`, gravar em `localStorage.setItem('theme', valor)` e atualizar `aria-pressed` e `aria-label`.
  3. Trocar o ícone (sol no escuro, lua no claro) via `hidden` nos dois SVGs.
  4. Transição de 250ms apenas em `background-color` e `color` do `body`; desativar com `prefers-reduced-motion`.
- **Pronto quando:** o tema muda na hora, sem recarregar, e persiste após reload.
- **Teste:** alternar → recarregar → tema mantido. Repetir 3 vezes.
- **Commit:** `implementa alternancia de tema`

### T71 — Evitar flash de tema

- **Passos:**
  1. Confirmar que o script inline do `<head>` (Anexo A) roda antes do CSS.
  2. Testar com `localStorage.setItem('theme','light')` e recarregar em modo escuro do sistema.
- **Pronto quando:** não há piscada de tema na carga.
- **Teste:** gravar tela (DevTools → Performance → reload) e verificar que não há frame com o tema errado.
- **Commit:** `evita flash de tema na carga`

---

## Fase 8 — Bilíngue PT/EN

### T80 — Dicionário e aplicação

- **Arquivos:** `assets/js/i18n.js`, `index.html`
- **Passos:**
  1. Criar `const translations = { pt: {...}, en: {...} }` com **todas** as chaves usadas no HTML.
  2. Marcar elementos com `data-i18n="chave"` (texto) e `data-i18n-attr="aria-label:chave"` (atributos).
  3. Função `applyLanguage(lang)`: percorre `[data-i18n]`, aplica `textContent`; percorre `[data-i18n-attr]`, aplica no atributo; atualiza `<html lang>`, `<title>` e `meta[name="description"]`.
  4. Chave ausente: manter o texto atual e registrar `console.warn` (nunca exibir `undefined`).
- **Pronto quando:** ao trocar de idioma, nenhum texto fica em português na versão EN (exceto nomes próprios e `[TODO]`).
- **Teste:** no console, `document.querySelectorAll('[data-i18n]').length` deve ser > 30; após alternar, buscar `undefined` no DOM (deve retornar 0).
- **Commit:** `implementa dicionario de traducoes`

### T81 — Botão de idioma

- **Passos:**
  1. Botão `[data-lang-toggle]` exibindo `PT` e `EN`, com o ativo destacado.
  2. Ao clicar: alternar, gravar `localStorage.setItem('lang', ...)`, chamar `applyLanguage`.
  3. `aria-pressed` refletindo o estado e `aria-label` traduzido.
  4. Atualizar `document.documentElement.lang` (`pt-BR` / `en`).
- **Pronto quando:** alternar PT→EN→PT mantém todo o conteúdo coerente e persiste após reload.
- **Teste:** alternar, recarregar, conferir idioma e `lang` do HTML.
- **Commit:** `adiciona alternancia de idioma`

### T82 — Revisar traduções

- **Passos:**
  1. Listar todas as chaves e conferir paridade PT/EN (mesma quantidade).
  2. Verificar que textos longos não estouram os containers (EN costuma ser mais curto, mas títulos podem quebrar diferente).
- **Pronto quando:** `Object.keys(translations.pt).length === Object.keys(translations.en).length`.
- **Teste:** no console, comparar as chaves e listar diferenças (deve ser vazio).
- **Commit:** `revisa paridade das traducoes`

---

## Fase 9 — Interações

### T90 — Menu mobile

- **Passos:**
  1. Botão `.menu-toggle` visível apenas < 1024px, com `aria-expanded="false"` e `aria-controls="menu-principal"`.
  2. Ao abrir: adicionar `data-open="true"` no `nav`, travar scroll do body, mover foco para o primeiro link.
  3. Fechar com `Esc`, clique em link ou clique fora; devolver o foco ao botão.
  4. Ícone alterna entre hambúrguer e X (SVG inline).
- **Pronto quando:** abre, fecha e navega por teclado sem prender o foco.
- **Teste:** em 360px, abrir com teclado (`Enter`), navegar com `Tab`, fechar com `Esc`; o foco volta ao botão.
- **Commit:** `implementa menu mobile`

### T91 — Animações de entrada no scroll

- **Passos:**
  1. Adicionar `.reveal` nas seções/cards; CSS: `opacity: 0; transform: translateY(12px); transition: 400ms ease-out;`
  2. `.reveal.is-visible { opacity: 1; transform: none; }`
  3. `IntersectionObserver` com `threshold: 0.15`, `rootMargin: '0px 0px -10% 0px'`, `unobserve` após revelar.
  4. Se `prefers-reduced-motion: reduce` ou `IntersectionObserver` indisponível: revelar tudo imediatamente.
  5. Sem JS: conteúdo visível (a classe `.reveal` só deve ser aplicada via JS ou o CSS deve ter fallback `no-js`).
- **Pronto quando:** elementos aparecem suavemente ao rolar e nada fica invisível se o JS falhar.
- **Teste:** desativar JS → todo o conteúdo visível. Reativar → animação ocorre uma única vez por elemento.
- **Commit:** `adiciona animacoes de scroll`

### T92 — Navegação ativa

- **Passos:**
  1. `IntersectionObserver` nas seções para marcar o link correspondente com `aria-current="page"` e estilo de destaque.
  2. Ao clicar em um link, fechar o menu mobile (se aberto).
- **Pronto quando:** o link da seção visível fica destacado.
- **Teste:** rolar a página e conferir a troca de destaque no header.
- **Commit:** `destaca secao ativa na navegacao`

---

## Fase 10 — SEO, 404 e ativos

### T100 — `robots.txt`

- **Arquivo:** `robots.txt`
- **Conteúdo exato:**

```
User-agent: *
Allow: /

Sitemap: https://davimigliorinibonissoni-sys.github.io/pagina-pessoal/sitemap.xml
```

- **Teste:** abrir `http://localhost:8000/robots.txt` e conferir o texto.
- **Commit:** `adiciona robots.txt`

### T101 — `sitemap.xml`

- **Arquivo:** `sitemap.xml`
- **Conteúdo exato:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://davimigliorinibonissoni-sys.github.io/pagina-pessoal/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- **Teste:** abrir a URL e validar que o XML não tem erro de parse (o navegador exibe a árvore).
- **Commit:** `adiciona sitemap`

### T102 — JSON-LD `Person`

- **Arquivo:** `index.html` (dentro do `<head>`)
- **Conteúdo exato (ajustar apenas se os dados mudarem):**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Davi Migliorini Bonissoni",
  "jobTitle": "Desenvolvedor Full Stack",
  "url": "https://davimigliorinibonissoni-sys.github.io/pagina-pessoal/",
  "sameAs": [
    "https://github.com/davimigliorinibonissoni-sys",
    "https://www.linkedin.com/in/davimigliorinibonissoni"
  ]
}
</script>
```

- **Teste:** colar o HTML no validador https://validator.schema.org/ (após o deploy) e confirmar 0 erros.
- **Commit:** `adiciona dados estruturados`

### T103 — `404.html`

- **Passos:**
  1. Página mínima com o mesmo CSS, mensagem "Página não encontrada", link "Voltar ao início" e o header simplificado.
  2. Usar caminhos **absolutos** (`/pagina-pessoal/assets/...`) para funcionar em qualquer profundidade.
- **Teste:** abrir `http://localhost:8000/nao-existe` com um servidor que suporte 404 (o `python -m http.server` não suporta; testar após o deploy).
- **Commit:** `adiciona pagina 404`

### T104 — Imagem Open Graph

- **Arquivo:** `assets/img/og-image.png` (1200×630)
- **Passos:**
  1. Abrir o site local em 1200×630 (DevTools → modo responsivo).
  2. Capturar a dobra do hero (nome + cargo visíveis).
  3. Salvar como `assets/img/og-image.png` (PNG, < 300KB).
  4. Conferir que `og:image` aponta para a URL absoluta `https://davimigliorinibonissoni-sys.github.io/pagina-pessoal/assets/img/og-image.png`.
- **Teste:** abrir a imagem e confirmar 1200×630 e legibilidade do nome.
- **Commit:** `adiciona imagem de compartilhamento`

### T105 — Currículo placeholder

- **Arquivo:** `assets/cv.pdf`
- **Passos:**
  1. Executar o script do Anexo D para gerar um PDF válido de uma página com o texto de placeholder.
  2. Confirmar que o botão "Baixar CV" do hero baixa o arquivo.
  3. Registrar em `SPECS.md` → seção 12 que o PDF precisa ser substituído.
- **Teste:** clicar no botão e abrir o PDF baixado.
- **Commit:** `adiciona curriculo placeholder`

---

## Fase 11 — QA completo

> Executar **todos** os testes abaixo, na ordem. Registrar o resultado de cada um. Nenhum item pode ficar "não testado".

### T110 — Servir localmente

- **Comando:** `python -m http.server 8000`
- **Teste:** abrir `http://localhost:8000` e confirmar que o site carrega com CSS aplicado.
- **Evidência:** screenshot da home.

### T111 — Sem requisições externas

- **Comando:**
```powershell
Select-String -Path index.html,404.html,assets/css/styles.css,assets/js/*.js -Pattern "https?://" | Select-Object Path,LineNumber,Line
```
- **Critério:** todas as ocorrências devem ser apenas: canonical, Open Graph/Twitter, JSON-LD, links sociais, sitemap e `schema.org`. **Nenhuma** em `src`/`href` de CSS, JS ou fonte.
- **Evidência:** saída do comando anexada ao relatório.

### T112 — HTML válido

- **Teste:** abrir https://validator.w3.org/nu/?doc=https%3A%2F%2Fdavimigliorinibonissoni-sys.github.io%2Fpagina-pessoal%2F (após deploy).
- **Critério:** 0 erros. Warnings são aceitáveis se justificados.
- **Evidência:** screenshot do resultado.

### T113 — Contraste AA

- **Teste:** no DevTools, inspecionar `--text` sobre `--bg`, `--muted` sobre `--bg`, `--accent-contrast` sobre `--accent`, nos dois temas (8 combinações).
- **Critério:** texto normal ≥ 4.5:1; texto grande ≥ 3:1.
- **Evidência:** tabela com os 8 valores medidos.

### T114 — Responsividade

- **Teste:** em 360, 768, 1120 e 1440px, rodar no console:
```js
document.documentElement.scrollWidth <= window.innerWidth
```
- **Critério:** `true` nos quatro tamanhos, sem elemento cortado.
- **Evidência:** 4 screenshots (topo e projetos).

### T115 — Teclado e foco

- **Teste:** recarregar e pressionar `Tab` até o fim da página.
- **Critério:** todos os interativos recebem foco visível; ordem lógica; skip link é o primeiro; menu mobile abre/fecha com `Enter`/`Esc`; foco nunca fica preso.
- **Evidência:** lista da ordem de foco.

### T116 — Tema

- **Teste:** alternar tema → recarregar → conferir persistência; repetir em aba anônima (deve seguir o sistema).
- **Critério:** sem flash, sem perda de preferência, contraste mantido.
- **Evidência:** 2 screenshots (claro e escuro).

### T117 — Idiomas

- **Teste:** alternar PT→EN→PT; recarregar em EN; conferir `<html lang>`, título da aba e `meta description`.
- **Critério:** nenhum texto residual no idioma errado, nenhum `undefined`, nenhuma chave crua visível.
- **Evidência:** 2 screenshots (PT e EN).

### T118 — Sem JavaScript

- **Teste:** DevTools → Settings → Debugger → Disable JavaScript → recarregar.
- **Critério:** todo o conteúdo em PT visível, links de âncora funcionam, nada invisível por causa de `.reveal`.
- **Evidência:** screenshot com JS desativado.

### T119 — Links e assets

- **Teste:** clicar em todos os links internos, externos, `mailto:` e no download do CV; abrir a aba Network e recarregar.
- **Critério:** nenhum 404; links externos com `rel="noopener noreferrer"`; e-mail correto.
- **Evidência:** lista de URLs verificadas.

### T120 — Console limpo

- **Teste:** abrir DevTools → Console e recarregar; navegar por todas as seções.
- **Critério:** 0 erros e 0 warnings (exceto avisos de recurso opcional documentados).
- **Evidência:** screenshot do console vazio.

### T121 — Lighthouse

- **Comando:**
```sh
npx lighthouse http://localhost:8000 --output html --output-path ./lighthouse-mobile.html --chrome-flags="--headless"
npx lighthouse http://localhost:8000 --preset=desktop --output html --output-path ./lighthouse-desktop.html --chrome-flags="--headless"
```
- **Critério:** ≥ 95 em Performance, Accessibility, Best Practices e SEO (mobile e desktop).
- **Evidência:** os dois relatórios salvos (não commitar — adicionar ao `.gitignore`).
- **Se falhar:** corrigir a causa apontada e rodar novamente. Não aceitar score menor.

### T122 — Revisão de conteúdo

- **Teste:** buscar `[TODO]` no site publicado:
```powershell
Select-String -Path index.html,assets/js/i18n.js -Pattern "\[TODO\]" | Measure-Object
```
- **Critério:** cada ocorrência corresponde a uma pendência real registrada em `SPECS.md` → seção 12. Nenhum placeholder "esquecido" sem registro.
- **Evidência:** contagem e lista.

---

## Fase 12 — Deploy no GitHub Pages

### T130 — Publicar o código

- **Comandos:**
```sh
git add .
git commit -m "finaliza versao 1 do site"
git push origin main
```
- **Teste:** `git status` limpo e `git log --oneline -3` com os commits das fases.

### T131 — Ativar o GitHub Pages

- **Comando:**
```sh
gh api --method POST repos/davimigliorinibonissoni-sys/pagina-pessoal/pages -f "source[branch]=main" -f "source[path]=/"
```
- **Se retornar "already enabled":** rodar
```sh
gh api --method PUT repos/davimigliorinibonissoni-sys/pagina-pessoal/pages -f "source[branch]=main" -f "source[path]=/"
```
- **Teste:** `gh api repos/davimigliorinibonissoni-sys/pagina-pessoal/pages --jq '.html_url, .status'` → deve retornar a URL e `built` (pode levar 1–2 minutos).

### T132 — Aguardar o build

- **Comando:**
```sh
gh api repos/davimigliorinibonissoni-sys/pagina-pessoal/pages/builds/latest --jq '.status'
```
- **Critério:** `built`. Se `errored`, ler `.error.message` e corrigir antes de seguir.

### T133 — Verificar a URL pública

- **Teste:** abrir https://davimigliorinibonissoni-sys.github.io/pagina-pessoal/ em aba anônima.
- **Critério:** site idêntico ao local, CSS/JS carregando, sem 404 na aba Network.
- **Evidência:** screenshot.

---

## Fase 13 — Pós-deploy

### T140 — Revalidar em produção

- **Passos:**
  1. Rodar Lighthouse na URL pública (mobile e desktop) — mesma meta de 95.
  2. Validar HTML no W3C.
  3. Validar JSON-LD no schema.org.
  4. Testar Open Graph em https://www.opengraph.xyz/ (ou similar) — imagem e título corretos.
- **Critério:** todos aprovados.
- **Evidência:** 4 resultados anexados ao relatório final.

### T141 — Teste em dispositivo real

- **Passos:**
  1. Abrir a URL pública no celular (mesma rede ou 4G).
  2. Testar: scroll, menu, toggles, download do CV, links sociais.
- **Critério:** tudo funcional; sem zoom indesejado; toques com alvo ≥ 44px.
- **Evidência:** screenshots no celular.

### T142 — Encerrar o ciclo

- **Passos:**
  1. Atualizar a tabela de progresso deste arquivo para `[x]` em todas as fases.
  2. Atualizar `SPECS.md` → seção 12 (pendências restantes) e status do topo.
  3. Commit final: `atualiza documentacao pos-deploy`.
- **Critério:** documentação reflete o estado real do site.

---

## Anexo A — Script anti-flash (dentro do `<head>`)

```html
<script>
  (function () {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      document.documentElement.dataset.theme = theme;
      var lang = localStorage.getItem('lang') || 'pt';
      document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    } catch (e) {}
  })();
</script>
```

## Anexo B — Skip link

```html
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
```

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 16px;
  z-index: 100;
  padding: 12px 20px;
  background: var(--accent);
  color: var(--accent-contrast);
  border-radius: 999px;
  transition: top 150ms ease-out;
}
.skip-link:focus-visible { top: 12px; }
```

## Anexo C — Bloco de tokens

```css
:root {
  color-scheme: dark;

  --bg: #0A0C10;
  --surface: #12151B;
  --surface-2: #171B22;
  --border: #252B35;
  --text: #EDEFF3;
  --muted: #98A2B3;
  --accent: #22D3EE;
  --accent-contrast: #04222A;
  --focus: #22D3EE;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-full: 999px;

  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);

  --gutter: 20px;
}

@media (min-width: 768px) {
  :root { --gutter: 32px; }
}

@media (min-width: 1024px) {
  :root { --gutter: 48px; }
}

[data-theme="light"] {
  color-scheme: light;

  --bg: #FAFAF8;
  --surface: #FFFFFF;
  --surface-2: #F2F3F0;
  --border: #E2E4DF;
  --text: #111418;
  --muted: #5A6472;
  --accent: #0E7490;
  --accent-contrast: #FFFFFF;
  --focus: #0E7490;
}
```

## Anexo D — Gerar `assets/cv.pdf` placeholder (PowerShell)

Executar dentro da pasta `pagina-pessoal/`:

```powershell
$out = Join-Path (Get-Location) "assets\cv.pdf"
$objects = @(
  "<< /Type /Catalog /Pages 2 0 R >>"
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>"
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>"
)
$stream = "BT /F1 20 Tf 72 760 Td (DAVI MIGLIORINI BONISSONI) Tj 0 -32 Td /F1 12 Tf (PLACEHOLDER - substitua por seu curriculo real) Tj ET"
$objects += "<< /Length $($stream.Length) >>`nstream`n$stream`nendstream"
$objects += "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"

$sb = New-Object System.Text.StringBuilder
[void]$sb.Append("%PDF-1.4`n")
$offsets = @()
for ($i = 0; $i -lt $objects.Count; $i++) {
  $offsets += $sb.Length
  [void]$sb.Append("$($i + 1) 0 obj`n$($objects[$i])`nendobj`n")
}
$xrefPos = $sb.Length
[void]$sb.Append("xref`n0 $($objects.Count + 1)`n0000000000 65535 f `n")
foreach ($o in $offsets) { [void]$sb.Append(("{0:D10} 00000 n `n" -f $o)) }
[void]$sb.Append("trailer`n<< /Size $($objects.Count + 1) /Root 1 0 R >>`nstartxref`n$xrefPos`n%%EOF")
[System.IO.File]::WriteAllText($out, $sb.ToString(), [System.Text.Encoding]::ASCII)
Write-Host "PDF gerado: $out"
```

Verificação:

```powershell
$path = Join-Path (Get-Location) "assets\cv.pdf"
$bytes = [System.IO.File]::ReadAllBytes($path)
$text = [System.Text.Encoding]::ASCII.GetString($bytes)
$sx = [int][regex]::Match($text, 'startxref\s+(\d+)').Groups[1].Value
[System.Text.Encoding]::ASCII.GetString($bytes, $sx, 4)   # deve imprimir "xref"
```

## Anexo E — Workflow opcional de deploy (Actions)

Usar **somente** se a publicação por branch for trocada por Actions.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
```

> Atenção: `upload-pages-artifact` com `path: .` publica o repositório inteiro, incluindo `.git`, docs e relatórios. Se usar Actions, excluir `AGENT.md`, `SPECS.md`, `TODO.md`, `lighthouse-*.html` e `.gitignore` do artefato.

---

## Matriz de testes × critérios de aceite

| Critério do `SPECS.md` | Teste que comprova |
|---|---|
| 1. Funciona sem JS | T118 |
| 2. Tema e idioma persistem, sem flash | T116, T117, T71 |
| 3. Âncoras com offset do header | T30, T92 |
| 4. Layout íntegro em 4 larguras | T114 |
| 5. Teclado e foco visível | T115 |
| 6. Contraste AA nos dois temas | T113 |
| 7. Lighthouse ≥ 95 | T121, T140 |
| 8. Zero requisições externas | T111 |
| 9. Console limpo | T120 |
| 10. Deploy público acessível | T133 |

---

## Troubleshooting

| Sintoma | Causa provável | Correção |
|---|---|---|
| CSS não carrega no Pages | Caminho absoluto iniciando com `/assets` | Usar caminhos relativos (`assets/css/styles.css`) |
| 404 em imagens | Nome do arquivo com maiúscula ou espaço | Renomear para `kebab-case` minúsculo |
| Página em branco | Erro de sintaxe no JS | Abrir o console e corrigir o erro antes de tudo |
| Tema pisca na carga | Script anti-flash depois do CSS | Mover para o `<head>`, antes do `link` de CSS |
| Texto `undefined` | Chave ausente no dicionário | Adicionar a chave nos dois idiomas |
| Conteúdo invisível | `.reveal` sem `.is-visible` | Garantir fallback sem JS / observer |
| Pages não publica | Branch errada ou Pages desativado | Repetir T131 e conferir `gh api .../pages` |
| Lighthouse < 95 em SEO | Falta `meta description` ou `title` | Conferir T10 |
| Build do Pages falha | Arquivo com nome inválido | Ler `gh api .../pages/builds/latest` |

## Rollback

Se o deploy quebrar a produção:

1. `git revert <commit>` do commit problemático.
2. `git push origin main`.
3. Aguardar o build (T132) e revalidar (T133).
4. Se necessário, despublicar temporariamente: `gh api --method DELETE repos/davimigliorinibonissoni-sys/pagina-pessoal/pages`.
