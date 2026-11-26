/* One set of editable illustrations for the home, archive and case study pages.
   Only the trusted strings defined here are interpolated into the markup. */
(() => {
  const row = (left, right) => `<div class="pv-top"><span>${left}</span><span>${right}</span></div>`;
  const pairs = (items) => items.map(([label, value]) =>
    `<div><b>${label}</b><small>${value}</small></div>`
  ).join('');

  function route(t) {
    const hub = t('Warszawa / baza', 'Warsaw / hub').toUpperCase();
    return `<div class="pv-route-map">
      ${row(t('Europa / kierunki', 'Europe / routes'), hub)}
      <svg viewBox="0 0 760 490" aria-hidden="true">
                  <path class="pv-map-land" d="m101 76 41-25 34 8 24-23 39 12 28 31 34-8 30 18 27-9 30 21 41-12 30 22 43-5 24 23 43-2 23 29 40 14 13 32-19 25-35 7-5 30-28 15-12 34-34 12-15 32-39 6-20 27-37-4-20-26-31-5-18-24-36-2-19-24-31-4-13-24-32-14-10-25-32-13-15-28-35-9-9-28-31-6-12-24 20-26Z"/>
                  <path class="pv-map-land pv-map-land-secondary" d="m73 256 38 7 28 27-10 34-33 20-30-21-9-34Zm209 172 31-22 35 9 8 22-27 21-34-7Zm286 24 32-18 25 10-12 25-31 8Zm-75-436 34-13 30 15-13 25-32-4Z"/>
                  <g class="pv-map-borders">
                    <path d="m199 79 21 48 39 22 25-19 34 26-9 47 28 26-10 37-31 17 2 41-32 19-17 42"/>
                    <path d="m263 79 20 52 38 25 37-12 26 29-8 37 34 22-9 34-36 17 1 43-28 22"/>
                    <path d="m344 91 11 42 39 23 19 39-22 30 27 25-7 39 28 26-17 39"/>
                    <path d="m419 103 20 39 34 16 15 38-18 33 25 27-6 39 31 18"/>
                    <path d="m493 105 18 46 36 13 15 40-20 26 26 27-12 40 26 20"/>
                    <path d="m568 126 23 37 36 11 15 31-16 33 27 31-16 37"/>
                  </g>
                  <path class="pv-map-poland" d="m480 193 30-14 34 8 18 25 31 7 7 33-17 25 5 31-26 20-31-8-20 13-27-15-17-25-24-8-5-27 18-20Z"/>
                  <g class="pv-map-cities">
                    <circle cx="534" cy="235" r="7"/><circle cx="367" cy="252" r="6"/><circle cx="284" cy="287" r="6"/>
                    <circle cx="412" cy="353" r="6"/><circle cx="225" cy="226" r="6"/><circle cx="319" cy="238" r="6"/>
                  </g>
                  <circle class="pv-map-start" cx="534" cy="235" r="10"/>
                  <text class="pv-map-label" x="550" y="240">${hub}</text>
                </svg>
    </div>
    <div class="pv-route-copy">
      <small>${t('Podgląd trasy', 'Route preview')}</small>
      <strong>${t('Dokąd jedziemy?', 'Where to?')}</strong>
      <p>${t('Wybierz miasto docelowe na mapie i sprawdź trasę z Warszawy.', 'Choose a destination on the map to see the route from Warsaw.')}</p>
      <small class="pv-highlight">${t('Dyspozytor 24/7', 'Dispatch available 24/7')}</small>
    </div>`;
  }

  function kubatura(t) {
    return `${row('<b>B2B</b> KUBATURA.', t('24 m³ / 3,5 t', '24 m³ / 3.5 t'))}
      <strong class="pv-truck-title"><em>${t('Przeprowadzka biura w weekend.', 'Move your office over the weekend.')}</em><br>${t('W poniedziałek wracacie do pracy.', 'Back at your desks on Monday.')}</strong>
      <div class="pv-truck-panel"><svg viewBox="0 0 460 114" aria-hidden="true">
                <line x1="6" y1="101" x2="454" y2="101" stroke="#cbd5e1" stroke-width="2"/>
                <path d="M10 99 L42 84 H54 V90 L16 101 Z" fill="#ea580c"/>
                <rect x="22" y="69" width="17" height="14" rx="2" fill="#ea580c"/>
                <line x1="25" y1="73" x2="36" y2="73" stroke="#ffffff" stroke-width="1.5"/>
                <rect x="54" y="8" width="272" height="82" rx="3" fill="#f8f9fb" stroke="#181a1f" stroke-width="2"/>
                <g stroke="#e2e8f0" stroke-width="1">
                  <line x1="108" y1="8" x2="108" y2="90"/>
                  <line x1="162" y1="8" x2="162" y2="90"/>
                  <line x1="216" y1="8" x2="216" y2="90"/>
                  <line x1="270" y1="8" x2="270" y2="90"/>
                  <line x1="54" y1="35" x2="326" y2="35"/>
                  <line x1="54" y1="63" x2="326" y2="63"/>
                </g>
                <rect x="275" y="66" width="46" height="21" rx="2" fill="#181a1f"/>
                <rect x="221" y="66" width="46" height="21" rx="2" fill="#ea580c"/>
                <rect x="167" y="66" width="46" height="21" rx="2" fill="#181a1f"/>
                <rect x="113" y="66" width="46" height="21" rx="2" fill="#181a1f"/>
                <rect x="59" y="66" width="46" height="21" rx="2" fill="#ea580c"/>
                <rect x="275" y="39" width="46" height="21" rx="2" fill="#ea580c"/>
                <rect x="221" y="39" width="46" height="21" rx="2" fill="#181a1f"/>
                <rect x="167" y="39" width="46" height="21" rx="2" fill="#ea580c"/>
                <rect x="113" y="39" width="46" height="21" rx="2" fill="#181a1f"/>
                <rect x="275" y="12" width="46" height="20" rx="2" fill="#181a1f"/>
                <rect x="221" y="12" width="46" height="20" rx="2" fill="#181a1f"/>
                <path d="M330 90 H426 V58 L400 28 H330 Z" fill="#181a1f"/>
                <path d="M344 36 H392 L412 56 H344 Z" fill="#334155"/>
                <rect x="330" y="66" width="96" height="6" fill="#ea580c"/>
                <circle cx="108" cy="95" r="12" fill="#181a1f" stroke="#ffffff" stroke-width="2.5"/>
                <circle cx="108" cy="95" r="4.5" fill="#94a3b8"/>
                <circle cx="384" cy="95" r="12" fill="#181a1f" stroke="#ffffff" stroke-width="2.5"/>
                <circle cx="384" cy="95" r="4.5" fill="#94a3b8"/>
              </svg>
        ${row(t('Ładunek', 'Load') + ' · ' + t('19,8 m³ (83%)', '19.8 m³ (83%)'), t('Masa · 1 980 kg', 'Weight · 1,980 kg'))}
      </div>`;
  }

  function gemba(t) {
    const situations = [
      t('Przestoje na każdej zmianie', 'Stops on every shift'),
      t('Zamówienia czekają tygodniami', 'Orders take weeks to ship'),
      t('Ten sam defekt wraca', 'The same defect keeps returning')
    ];
    return `<div class="pv-gemba-story">
      <small><i></i>${t('Myślenie Lean', 'Lean thinking')} · TPS · Six Sigma</small>
      <div><strong>${t('Opisz problem.', 'Describe the problem.')}<em>${t('Znajdź metodę.', 'Get the method.')}</em></strong>
        <p>${t('Opisz, co nie działa w pracy. GEMBA dobierze metodę i przeprowadzi Cię przez kolejne kroki.', 'Describe what goes wrong at work. GEMBA suggests a method and walks you through the next steps.')}</p></div>
      <div class="pv-gemba-stats">${pairs([['47',t('Metod','Methods')],['70+',t('Pojęć','Terms')],['5',t('Etapów','Steps')]])}</div>
    </div>
    <div class="pv-gemba-form">
      ${row(t('Opisz problem', 'Describe the problem'), t('Dyktuj', 'Dictate'))}
      <div class="pv-gemba-input"><span>${t('Co nie działa w pracy?', 'What is going wrong at work?')}</span><span>${t('Gdzie to się dzieje? (opcjonalnie)', 'Where does it happen? (optional)')}</span></div>
      <div class="pv-gemba-options"><small>${t('Wybierz przykład', 'Try one')}</small><div>${situations.map(s => `<span>${s}</span>`).join('')}</div></div>
      <div class="pv-gemba-submit"><span>${t('Pisz własnymi słowami.', 'Use your own words.')}</span><b>${t('Dobierz metodę', 'Find my method')}</b></div>
    </div>`;
  }

  function piec(t) {
    const range = [
      [t('Buntownik', 'The Rebel'), t('Na zakwasie', 'Sourdough')],
      ['Croissant Chaos', t('Maślany', 'Buttery')],
      ['Brioche Baby', t('Słodka', 'Sweet')],
      [t('Bagietki Rebel', 'Rebel Baguettes'), t('Chrupiące', 'Crusty')]
    ];
    return `<div class="pv-top pv-piec-head"><b><img src="assets/piec-logo.png" alt="">PIEC®</b>
      <small>${t('Piekarnia dla niepokornych', 'Bakery for the unruly')}</small></div>
      <div class="pv-piec-copy"><small>${t('Rzemieślnicza piekarnia na zakwasie', 'Artisan sourdough bakery')}</small>
        <strong>${t('Niegrzeczny', 'No-nonsense')}<br>${t('chleb.', 'sourdough.')}</strong>
        <p>${t('Bez skrótów. Po prostu dobry chleb.', 'No shortcuts. Just seriously good bread.')}</p></div>
      <div class="pv-piec-range">${pairs(range)}</div>`;
  }

  function accounting(t) {
    return `${row('Ad Rem · ' + t('Centrum księgowe', 'Accounting centre'), t('Warszawa', 'Warsaw'))}
      <div class="pv-ck-copy"><small>B2B &amp; NGO</small>
      <strong>${t('Księgowość, która pozwala Ci', 'Accounting that lets you')} <em>${t('spać spokojnie.', 'sleep soundly.')}</em></strong>
      <p>${t('Obsługa przedsiębiorców, spółek, fundacji i stowarzyszeń.', 'Bookkeeping for sole traders, companies, foundations and associations.')}</p></div>
      <div class="pv-ck-actions"><b>${t('Umów konsultację', 'Book a consultation')}</b><span>${t('Oferta dla NGO', 'For non-profits')}</span></div>`;
  }

  function classics(t) {
    return `${row('PM Classics', 'PL · EN · NO')}
      <div class="pv-pm-copy"><small>${t('Sztuka renowacji', 'The art of restoration')}</small>
        <strong>${t('Drugie życie', 'A new life for')}<br><em>${t('klasyków.', 'the classics.')}</em></strong></div>
      ${row(t('Wirtualny garaż', 'Virtual garage'), 'EUR · PLN · NOK')}`;
  }

  function academy(t) {
    return `${row('BDC Academy', t('Motoryzacja', 'Automotive'))}
      <div class="pv-bdc-copy"><small>${t('Szkolenia dla dealerów', 'Dealership training')}</small>
        <strong>${t('Zbuduj', 'Build')}<br>${t('lepsze', 'better')} <em>BDC.</em></strong></div>
      ${row(t('Sprzedaż · Serwis · Finanse', 'Sales · Service · Finance'), 'BDC Academy')}`;
  }

  function daycare(t) {
    return `${row('Hauhaus', t('Warszawa', 'Warsaw'))}
      <div class="pv-hau-copy"><small>${t('Psiedszkole z ogrodem', 'Dog daycare with a garden')}</small>
        <strong>${t('Spokojna głowa.', 'Peace of mind.')}<br><em>${t('Szczęśliwy pies.', 'Happy dog.')}</em></strong></div>
      ${row(t('Ogród · 800 m²', 'Garden · 800 m²'), t('Podgląd na żywo', 'Live camera'))}`;
  }

  function moreDough(t) {
    const asset = 'demos/more-dough/assets/img/blacha/';
    const pieces = ['pomidor', 'pepperoni', 'ziemniak', 'pomidor'];
    const options = [t('Pomidor, mordo', 'Tomato & basil'), 'Pepperoni', t('Ziemniak w mundurku', 'Potato & rosemary')];
    return `<div class="pv-dough-copy">
        <small>More Dough</small>
        <strong>${t('Mordo, złóż blachę.', 'Build your pizza tray.')}</strong>
        <div class="pv-dough-options">${options.map((name, index) =>
          `<div><span>${name}</span><b>${[14, 18, 16][index]} zł</b></div>`).join('')}</div>
      </div>
      <div class="pv-dough-tray">
        <img src="${asset}okienko-720.webp" alt="" width="720" height="720" loading="lazy">
        ${pieces.map((name) => `<img class="pv-dough-piece" src="${asset}${name}-384.webp" alt="" width="384" height="384" loading="lazy">`).join('')}
      </div>`;
  }

  const render = new Map([
    ['adremt2', route], ['ckadrem', accounting], ['pmclassics', classics],
    ['kubatura', kubatura], ['gemba', gemba], ['bdcacademy', academy],
    ['hauhaus', daycare], ['piec', piec], ['more-dough', moreDough]
  ]);

  window.projectPreview = function projectPreview(id, language = 'pl') {
    const draw = render.get(id);
    if (!draw) return '';
    const lang = language === 'en' ? 'en' : 'pl';
    const translate = (pl, en) => lang === 'en' ? en : pl;
    return `<div class="pv pv-${id}" lang="${lang}" aria-hidden="true">
      <div class="pv-canvas">${draw(translate)}</div>
    </div>`;
  };
})();
