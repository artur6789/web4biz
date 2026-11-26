/* Shared by the portfolio, local project demos and the static page generator. */
const web4bizSeo = (() => {
  const base = 'https://artur6789.github.io/web4biz/';
  const brand = 'web4biz.pl';
  const pages = {
    index: {
      pl: ['Strony internetowe, narzędzia i aplikacje dla firm', 'Projektuję strony B2B, narzędzia online i aplikacje webowe. Zobacz realizacje, poznaj sposób współpracy i sprawdź, jaki zakres pasuje do Twojej firmy.'],
      en: ['Websites, tools and web apps for businesses', 'Explore B2B websites, online tools and web apps by Artur Załuska. See selected work, compare project options and discuss what your business needs.']
    },
    projects: {
      pl: ['Portfolio stron internetowych i aplikacji webowych', 'Zobacz realizacje, od planera tras po interaktywne menu pizzerii. Filtruj projekty i sprawdź, jak rozwiązują konkretne problemy klientów.'],
      en: ['Website and web app portfolio', 'Explore projects ranging from a freight route calculator to an interactive pizza menu. Filter the portfolio and see how each design addresses a customer need.']
    },
    'bdc-academy': {
      pl: ['BDC Academy - szkolenia dla salonów dealerskich', 'Porównaj programy BDC dla sprzedaży, serwisu i kierowników. Wybierz szkolenia dla swojego zespołu dealerskiego i przygotuj zapytanie.'],
      en: ['BDC Academy - automotive dealership training', 'Compare training for dealership sales, service and BDC leaders. Choose the programmes your team needs and prepare a training enquiry.']
    },
    hauhaus: {
      pl: ['HAUHAUS - psie przedszkole w Warszawie', 'Poznaj plan dnia, ogród i opiekę w warszawskim psim przedszkolu HAUHAUS. Sprawdź warunki pobytu i przygotuj wizytę adaptacyjną.'],
      en: ['HAUHAUS - dog daycare in Warsaw', 'Explore the daily routine, garden and care at HAUHAUS dog daycare in Warsaw. Review the options and plan an introductory visit for your dog.']
    },
    kubatura: {
      pl: ['KUBATURA - przeprowadzki biur i kalkulator ładunku', 'Zaplanuj relokację biura lub archiwum. Dodaj wyposażenie, sprawdź objętość i masę ładunku oraz przygotuj zapytanie o wizję lokalną.'],
      en: ['KUBATURA - office moves and load calculator', 'Plan an office or archive move. Add items, estimate load volume and weight, and prepare a request for an on-site survey.']
    },
    pmclassics: {
      pl: ['PM Classics - renowacja i import klasyków', 'Przeglądaj klasyczne samochody i motocykle PM Classics, porównaj ceny w dostępnych walutach i przygotuj zapytanie o import lub renowację.'],
      en: ['PM Classics - classic vehicle restoration and import', 'Browse classic cars and motorcycles, compare prices in your currency and prepare a restoration or import brief for PM Classics.'],
      no: ['PM Classics - restaurering og import av klassikere', 'Se klassiske biler og motorsykler, sjekk priser i ønsket valuta og send en forespørsel om restaurering eller import til PM Classics.']
    }
  };
  const languages = page => page === 'pmclassics' ? ['pl', 'en', 'no'] : ['pl', 'en'];
  const caseFile = (project, lang) => 'case-' + project + '-' + lang + '.html';
  const casePattern = /^case-([a-z0-9-]+)-(pl|en)\.html$/;
  const basename = () => location.pathname.split('/').pop() || 'index.html';

  function route() {
    const file = basename();
    const match = file.match(casePattern);
    const page = file === 'case-study.html' || match ? 'case-study' : file.replace(/(-en)?\.html$/, '');
    return {
      page,
      project: new URLSearchParams(location.search).get('project') || (match && match[1]),
      lang: match ? match[2] : file.endsWith('-en.html') ? 'en' : null
    };
  }
  function language() {
    const current = route();
    const supported = languages(current.page);
    const requested = new URLSearchParams(location.search).get('lang');
    if (supported.includes(requested)) return requested;
    if (current.lang) return current.lang;
    try {
      const saved = localStorage.getItem(current.page === 'pmclassics' ? 'pmc_lang' : 'lang');
      return supported.includes(saved) ? saved : 'pl';
    } catch { return 'pl'; }
  }
  function path(page, lang, project) {
    if (page === 'case-study') return caseFile(project, lang);
    if ((page === 'index' || page === 'projects') && lang === 'en') return page + '-en.html';
    return page + '.html' + (lang === 'pl' ? '' : '?lang=' + lang);
  }
  function canonical(page, lang, project) {
    return base + (page === 'index' && lang === 'pl' ? '' : path(page, lang, project));
  }
  function link(href, lang) {
    if (!href || href.startsWith('#') || /^(?:[a-z]+:|\/\/)/i.test(href)) return href;
    const url = new URL(href, base);
    const rootPath = new URL(base).pathname;
    if (!url.pathname.startsWith(rootPath)) return href;
    const relativePath = url.pathname.slice(rootPath.length);
    if (relativePath.includes('/')) return href;
    const file = relativePath || 'index.html';
    const match = file.match(casePattern);
    const page = match || file === 'case-study.html' ? 'case-study' : file.replace(/(-en)?\.html$/, '');
    if (page !== 'case-study' && !pages[page]) return href;
    const id = url.searchParams.get('project') || (match && match[1]);
    if (page === 'case-study' && !id) return href;
    url.searchParams.delete('project');
    url.searchParams.delete('lang');
    const result = new URL(path(page, lang, id), base);
    /* An explicit Polish link also wins over a saved English preference. */
    if (lang === 'pl' && page !== 'case-study') result.searchParams.set('lang', 'pl');
    for (const [key, value] of url.searchParams) result.searchParams.append(key, value);
    return result.pathname.split('/').pop() + result.search + url.hash;
  }
  function metadata(page, lang, project) {
    const entry = project
      ? [project.shortName[lang] + ' - ' + (project.seoTopic?.[lang] || (lang === 'pl' ? 'opis realizacji' : 'case study')), project.subtitle[lang]]
      : pages[page][lang];
    return {
      title: entry[0] + ' | ' + brand, description: entry[1],
      url: canonical(page, lang, project?.id), locale: { pl: 'pl_PL', en: 'en_GB', no: 'nb_NO' }[lang],
      alternates: Object.fromEntries(languages(page).map(code => [code, canonical(page, code, project?.id)]))
    };
  }
  function caseSchema(project, lang) {
    const seo = metadata('case-study', lang, project);
    return {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Article', headline: project.title[lang], description: seo.description, inLanguage: lang,
          mainEntityOfPage: seo.url, author: { '@type': 'Person', name: 'Artur Załuska' },
          publisher: { '@type': 'Organization', name: brand, url: base } },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: brand, item: canonical('index', lang) },
          { '@type': 'ListItem', position: 2, name: lang === 'pl' ? 'Projekty' : 'Projects', item: canonical('projects', lang) },
          { '@type': 'ListItem', position: 3, name: project.shortName[lang], item: seo.url }
        ] }
      ]
    };
  }
  function apply(page, lang, project) {
    const data = metadata(page, lang, project);
    document.documentElement.lang = lang;
    document.title = data.title;
    const content = (selector, value) => document.querySelector(selector)?.setAttribute('content', value);
    content('meta[name="description"]', data.description);
    content('meta[property="og:title"]', data.title);
    content('meta[name="twitter:title"]', data.title);
    content('meta[property="og:description"]', data.description);
    content('meta[name="twitter:description"]', data.description);
    content('meta[property="og:url"]', data.url);
    content('meta[property="og:locale"]', data.locale);
    document.querySelector('link[rel="canonical"]').href = data.url;
    Object.entries({ ...data.alternates, 'x-default': data.alternates.pl }).forEach(([code, url]) => {
      document.querySelector('link[hreflang="' + code + '"]').href = url;
    });
    if (project) document.querySelector('script[type="application/ld+json"]').textContent = JSON.stringify(caseSchema(project, lang));
  }
  function updateUrl(page, lang, project, push = false) {
    const url = new URL(path(page, lang, project), location.href);
    const previous = new URL(location.href);
    previous.searchParams.delete('project');
    previous.searchParams.delete('lang');
    previous.searchParams.forEach((value, key) => url.searchParams.append(key, value));
    if (!push) url.hash = previous.hash;
    if (url.href === location.href) return;
    try {
      if (push) history.pushState({ project }, '', url);
      else history.replaceState(history.state, '', url);
    } catch {
      /* Local file previews can forbid history writes across filenames. */
      if (location.protocol === 'file:') {
        if (push) location.assign(url.href);
        else location.replace(url.href);
      }
    }
  }
  return { route, language, link, metadata, caseSchema, apply, updateUrl };
})();
if (typeof module !== 'undefined' && module.exports) module.exports = web4bizSeo;
if (typeof window !== 'undefined') window.web4bizSeo = web4bizSeo;
