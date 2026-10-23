'use strict';

/* ==========================================================================
   main.js — tema, idioma, menu mobile, navegação ativa e animações.
   Depende de i18n.js (window.translate / window.applyLanguage).
   ========================================================================== */

(function () {
  var root = document.documentElement;

  var storage = {
    get: function (key) {
      try { return localStorage.getItem(key); } catch (e) { return null; }
    },
    set: function (key, value) {
      try { localStorage.setItem(key, value); } catch (e) { /* modo privado */ }
    }
  };

  function currentLang() {
    return root.lang === 'en' ? 'en' : 'pt';
  }

  function t(key) {
    return window.translate ? window.translate(currentLang(), key) : null;
  }

  /* Em SVG, a propriedade `hidden` não existe de fato (só em HTMLElement),
     por isso os ícones são alternados via atributo. */
  function setIcon(el, visible) {
    if (!el) return;
    if (visible) {
      el.removeAttribute('hidden');
    } else {
      el.setAttribute('hidden', '');
    }
  }

  /* Tema ------------------------------------------------------------------ */
  function updateThemeUI() {
    var button = document.querySelector('[data-theme-toggle]');
    if (!button) return;

    var isLight = root.dataset.theme === 'light';
    button.setAttribute('aria-pressed', isLight ? 'true' : 'false');

    var label = t(isLight ? 'a11y.themeDark' : 'a11y.themeLight');
    if (label) button.setAttribute('aria-label', label);

    var sun = button.querySelector('[data-icon="sun"]');
    var moon = button.querySelector('[data-icon="moon"]');
    setIcon(sun, !isLight);
    setIcon(moon, isLight);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isLight ? '#FAFAF8' : '#0A0C10');
  }

  function setTheme(theme, persist) {
    root.dataset.theme = theme === 'light' ? 'light' : 'dark';
    if (persist) storage.set('theme', root.dataset.theme);
    updateThemeUI();
  }

  /* Menu mobile ------------------------------------------------------------ */
  var menuButton = document.querySelector('[data-menu-toggle]');
  var nav = document.getElementById('menu-principal');

  function menuIsOpen() {
    return !!nav && nav.getAttribute('data-open') === 'true';
  }

  function setMenu(open, returnFocus) {
    if (!nav || !menuButton) return;

    nav.setAttribute('data-open', open ? 'true' : 'false');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');

    var label = t(open ? 'a11y.menuClose' : 'a11y.menuOpen');
    if (label) menuButton.setAttribute('aria-label', label);

    var iconMenu = menuButton.querySelector('[data-icon="menu"]');
    var iconClose = menuButton.querySelector('[data-icon="close"]');
    setIcon(iconMenu, !open);
    setIcon(iconClose, open);

    document.body.classList.toggle('is-locked', open);

    if (open) {
      var firstLink = nav.querySelector('a');
      if (firstLink) {
        /* O menu acabou de ficar visível; esperar o recálculo de estilo
           garante que o link seja realmente focável. */
        requestAnimationFrame(function () { firstLink.focus(); });
      }
    } else if (returnFocus) {
      menuButton.focus();
    }
  }

  /* Seção ativa ------------------------------------------------------------ */
  function setupActiveNav() {
    var links = document.querySelectorAll('[data-nav-link]');
    var sections = document.querySelectorAll('main section[id]');
    if (!links.length || !sections.length) return;

    function activate(id) {
      links.forEach(function (link) {
        if (link.getAttribute('data-nav-link') === id) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    if (!('IntersectionObserver' in window)) {
      activate('inicio');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) activate(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* Animações de entrada ---------------------------------------------------- */
  function setupReveal() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    targets.forEach(function (el) { el.classList.add('js-reveal'); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* Inicialização ----------------------------------------------------------- */
  function init() {
    var storedTheme = storage.get('theme');
    setTheme(storedTheme || root.dataset.theme, false);

    var themeButton = document.querySelector('[data-theme-toggle]');
    if (themeButton) {
      themeButton.addEventListener('click', function () {
        setTheme(root.dataset.theme === 'light' ? 'dark' : 'light', true);
      });
    }

    var langButton = document.querySelector('[data-lang-toggle]');
    if (langButton) {
      langButton.addEventListener('click', function () {
        var next = currentLang() === 'pt' ? 'en' : 'pt';
        storage.set('lang', next);
        if (window.applyLanguage) window.applyLanguage(next);
      });
    }

    if (window.applyLanguage) {
      window.applyLanguage(storage.get('lang') || currentLang());
    }

    if (menuButton && nav) {
      menuButton.addEventListener('click', function () {
        setMenu(!menuIsOpen(), false);
      });

      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (menuIsOpen()) setMenu(false, false);
        });
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menuIsOpen()) setMenu(false, true);
      });

      document.addEventListener('click', function (event) {
        if (!menuIsOpen()) return;
        if (nav.contains(event.target) || menuButton.contains(event.target)) return;
        setMenu(false, false);
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024 && menuIsOpen()) setMenu(false, false);
      });
    }

    document.addEventListener('languagechange', function () {
      updateThemeUI();
      if (menuButton && nav) {
        var label = t(menuIsOpen() ? 'a11y.menuClose' : 'a11y.menuOpen');
        if (label) menuButton.setAttribute('aria-label', label);
      }
    });

    var year = document.querySelector('[data-year]');
    if (year) year.textContent = String(new Date().getFullYear());

    setupActiveNav();
    setupReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
