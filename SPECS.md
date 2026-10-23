# SPECS.md — Site pessoal / portfólio

> Documento de especificação do projeto `pagina-pessoal`.
> Status: **planejamento aprovado** — nenhuma linha de código de produção escrita ainda.
> Última atualização: 2026-10-23

## 1. Visão geral

Site pessoal de uma página, publicado no GitHub Pages, que funciona como **portfólio de
projetos** e **vitrine profissional** de Davi Migliorini Bonissoni (desenvolvedor full stack).

Objetivo: em menos de 30 segundos, um visitante entende **quem é**, **o que faz**, **o que já
construiu** e **como entrar em contato** — com aparência de produto bem-acabado, não de
template.

## 2. Objetivos e métricas de sucesso

| Objetivo | Como medimos |
|---|---|
| Causar boa impressão técnica | Lighthouse mobile ≥ 95 nas 4 categorias |
| Comunicar identidade rapidamente | Hero legível sem scroll em 360×640 |
| Levar à ação | CTA de contato visível no hero e no fim da página |
| Ser acessível | WCAG 2.1 AA, navegação 100% por teclado |
| Ser bilíngue de verdade | Todo texto traduzido, sem fallback quebrado |

**Público:** recrutadores e lideranças técnicas (PT e EN), clientes em potencial de freelance
e colegas desenvolvedores.

## 3. Escopo

### Dentro do escopo (v1)
- Landing page única com 6 seções + header/footer.
- Tema claro e escuro com toggle persistente.
- Bilíngue PT/EN com toggle persistente.
- Cards de projeto com placeholders prontos para preenchimento.
- Botão "Baixar CV" apontando para `assets/cv.pdf` (arquivo entra depois).
- Animações de entrada no scroll, respeitando `prefers-reduced-motion`.
- Deploy automático no GitHub Pages.
- Metadados de SEO e Open Graph.

### Fora do escopo (v1)
- Blog, CMS, painel administrativo.
- Formulário de contato (depende de serviço externo).
- Analytics.
- Backend, banco de dados, autenticação.
- Múltiplas páginas por projeto.
- Domínio próprio (previsto para v2).

## 4. Identidade

| Campo | Valor |
|---|---|
| Nome exibido | Davi Migliorini Bonissoni |
| Área | Desenvolvedor Full Stack |
| GitHub | https://github.com/davimigliorinibonissoni-sys |
| LinkedIn | https://www.linkedin.com/in/davimigliorinibonissoni |
| E-mail | davimigliorinibonissoni@gmail.com |
| Idioma padrão | Português (PT) |
| Segundo idioma | Inglês (EN) |

> O e-mail é público no site. Se spam virar problema, trocar por um endereço dedicado ou por
> link `mailto:` com assunto pré-preenchido.

## 5. Arquitetura de informação

Ordem das seções na página (one-page, âncoras):

1. **Header** — logo/nome, navegação, toggles de idioma e tema.
2. **Hero** — nome, cargo, frase de posicionamento, CTA primário ("Ver projetos") e secundário
   ("Baixar CV"), links sociais, indicador de scroll.
3. **Projetos** — grid de 6 cards (3 no desktop, 2 no tablet, 1 no mobile).
4. **Sobre** — texto de apresentação + foto (placeholder), com destaque para foco atual.
5. **Habilidades** — 3 grupos: Front-end, Back-end, Ferramentas & DevOps.
6. **Experiência** — timeline vertical com 2–3 entradas placeholder (formação + experiência).
7. **Contato** — chamada final, e-mail em destaque, botões GitHub/LinkedIn.
8. **Footer** — copyright, "feito com HTML/CSS/JS", link para o topo.

### Conteúdo por seção

**Hero**
- Título: nome completo.
- Subtítulo: "Desenvolvedor Full Stack".
- Frase: `[TODO]` uma linha sobre o que constrói e para quem.
- CTAs: "Ver projetos" (âncora) e "Baixar CV" (`assets/cv.pdf`).

**Projetos (6 placeholders)**
Cada card contém: nome, descrição de 1–2 linhas, 2–4 tags de tecnologia, links "Código" e
"Demo" (podem ficar desabilitados com `aria-disabled` enquanto não existirem). Campos marcados
com `[TODO]`.

**Sobre**
- Parágrafo 1: quem é e o que estuda (`[TODO]`).
- Parágrafo 2: como trabalha / o que busca (`[TODO]`).
- Foto: `assets/img/profile.webp` com placeholder neutro.

**Habilidades**
- Front-end: HTML, CSS, JavaScript, React, acessibilidade, responsividade.
- Back-end: Node.js, APIs REST, SQL, modelagem de dados.
- Ferramentas: Git/GitHub, VS Code, GitHub Actions, Figma.
> Ajustar conforme repertório real — não listar o que não se domina.

**Experiência**
- 2–3 entradas com período, título, instituição/empresa e 1 linha de descrição (`[TODO]`).

**Contato**
- Título: "Vamos conversar".
- E-mail como `mailto:` em destaque + botões GitHub e LinkedIn.
- Sem formulário na v1.

## 6. Design system

### Direção
**Dark tech** com tema claro equivalente. Fundo profundo, superfícies elevadas, bordas de 1px,
acento ciano, tipografia densa e confiante. Nada de glassmorphism exagerado, nada de sombras
pesadas — a profundidade vem do contraste entre superfícies.

### Tokens de cor

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0A0C10` | `#FAFAF8` |
| `--surface` | `#12151B` | `#FFFFFF` |
| `--surface-2` | `#171B22` | `#F2F3F0` |
| `--border` | `#252B35` | `#E2E4DF` |
| `--text` | `#EDEFF3` | `#111418` |
| `--muted` | `#98A2B3` | `#5A6472` |
| `--accent` | `#22D3EE` | `#0E7490` |
| `--accent-contrast` | `#04222A` | `#FFFFFF` |
| `--focus` | `#22D3EE` | `#0E7490` |

Contraste mínimo verificado em ambos os temas (texto normal ≥ 4.5:1).

### Tipografia
- Família: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` — **zero fontes externas**.
- Escala (rem): `0.875 / 1 / 1.125 / 1.5 / 2 / 2.75 / 3.5` (clamp no hero).
- Títulos: peso 700, `letter-spacing: -0.02em`, `line-height: 1.1`.
- Corpo: peso 400, `line-height: 1.65`, largura máxima de 68ch.
- Rótulos/tags: 0.75rem, `letter-spacing: 0.08em`, uppercase.

### Espaço, forma e movimento
- Escala de espaço: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 (px).
- Container: 1120px; gutters 20px (mobile) / 32px (tablet) / 48px (desktop).
- Grid: 12 colunas, gap 24px.
- Raio: 8px (controles), 12px (cards), 999px (pills).
- Borda: 1px `var(--border)`.
- Transições: 150ms (hover/focus), 250ms (tema), 400ms (entrada de seção), `ease-out`.
- Entrada no scroll: `opacity 0→1` + `translateY(12px→0)`, via `IntersectionObserver`.

### Componentes
`button` (primário, secundário, fantasma), `tag`, `card` (projeto, habilidade), `timeline-item`,
`theme-toggle`, `lang-toggle`, `skip-link`, `section-heading` (com eyebrow + título + linha).

## 7. Stack e arquitetura técnica

- **HTML5 + CSS3 + JavaScript (ES2020+) nativos.** Sem frameworks, sem bundler, sem npm.
- Site 100% estático servido a partir da raiz do repositório.
- CSS em arquivo único com custom properties; dark é o padrão, light via `[data-theme="light"]`.
- Tema inicial: `localStorage` → preferência do sistema (`prefers-color-scheme`) → dark.
- i18n: atributos `data-i18n` no HTML + dicionário `pt`/`en` em `assets/js/i18n.js` (objeto JS,
  não `fetch`, para funcionar também em `file://`).
- Idioma inicial: `localStorage` → `navigator.language` → PT.
- Atualiza `<html lang>`, `<title>` e `meta description` ao trocar idioma.

### Estrutura de arquivos (prevista)

```
pagina-pessoal/
├── AGENT.md
├── SPECS.md
├── README.md
├── index.html
├── 404.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js          # tema, scroll, menu mobile
│   ├── js/i18n.js          # dicionários PT/EN + troca de idioma
│   ├── img/
│   │   ├── profile.webp    # TODO
│   │   └── og-image.png    # TODO (1200×630)
│   ├── icons/              # SVG inline quando possível
│   └── cv.pdf              # TODO
└── .github/workflows/deploy.yml   # opcional (ver deploy)
```

## 8. Responsividade

| Breakpoint | Comportamento |
|---|---|
| < 640px | 1 coluna, nav em menu, hero 2 linhas, cards empilhados |
| 640–1023px | 2 colunas nos cards, sobre em 1 coluna |
| ≥ 1024px | 3 colunas nos cards, sobre em 2 colunas, nav completa |
| ≥ 1440px | container travado em 1120px, margens generosas |

Testar em 360, 768, 1120 e 1440px.

## 9. Acessibilidade

- WCAG 2.1 AA.
- Skip link visível ao focar.
- `aria-pressed` nos toggles de tema/idioma; `aria-current` na navegação ativa.
- Menu mobile com `aria-expanded`, fechando com `Esc` e devolvendo o foco.
- Foco visível com `outline: 2px solid var(--focus)` + `outline-offset: 2px`.
- `prefers-reduced-motion: reduce` desliga animações e `scroll-behavior: smooth`.
- Links externos com `rel="noopener noreferrer"` e indicação acessível.

## 10. SEO e compartilhamento

- `<title>` e `meta description` por idioma.
- Open Graph + Twitter Card com `assets/img/og-image.png` (1200×630).
- `canonical` para `https://davimigliorinibonissoni-sys.github.io/pagina-pessoal/`.
- Dados estruturados JSON-LD `Person` (nome, cargo, `sameAs`: GitHub e LinkedIn).
- `robots.txt` permitindo indexação + `sitemap.xml` simples.

## 11. Deploy

- **v1:** GitHub Pages com *Deploy from a branch* → `main` / `(root)`. Zero configuração.
- URL: https://davimigliorinibonissoni-sys.github.io/pagina-pessoal/
- Alternativa documentada: workflow `deploy.yml` com `actions/upload-pages-artifact` +
  `actions/deploy-pages` (útil quando entrar build ou validações).
- **v2 (prevista):** domínio próprio via arquivo `CNAME` + registros DNS `A`/`AAAA`/`CNAME`,
  com HTTPS forçado. Escolher o domínio depois.

## 12. Pendências (conteúdo e ativos)

- [ ] Frase de posicionamento do hero (PT e EN).
- [ ] Texto da seção "Sobre" (PT e EN).
- [ ] 6 projetos reais: nome, descrição, tags, link do código e da demo.
- [ ] Habilidades reais por grupo (remover o que não dominar).
- [ ] 2–3 entradas de experiência/formação com datas.
- [ ] Foto de perfil em `assets/img/profile.webp` (mín. 800×800).
- [ ] Currículo em PDF em `assets/cv.pdf`.
- [ ] Imagem Open Graph `assets/img/og-image.png` (1200×630).
- [ ] Revisão das traduções EN por alguém fluente.
- [ ] Decidir se o e-mail fica exposto ou vira formulário/serviço.

## 13. Critérios de aceite (v1)

1. Página carrega e é legível com JS desativado (conteúdo em PT).
2. Toggles de tema e idioma funcionam, persistem após recarregar e não causam flash de tema.
3. Todas as âncoras do menu levam à seção correta com offset do header fixo.
4. Layout íntegro em 360/768/1120/1440px, sem scroll horizontal.
5. Navegação completa por teclado, com foco sempre visível.
6. Contraste AA nos dois temas (verificado com ferramenta).
7. Lighthouse mobile ≥ 95 em Performance, Accessibility, Best Practices e SEO.
8. Nenhuma requisição externa (fontes, scripts, CSS).
9. Sem erros ou warnings no console.
10. Deploy no Pages acessível pela URL pública.

## 14. Roadmap

| Fase | Entrega |
|---|---|
| 0 | Planejamento: `AGENT.md` + `SPECS.md` ✅ |
| 1 | Estrutura HTML semântica + tokens + layout base |
| 2 | Seções completas com placeholders e responsividade |
| 3 | Tema claro/escuro + i18n PT/EN |
| 4 | Animações de scroll + menu mobile + polimento |
| 5 | Auditoria de acessibilidade, performance e SEO |
| 6 | Deploy no GitHub Pages |
| 7 (v2) | Conteúdo real, domínio próprio, analytics |

## 15. Riscos e decisões em aberto

| Risco / dúvida | Mitigação |
|---|---|
| Placeholders virarem conteúdo final por esquecimento | Prefixo `[TODO]` visível + checklist na seção 12 |
| Tradução EN soar amadora | Revisão humana antes do deploy final |
| E-mail exposto gerar spam | `mailto:` com assunto pré-preenchido; reavaliar formulário na v2 |
| Muitas animações prejudicarem performance | Só `opacity`/`transform`, via `IntersectionObserver`, com `reduced-motion` |
| Escopo crescer (blog, CMS) | Fica para v2; v1 é one-page estática |
