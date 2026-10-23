'use strict';

/* ==========================================================================
   i18n — dicionários PT/EN e aplicação no DOM.
   Carregado antes de main.js (ambos com defer).
   ========================================================================== */

var translations = {
  pt: {
    'meta.title': 'Davi Migliorini Bonissoni — Desenvolvedor Full Stack',
    'meta.description': 'Portfólio de Davi Migliorini Bonissoni, desenvolvedor full stack. Projetos, habilidades, experiência e contato.',
    'meta.ogTitle': 'Davi Migliorini Bonissoni — Desenvolvedor Full Stack',
    'meta.ogDescription': 'Portfólio de Davi Migliorini Bonissoni, desenvolvedor full stack.',
    'meta.ogLocale': 'pt_BR',

    'a11y.skip': 'Pular para o conteúdo',
    'a11y.lang': 'PT / EN — mudar para inglês',
    'a11y.themeLight': 'Ativar tema claro',
    'a11y.themeDark': 'Ativar tema escuro',
    'a11y.menuOpen': 'Abrir menu',
    'a11y.menuClose': 'Fechar menu',

    'nav.label': 'Navegação principal',
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',

    'hero.eyebrow': 'Desenvolvedor Full Stack',
    'hero.lead': '[TODO] Uma frase curta sobre o que você constrói e para quem.',
    'hero.ctaProjects': 'Ver projetos',
    'hero.ctaCv': 'Baixar CV',
    'hero.socialLabel': 'Perfis e contato',

    'projects.eyebrow': 'Portfólio',
    'projects.title': 'Projetos',
    'projects.lead': '[TODO] Selecione de 3 a 6 projetos que mostrem o que você faz de melhor.',
    'projects.code': 'Código',
    'projects.demo': 'Demo',

    'p1.title': '[TODO] Projeto 1',
    'p1.desc': '[TODO] Descrição curta do problema resolvido e do resultado.',
    'p1.tag1': '[TODO] stack',
    'p1.tag2': '[TODO] stack',
    'p1.tag3': '[TODO] stack',

    'p2.title': '[TODO] Projeto 2',
    'p2.desc': '[TODO] Descrição curta do problema resolvido e do resultado.',
    'p2.tag1': '[TODO] stack',
    'p2.tag2': '[TODO] stack',
    'p2.tag3': '[TODO] stack',

    'p3.title': '[TODO] Projeto 3',
    'p3.desc': '[TODO] Descrição curta do problema resolvido e do resultado.',
    'p3.tag1': '[TODO] stack',
    'p3.tag2': '[TODO] stack',
    'p3.tag3': '[TODO] stack',

    'p4.title': '[TODO] Projeto 4',
    'p4.desc': '[TODO] Descrição curta do problema resolvido e do resultado.',
    'p4.tag1': '[TODO] stack',
    'p4.tag2': '[TODO] stack',
    'p4.tag3': '[TODO] stack',

    'p5.title': '[TODO] Projeto 5',
    'p5.desc': '[TODO] Descrição curta do problema resolvido e do resultado.',
    'p5.tag1': '[TODO] stack',
    'p5.tag2': '[TODO] stack',
    'p5.tag3': '[TODO] stack',

    'p6.title': '[TODO] Projeto 6',
    'p6.desc': '[TODO] Descrição curta do problema resolvido e do resultado.',
    'p6.tag1': '[TODO] stack',
    'p6.tag2': '[TODO] stack',
    'p6.tag3': '[TODO] stack',

    'about.eyebrow': 'Sobre',
    'about.title': 'Quem está por trás do código',
    'about.p1': '[TODO] Conte quem você é, o que estuda e qual problema gosta de resolver.',
    'about.p2': '[TODO] Descreva como você trabalha e o que busca agora.',
    'about.point1': '[TODO] Foco atual',
    'about.point2': '[TODO] Localização',
    'about.point3': '[TODO] Disponibilidade',
    'about.photo': '[TODO] foto',

    'skills.eyebrow': 'Habilidades',
    'skills.title': 'Ferramentas do ofício',
    'skills.lead': '[TODO] Ajuste a lista para refletir apenas o que você domina.',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end',
    'skills.tools': 'Ferramentas & DevOps',
    'skills.a11y': 'Acessibilidade',
    'skills.responsive': 'Responsividade',
    'skills.apis': 'APIs REST',
    'skills.modeling': 'Modelagem de dados',

    'experience.eyebrow': 'Trajetória',
    'experience.title': 'Experiência e formação',
    'experience.lead': '[TODO] Substitua por experiências, estudos e projetos reais.',

    'exp1.period': '[TODO] 2024 — atual',
    'exp1.role': '[TODO] Cargo ou curso',
    'exp1.org': '[TODO] Empresa ou instituição',
    'exp1.desc': '[TODO] Uma linha sobre o que você fez ou aprendeu.',

    'exp2.period': '[TODO] 2023 — 2024',
    'exp2.role': '[TODO] Cargo ou curso',
    'exp2.org': '[TODO] Empresa ou instituição',
    'exp2.desc': '[TODO] Uma linha sobre o que você fez ou aprendeu.',

    'exp3.period': '[TODO] 2022 — 2023',
    'exp3.role': '[TODO] Cargo ou curso',
    'exp3.org': '[TODO] Empresa ou instituição',
    'exp3.desc': '[TODO] Uma linha sobre o que você fez ou aprendeu.',

    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos conversar',
    'contact.lead': '[TODO] Escreva uma frase convidando para uma conversa.',
    'contact.cta': 'Enviar e-mail',

    'footer.rights': 'Todos os direitos reservados.',
    'footer.built': 'Feito com HTML, CSS e JavaScript.',
    'footer.top': 'Voltar ao topo'
  },

  en: {
    'meta.title': 'Davi Migliorini Bonissoni — Full Stack Developer',
    'meta.description': 'Portfolio of Davi Migliorini Bonissoni, full stack developer. Projects, skills, experience and contact.',
    'meta.ogTitle': 'Davi Migliorini Bonissoni — Full Stack Developer',
    'meta.ogDescription': 'Portfolio of Davi Migliorini Bonissoni, full stack developer.',
    'meta.ogLocale': 'en_US',

    'a11y.skip': 'Skip to content',
    'a11y.lang': 'PT / EN — switch to Portuguese',
    'a11y.themeLight': 'Enable light theme',
    'a11y.themeDark': 'Enable dark theme',
    'a11y.menuOpen': 'Open menu',
    'a11y.menuClose': 'Close menu',

    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Full Stack Developer',
    'hero.lead': '[TODO] A short line about what you build and for whom.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaCv': 'Download CV',
    'hero.socialLabel': 'Profiles and contact',

    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Projects',
    'projects.lead': '[TODO] Pick 3 to 6 projects that show your best work.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',

    'p1.title': '[TODO] Project 1',
    'p1.desc': '[TODO] Short description of the problem and the outcome.',
    'p1.tag1': '[TODO] stack',
    'p1.tag2': '[TODO] stack',
    'p1.tag3': '[TODO] stack',

    'p2.title': '[TODO] Project 2',
    'p2.desc': '[TODO] Short description of the problem and the outcome.',
    'p2.tag1': '[TODO] stack',
    'p2.tag2': '[TODO] stack',
    'p2.tag3': '[TODO] stack',

    'p3.title': '[TODO] Project 3',
    'p3.desc': '[TODO] Short description of the problem and the outcome.',
    'p3.tag1': '[TODO] stack',
    'p3.tag2': '[TODO] stack',
    'p3.tag3': '[TODO] stack',

    'p4.title': '[TODO] Project 4',
    'p4.desc': '[TODO] Short description of the problem and the outcome.',
    'p4.tag1': '[TODO] stack',
    'p4.tag2': '[TODO] stack',
    'p4.tag3': '[TODO] stack',

    'p5.title': '[TODO] Project 5',
    'p5.desc': '[TODO] Short description of the problem and the outcome.',
    'p5.tag1': '[TODO] stack',
    'p5.tag2': '[TODO] stack',
    'p5.tag3': '[TODO] stack',

    'p6.title': '[TODO] Project 6',
    'p6.desc': '[TODO] Short description of the problem and the outcome.',
    'p6.tag1': '[TODO] stack',
    'p6.tag2': '[TODO] stack',
    'p6.tag3': '[TODO] stack',

    'about.eyebrow': 'About',
    'about.title': 'Behind the code',
    'about.p1': '[TODO] Tell who you are, what you study and which problems you like to solve.',
    'about.p2': '[TODO] Describe how you work and what you are looking for now.',
    'about.point1': '[TODO] Current focus',
    'about.point2': '[TODO] Location',
    'about.point3': '[TODO] Availability',
    'about.photo': '[TODO] photo',

    'skills.eyebrow': 'Skills',
    'skills.title': 'Tools of the trade',
    'skills.lead': '[TODO] Keep only what you actually master.',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end',
    'skills.tools': 'Tools & DevOps',
    'skills.a11y': 'Accessibility',
    'skills.responsive': 'Responsive design',
    'skills.apis': 'REST APIs',
    'skills.modeling': 'Data modeling',

    'experience.eyebrow': 'Journey',
    'experience.title': 'Experience and education',
    'experience.lead': '[TODO] Replace with real experience, studies and projects.',

    'exp1.period': '[TODO] 2024 — present',
    'exp1.role': '[TODO] Role or course',
    'exp1.org': '[TODO] Company or school',
    'exp1.desc': '[TODO] One line about what you did or learned.',

    'exp2.period': '[TODO] 2023 — 2024',
    'exp2.role': '[TODO] Role or course',
    'exp2.org': '[TODO] Company or school',
    'exp2.desc': '[TODO] One line about what you did or learned.',

    'exp3.period': '[TODO] 2022 — 2023',
    'exp3.role': '[TODO] Role or course',
    'exp3.org': '[TODO] Company or school',
    'exp3.desc': '[TODO] One line about what you did or learned.',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's talk",
    'contact.lead': '[TODO] Write a line inviting a conversation.',
    'contact.cta': 'Send email',

    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with HTML, CSS and JavaScript.',
    'footer.top': 'Back to top'
  }
};

function normalizeLang(lang) {
  return lang === 'en' ? 'en' : 'pt';
}

function translate(lang, key) {
  var dict = translations[normalizeLang(lang)];
  if (dict && Object.prototype.hasOwnProperty.call(dict, key)) {
    return dict[key];
  }
  if (Object.prototype.hasOwnProperty.call(translations.pt, key)) {
    console.warn('[i18n] chave ausente em "' + lang + '": ' + key);
    return translations.pt[key];
  }
  console.warn('[i18n] chave desconhecida: ' + key);
  return null;
}

function applyLanguage(lang) {
  var target = normalizeLang(lang);

  document.documentElement.lang = target === 'en' ? 'en' : 'pt-BR';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var value = translate(target, el.getAttribute('data-i18n'));
    if (value !== null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
      var parts = pair.split(':');
      if (parts.length < 2) return;
      var attr = parts[0].trim();
      var key = parts.slice(1).join(':').trim();
      var value = translate(target, key);
      if (value !== null) el.setAttribute(attr, value);
    });
  });

  document.title = translate(target, 'meta.title');

  var description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', translate(target, 'meta.description'));

  var ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', translate(target, 'meta.ogLocale'));

  var langToggle = document.querySelector('[data-lang-toggle]');
  if (langToggle) {
    langToggle.setAttribute('aria-label', translate(target, 'a11y.lang'));
    langToggle.querySelectorAll('[data-lang-option]').forEach(function (option) {
      option.classList.toggle('is-active', option.getAttribute('data-lang-option') === target);
    });
  }

  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: target } }));
}

window.translations = translations;
window.translate = translate;
window.applyLanguage = applyLanguage;
