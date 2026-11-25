/*
 * Run "node tools/build-pages.cjs" after editing a base page or project data.
 * The locale and case pages are ordinary HTML, including their search metadata.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const write = (file, content) => fs.writeFileSync(path.join(root, file), content);
const seo = require('../seo.js');
const dataContext = { window: {} };
const projectData = read('projects-data.js');
const projectDataVersion = createHash('sha256').update(projectData).digest('hex').slice(0, 12);
vm.runInNewContext(projectData, dataContext);
vm.runInNewContext(read('project-previews.js'), dataContext);
const projects = dataContext.window.WEB4BIZ_DATA.projects;
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&gt;', '>').replaceAll('&lt;', '<');
const fileName = (id, lang) => 'case-' + id + '-' + lang + '.html';

function head(html, page, lang, project) {
  const data = seo.metadata(page, lang, project);
  const tags = [
    ['property', 'og:site_name', 'web4biz.pl'], ['property', 'og:type', project ? 'article' : 'website'],
    ['name', 'description', data.description], ['property', 'og:title', data.title],
    ['property', 'og:description', data.description], ['property', 'og:url', data.url],
    ['property', 'og:locale', data.locale], ['name', 'twitter:card', 'summary'],
    ['name', 'twitter:title', data.title], ['name', 'twitter:description', data.description]
  ];
  const alternates = { ...data.alternates, 'x-default': data.alternates.pl };
  const replacement = [
    '<title>' + esc(data.title) + '</title>', '<link rel="canonical" href="' + esc(data.url) + '">',
    ...Object.entries(alternates).map(([code, url]) => '<link rel="alternate" hreflang="' + code + '" href="' + esc(url) + '">'),
    ...tags.map(([attr, key, value]) => '<meta ' + attr + '="' + key + '" content="' + esc(value) + '">')
  ].join('\n  ');
  html = html.replace(/<html lang="[^"]+"/, '<html lang="' + lang + '"')
    .replace(/^\s*<meta (?:property="og:[^"]+"|name="(?:description|twitter:[^"]+)")[^>]*>/gm, '')
    .replace(/^\s*<link rel="(?:canonical|alternate)"[^>]*>/gm, '')
    .replace(/<title[^>]*>[\s\S]*?<\/title>/, () => replacement);
  if (project || page === 'projects') {
    const graph = project ? seo.caseSchema(project, lang) : {
      '@context': 'https://schema.org', '@type': 'CollectionPage', name: data.title,
      description: data.description, inLanguage: lang, url: data.url,
      mainEntity: { '@type': 'ItemList', itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem', position: i + 1, name: p.cardTitle[lang], url: seo.metadata('case-study', lang, p).url
      })) }
    };
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      () => '<script type="application/ld+json">\n' + JSON.stringify(graph, null, 2) + '\n  </script>');
  }
  return html.replace(/<head>[\s\S]*?<\/head>/, fragment => fragment.replace(/\n{3,}/g, '\n\n'));
}

function layers(template, page) {
  // Share the original layout and page controller among the generated pages.
  const asset = 'assets/' + page;
  let controller;
  fs.mkdirSync(path.join(root, 'assets'), { recursive: true });
  template = template.replace(/<style>([\s\S]*?)<\/style>/, (_, css) => {
    write(asset + '.css', css.trim() + '\n');
    return '<link rel="stylesheet" href="' + asset + '.css">';
  });
  template = template.replace(/<script>([\s\S]*?)<\/script>/g, (tag, js) => {
    if (!/function (web4bizApp|projectsPageApp|caseStudyApp)\(\)/.test(js)) return tag;
    controller = js;
    write(asset + '.js', js.trim() + '\n');
    return '<script src="' + asset + '.js"></script>';
  });
  return { template, controller };
}

function contextFor(controller, page, lang, project) {
  const rootApp = { index: 'web4bizApp', projects: 'projectsPageApp', 'case-study': 'caseStudyApp' }[page];
  const globals = {
    window: dataContext.window, document: { documentElement: { dataset: {theme: 'editorial'} }, addEventListener() {} },
    localStorage: { getItem() { return null; } },
    web4bizSeo: { ...seo, language: () => lang, route: () => ({ project: project?.id }) }
  };
  vm.runInNewContext(controller, globals);
  return vm.createContext(Object.assign({}, globals[rootApp](), { lang, currentCase: project }));
}

const startTag = String.raw`<([a-z][\w-]*)((?:"[^"]*"|'[^']*'|[^'">])*)>`;
// Static text and static hrefs stay readable when a crawler does not execute Alpine.
function fill(html, page, lang, scope) {
  function textBindings(source) {
    return source.replace(new RegExp(startTag + String.raw`([^<]*)<\/\1>`, 'gi'), (full, tag, attrs) => {
      const expression = attrs.match(/\sx-text="([^"]+)"/);
      if (!expression) return full;
      try {
        const value = vm.runInContext(decode(expression[1]), scope);
        if (typeof value !== 'string' && typeof value !== 'number') return full;
        return '<' + tag + attrs + '>' + esc(value) + '</' + tag + '>';
      } catch { return full; } // Loop-local bindings are rendered by Alpine.
    });
  }
  html = html.replace(/<article\b[^]*?<\/article>/g, block => {
    const match = block.match(/item\.id === '([\w-]+)'/);
    if (!match) return block;
    scope.project = projects.find(p => p.id === match[1]);
    const filled = textBindings(block).replace(/(x-html="projectPreview\(project.id, lang\)">)[\s\S]*?<\/a>/,
      (_, opening) => opening + dataContext.window.projectPreview(scope.project.id, lang) + '</a>');
    delete scope.project;
    return filled;
  });
  html = textBindings(html);
  return html.replace(/(\shref=")([^"]+)(")/g, (attr, a, raw, b) => {
    const url = decode(raw);
    if (!/^(?:index(?:-en)?\.html|projects(?:-en)?\.html|case-study\.html|case-[\w-]+-(?:pl|en)\.html|kubatura\.html|hauhaus\.html|pmclassics\.html|bdc-academy\.html)(?:[?#]|$)/.test(url)) return attr;
    return a + esc(seo.link(url, lang)) + b;
  });
}

function caseFallback(html, project, lang) {
  const sections = project.sections[lang].map((section, i) =>
    '<section id="case-section-' + (i + 1) + '"><h2>' + esc(section.heading) + '</h2><p>' + esc(section.body) + '</p></section>').join('\n');
  const base = dataContext.window.projectPreview(project.id, lang);
  return html.replace(/(x-html="projectPreview\(projectId, lang\)">)<\/div>/, (_, tag) => tag + base + '</div>')
    .replace('<div class="case-prose">', '<div class="case-prose"><noscript>' + sections + '</noscript>')
    .replace(/(<a )(:href="[^"]*nextProjectId[^"]*")/, (_, start, bind) => {
      const i = projects.indexOf(project);
      return start + 'href="' + fileName(projects[(i + 1) % projects.length].id, lang) + '" ' + bind;
    });
}

for (const page of ['index', 'projects', 'case-study']) {
  const original = read(page + '.html').replace(/src="projects-data\.js(?:\?v=[a-f0-9]+)?"/g,
    'src="projects-data.js?v=' + projectDataVersion + '"');
  const { template, controller } = layers(original, page);
  if (page === 'case-study') {
    for (const project of projects) {
      for (const lang of ['pl', 'en']) {
        const scope = contextFor(controller, page, lang, project);
        const html = fill(head(template, page, lang, project), page, lang, scope);
        write(fileName(project.id, lang), caseFallback(html, project, lang));
      }
    }
    // The historical query route remains a functioning entry point.
    write(page + '.html', head(original, page, 'pl', projects[0]));
  } else {
    for (const lang of ['pl', 'en']) {
      const html = lang === 'pl' ? original : template;
      const scope = contextFor(controller, page, lang);
      let result = fill(head(html, page, lang), page, lang, scope);
      write(page + (lang === 'en' ? '-en' : '') + '.html', result);
    }
  }
}
