/**
 * web4biz.pl — Wspólne źródło danych projektów (Single Source of Truth)
 * Używane przez: index.html, projects.html oraz case-study.html.
 * Liczniki, filtry i Case Study korzystają z tej wspólnej bazy. Przy dodaniu
 * projektu dodaj również jego indywidualną kartę na stronie głównej i w archiwum.
 */
window.WEB4BIZ_DATA = {
  brand: {
    name: 'web4biz.pl',
    author: 'Artur Załuska (Archie)',
    email: 'artur.zaluska@gmail.com',
    linkedin: 'https://www.linkedin.com/in/artur-zaluska/',
    instagram: 'https://www.instagram.com/agilearchie/',
    
  },

  filters: [
    { id: 'b2b',   label: { pl: 'Strony B2B & SEO',     en: 'B2B & SEO Websites' } },
    { id: 'tools', label: { pl: 'Dodatkowe narzędzia',  en: 'Custom Web Tools' } },
    { id: 'react', label: { pl: 'Aplikacje React',      en: 'React Apps' } }
  ],

  projects: [
    {
      id: 'adremt2',
      num: '01',
      year: '2026',
      categories: ['b2b', 'tools'],
      url: 'https://adremt2.pl/index2.html',
      external: true,
      shortName: { pl: 'AD REM T2', en: 'AD REM T2' },
      cardTitle: {
        pl: 'AD REM T2 - Transport, logistyka i spedycja',
        en: 'AD REM T2 - Transport, Logistics & Freight'
      },
      cardDesc: {
        pl: 'Interaktywna mapa Europy pozwala wskazać miasto, sprawdzić dystans drogowy z Warszawy i wysłać sprecyzowane zapytanie do dyspozytora.',
        en: 'Interactive European vector map lets visitors pick a destination, calculate road distance from Warsaw, and send a pre-populated freight enquiry.'
      },
      liveLabel: { pl: 'Otwórz projekt', en: 'Open live site' },
      title: {
        pl: 'Transport, logistyka i spedycja (AD REM T2)',
        en: 'Transport, Logistics & Freight Forwarding (AD REM T2)'
      },
      subtitle: {
        pl: 'Strona transportowa B2B, która prowadzi klienta od wyboru miasta na mapie Europy do sprecyzowanego zapytania o przewóz.',
        en: 'A B2B transport platform taking visitors from selecting a city on the European map to a pre-populated freight enquiry.'
      },
      tag: { pl: '01 · Transport / TSL', en: '01 · Transport / Logistics' },
      pageType: { pl: 'Strona usługowa B2B + kalkulator trasy', en: 'B2B service site + route calculator' },
      keyFeatures: { pl: 'Mapa Europy SVG · wybór trasy · szybka wycena', en: 'SVG Europe map · route selection · quote flow' },
      duration: { pl: '3 tygodnie', en: '3 weeks' },
      technology: 'Vanilla JS · SVG · GeoJSON',
      stats: {
        pl: [
          ['3', 'Obszary usług transportowych i spedycyjnych'],
          ['MAPA SVG', 'Wybór miasta i kalkulacja trasy z Warszawy'],
          ['0 PLN', 'Stałych kosztów zewnętrznych API mapowych'],
          ['24/7', 'Bezpośredni kontakt z dyspozytorem']
        ],
        en: [
          ['3', 'Core transport & forwarding service pillars'],
          ['SVG MAP', 'Interactive city & route selection from Warsaw'],
          ['0 EUR', 'Recurring third-party map API fees'],
          ['24/7', 'Direct dispatcher contact workflow']
        ]
      },
      sections: {
        pl: [
          {
            heading: 'Usługi widoczne i uporządkowane od pierwszego ekranu',
            body: 'Strona porządkuje transport ekspresowy, spedycję drogową i logistykę kontraktową jako odrębne, łatwe do porównania ścieżki wejścia. Każda prowadzi prosto do parametrów potrzebnych przed zleceniem przewozu.'
          },
          {
            heading: 'Mapa Europy SVG jako interaktywne narzędzie wyboru trasy',
            body: 'Zamiast zaczynać od pustego formularza kontaktowego, klient wskazuje miasto docelowe na interaktywnej mapie Europy powyżej, sprawdza szacowany dystans oraz czas przejazdu (Bus Express lub FTL 24t) z bazy w Warszawie i jednym kliknięciem przechodzi do wyceny wybranej relacji.',
            bullets: [
              'Autorski silnik wektorowy SVG + GeoJSON działający natychmiast w przeglądarce bez opłat za Google Maps API.',
              'Automatyczne przeniesienie wybranej trasy do formularza zapytania ofertowego.',
              'Czytelna prezentacja transportu krajowego i międzynarodowego door-to-door.'
            ]
          },
          {
            heading: 'Odpowiedzi na kluczowe pytania spedycyjne przed kontaktem',
            body: 'Sekcje o flocie, ubezpieczeniu OCP, monitoringu GPS oraz całodobowym kontakcie z dyspozytorem budują zaufanie decydenta B2B i skracają czas potrzebny na sfinalizowanie zlecenia.'
          }
        ],
        en: [
          {
            heading: 'Services structured clearly from the first viewport',
            body: 'The platform organizes express transport, road freight forwarding, and contract logistics into distinct, easy-to-compare entry points, guiding dispatchers and B2B buyers directly to operational details.'
          },
          {
            heading: 'An interactive SVG Europe map built around route selection',
            body: 'Instead of facing a blank contact form, visitors pick a destination city on the interactive European map above, preview the road distance and transit ETA from the Warsaw hub, and proceed to an enquiry pre-populated with their route.',
            bullets: [
              'Custom SVG + GeoJSON vector engine running client-side with zero recurring Google Maps API costs.',
              'Seamless transfer of selected route parameters into the freight quote form.',
              'Clear breakdown of domestic and international door-to-door transport.'
            ]
          },
          {
            heading: 'Answering critical logistics questions before first contact',
            body: 'Dedicated sections covering fleet capabilities, carrier liability insurance (OCP), GPS tracking, and 24/7 dispatcher availability establish immediate operational trust.'
          }
        ]
      }
    },

    {
      id: 'ckadrem',
      num: '02',
      year: '2024–2025',
      categories: ['b2b'],
      url: 'https://ck-adrem.pl',
      external: true,
      shortName: { pl: 'CK Ad Rem', en: 'CK Ad Rem' },
      cardTitle: {
        pl: 'Ad Rem Centrum Księgowe',
        en: 'Ad Rem Accounting Centre'
      },
      cardDesc: {
        pl: 'Serwis porządkujący pełną księgowość, KPiR, kadry i ZUS z wyraźnym rozdzieleniem oferty dla firm oraz organizacji pozarządowych (NGO).',
        en: 'Corporate website structuring full bookkeeping, tax ledgers, and ZUS filings with dedicated conversion paths for businesses and NGOs.'
      },
      liveLabel: { pl: 'Otwórz projekt', en: 'Open live site' },
      title: {
        pl: 'Ad Rem Centrum Księgowe',
        en: 'Ad Rem Accounting Centre'
      },
      subtitle: {
        pl: 'Serwis korporacyjny porządkujący obsługę spółek, przedsiębiorców (KPiR) oraz fundacji i stowarzyszeń (NGO).',
        en: 'A corporate service website separating business accounting from the dedicated offer for foundations and associations (NGOs).'
      },
      tag: { pl: '02 · Finanse / Usługi B2B', en: '02 · Finance / B2B Services' },
      pageType: { pl: 'Serwis usługowy z segmentacją oferty', en: 'Service website with segmented funnels' },
      keyFeatures: { pl: 'Ścieżki B2B i NGO · KPiR i ZUS · Meta Pixel', en: 'B2B & NGO paths · bookkeeping · Meta Pixel' },
      duration: { pl: '4 tygodnie', en: '4 weeks' },
      technology: 'Bootstrap 5 · Meta Pixel · SEO',
      stats: {
        pl: [
          ['22 LATA', 'Doświadczenia rynkowego biura w Warszawie'],
          ['B2B + NGO', 'Osobna oferta dla firm oraz fundacji i stowarzyszeń'],
          ['KPiR / ZUS', 'Konkretna lista zadań przekazywanych biuru'],
          ['PIXEL', 'Analityka konwersji i pomiar interakcji']
        ],
        en: [
          ['22 YEARS', 'Of established accounting heritage in Warsaw'],
          ['B2B + NGO', 'Separate pathways for businesses and non-profits'],
          ['LEDGER / ZUS', 'Task-oriented breakdown of accounting services'],
          ['PIXEL', 'Full Meta Pixel conversion tracking integration']
        ]
      },
      sections: {
        pl: [
          {
            heading: 'Dwie wyraźne ścieżki przez ofertę: Biznes oraz NGO',
            body: 'Układ strony od samego początku rozróżnia obsługę firm (spółki prawa handlowego, jednoosobowe działalności) od specjalistycznej księgowości dla fundacji i stowarzyszeń. Dzięki temu każdy klient trafia od razu do właściwej sekcji.'
          },
          {
            heading: 'Lista usług opisana językiem konkretnych zadań',
            body: 'Zamiast ogólników strona precyzyjnie nazywa sprawy, które przedsiębiorca może powierzyć biuru - od wsparcia przy rejestracji działalności po pełne księgi, KPiR oraz bieżące rozliczenia ZUS i kadry.',
            bullets: [
              'Pomoc przy zakładaniu działalności gospodarczej i wyborze formy opodatkowania.',
              'Prowadzenie KPiR, pełnej księgowości spółek oraz ewidencji VAT.',
              'Kompleksowa obsługa kadr, płac i rozliczeń ZUS.',
              'Dedykowany moduł dla organizacji pozarządowych (dotacje, granty, sprawozdania).'
            ]
          },
          {
            heading: 'Wezwania do działania przy właściwej usłudze i pomiar Meta Pixel',
            body: 'Punkty kontaktu towarzyszą bezpośrednio opisom poszczególnych usług, a wdrożenie analityki Meta Pixel oraz optymalizacja kanoniczna wspierają pozyskiwanie klientów z kampanii.'
          }
        ],
        en: [
          {
            heading: 'Two distinct pathways through the service offer: Business & NGO',
            body: 'The information architecture separates corporate and sole-proprietor bookkeeping from specialized accounting for foundations and associations, eliminating decision friction.'
          },
          {
            heading: 'Services framed as concrete tasks handed over to experts',
            body: 'Rather than vague slogans, the website names the exact responsibilities clients can delegate - from company registration to tax books, payroll, and ZUS filings.',
            bullets: [
              'Guided support when registering a new business and selecting tax models.',
              'Full corporate accounting, revenue-and-expense ledgers (KPiR), and VAT records.',
              'End-to-end payroll, HR administration, and ZUS compliance.',
              'Dedicated non-profit & NGO accounting (grants, subsidies, statutory reporting).'
            ]
          },
          {
            heading: 'Contextual calls to action paired with Meta Pixel analytics',
            body: 'Consultation triggers sit directly beside relevant service descriptions, backed by Meta Pixel event tracking to measure campaign conversion efficiency.'
          }
        ]
      }
    },

    {
      id: 'pmclassics',
      num: '03',
      year: '2026',
      categories: ['tools'],
      url: 'pmclassics.html',
      external: false,
      shortName: { pl: 'PM Classics', en: 'PM Classics' },
      cardTitle: { pl: 'PM Classics', en: 'PM Classics' },
      cardDesc: {
        pl: 'Wielojęzyczna platforma renowacji klasyków z filtrowanym garażem, przelicznikiem walut i 3-etapowym briefem.',
        en: 'Trilingual classic vehicle restoration platform with a filterable garage, live currency switcher, and 3-step brief.'
      },
      liveLabel: { pl: 'Otwórz projekt', en: 'Open live site' },
      title: {
        pl: 'PM Classics - Renowacja i Kolekcja Klasyków',
        en: 'PM Classics - Classic Vehicle Restoration & Garage'
      },
      subtitle: {
        pl: 'Wielojęzyczna platforma łącząca wirtualny garaż klasyków, przelicznik trzech walut (EUR/PLN/NOK) i 3-etapowy brief renowacji.',
        en: 'A trilingual platform combining a filterable virtual garage, three-currency live pricing (EUR/PLN/NOK), and a 3-step restoration brief.'
      },
      tag: { pl: '03 · Klasyki / Dodatkowe narzędzia', en: '03 · Classic Automotive / Custom Tools' },
      pageType: { pl: 'Katalog pojazdów + konfigurator briefu', en: 'Vehicle inventory + project brief configurator' },
      keyFeatures: { pl: 'Wirtualny garaż · 3 waluty · brief 3-krokowy', en: 'Virtual garage · 3 currencies · 3-step brief' },
      duration: { pl: '3 tygodnie', en: '3 weeks' },
      technology: 'Tailwind CSS · Alpine.js · Multi-Currency',
      stats: {
        pl: [
          ['PL · EN · NO', 'Natychmiastowe przełączanie 3 języków'],
          ['3 WALUTY', 'Dynamiczny przelicznik EUR · PLN · NOK'],
          ['GARAŻ', 'Filtrowany stock aut i motocykli z lat 60./70.'],
          ['3 KROKI', 'Interaktywny brief wyceny i renowacji']
        ],
        en: [
          ['PL · EN · NO', 'Instant switching across 3 native languages'],
          ['3 CURRENCIES', 'Live price conversion in EUR · PLN · NOK'],
          ['GARAGE', 'Filterable 1960s/70s car & motorcycle stock'],
          ['3 STEPS', 'Interactive restoration & sourcing brief']
        ]
      },
      sections: {
        pl: [
          {
            heading: 'Katalog pojazdów zaprojektowany jak wirtualny garaż kolekcjonera',
            body: 'Prezentacja klasyków (Volvo Amazon, Opel Manta, Simca, DAF, Moto Guzzi, Lambretta) łączy autentyczne fotografie z filtrami statusu (dostępny od ręki / w trakcie renowacji). Klient jednym kliknięciem przechodzi od wybranego egzemplarza prosto do rozmowy o nim.'
          },
          {
            heading: 'Przelicznik walut i wielojęzyczność bez przeładowania strony',
            body: 'Ponieważ marka obsługuje kolekcjonerów z Polski, Europy Zachodniej i Norwegii, zmiana języka (PL/EN/NO) oraz waluty (EUR/PLN/NOK) odbywa się błyskawicznie w pamięci przeglądarki.',
            bullets: [
              'Pełna lokalizacja na język polski, angielski i norweski (Bokmål) z zapisem w localStorage.',
              'Dynamiczne przeliczanie cen całego garażu między EUR, PLN i NOK ze stabilną typografią (tabular-nums).',
              'Błyskawiczne filtrowanie pojazdów po kategorii i statusie bez przeładowań strony.'
            ]
          },
          {
            heading: '3-krokowy brief prowadzący przez projekt renowacji lub importu',
            body: 'Zamiast zwykłego pola tekstowego zastosowano interaktywny konfigurator: klient wybiera cel (zakup ze stocku / poszukiwanie w Europie / renowacja), typ pojazdu oraz budżet, co dostarcza właścicielowi warsztatu kompletny kontekst przed pierwszą rozmową.'
          }
        ],
        en: [
          {
            heading: 'An inventory that works like a collector’s virtual garage',
            body: 'Showcasing characterful 1960s and 70s European classics (Volvo Amazon, Opel Manta, Simca, DAF, Moto Guzzi, Lambretta) with instant category and build-status filters lets buyers move directly from a specific vehicle into an enquiry.'
          },
          {
            heading: 'Multi-currency pricing and localization without page reloads',
            body: 'Built for Polish, Western European, and Norwegian collectors, language (PL/EN/NO) and currency (EUR/PLN/NOK) switching happens instantaneously client-side.',
            bullets: [
              'Complete Polish, English, and Norwegian localization persisted in localStorage.',
              'Live conversion across EUR, PLN, and NOK using tabular numerals for zero layout shift.',
              'Instant client-side filtering across vehicle categories and build stages.'
            ]
          },
          {
            heading: 'A 3-step brief guiding restoration and sourcing enquiries',
            body: 'The interactive configurator captures the service type, vehicle category, and target budget before submission, ensuring every incoming lead contains actionable workshop context.'
          }
        ]
      }
    },

    {
      id: 'kubatura',
      num: '04',
      year: '2026',
      categories: ['b2b', 'tools'],
      url: 'kubatura.html',
      external: false,
      shortName: { pl: 'KUBATURA', en: 'KUBATURA' },
      cardTitle: {
        pl: 'KUBATURA - Relokacje Biur i Archiwów',
        en: 'KUBATURA - Corporate Office Relocation'
      },
      cardDesc: {
        pl: 'Strona B2B dla weekendowych relokacji biur z interaktywnym kalkulatorem kubatury (m³), masy (kg) i przekrojem kontenera 24 m³.',
        en: 'Weekend B2B office relocation platform with a live cargo volume (m³), payload (kg), and 24 m³ box-truck cutaway estimator.'
      },
      liveLabel: { pl: 'Otwórz projekt', en: 'Open live site' },
      title: {
        pl: 'KUBATURA - Relokacje Biur i Archiwów Bez Przestoju',
        en: 'KUBATURA - Zero-Downtime Corporate Office Relocation'
      },
      subtitle: {
        pl: 'Jak zamienić stresującą przeprowadzkę firmy w policzalną operację weekendową - i odsiać przypadkowe zapytania jeszcze przed wizją lokalną.',
        en: 'Turning a high-risk corporate move into a predictable weekend operation-and qualifying B2B leads before the first site survey.'
      },
      tag: { pl: '04 · Logistyka B2B / Kalkulator Floty', en: '04 · B2B Logistics / Fleet Estimator' },
      pageType: { pl: 'Platforma ofertowa B2B + estymator ładunku SVG', en: 'B2B service platform + SVG cargo estimator' },
      keyFeatures: { pl: 'Przekrój kontenera 24 m³ · pomiar m³ i kg', en: '24 m³ truck cutaway · m³ & kg tracking' },
      duration: { pl: '2 tygodnie', en: '2 weeks' },
      technology: 'Alpine.js · Interactive SVG · Schema.org',
      stats: {
        pl: [
          ['24 m³ / 3.5t', 'Przekrój kontenera SVG zapełniający się na żywo'],
          ['m³ vs KG', 'Równoległy pomiar objętości i limitu wagowego DMC'],
          ['1 MLN PLN', 'Polisa OCP i plombowane pojemniki RODO na pierwszym ekranie'],
          ['PT 17 → PN 08', 'Minutowy protokół relokacji z poniedziałkową asystą IT']
        ],
        en: [
          ['24 m³ / 3.5t', 'Live interactive SVG box-truck cutaway visualization'],
          ['m³ vs KG', 'Dual cargo volume and gross payload limit tracking'],
          ['1M PLN', 'All-risk carrier insurance & numbered GDPR seals upfront'],
          ['FRI 17 → MON 08', 'Minute-by-minute weekend protocol with Day-1 IT support']
        ]
      },
      sections: {
        pl: [
          {
            heading: 'Dlaczego strony firm przeprowadzkowych przegrywają kontrakty B2B',
            body: 'Większość firm przeprowadzkowych wygląda w sieci identycznie: stockowe zdjęcia uśmiechniętych panów z kartonem i ogólniki o „szybkim i tanim transporcie”. Tymczasem Office Manager albo Dyrektor Administracyjny, który przenosi 60-osobowe biuro, nie szuka taniego busa. Boi się jednego scenariusza: że w poniedziałek o 8:00 zespół usiądzie przy niepodłączonych monitorach, a segregatory kadrowe i księgowe zaginą między piętrami.'
          },
          {
            heading: 'Zero-Downtime zamiast obietnic - architektura zaufania od pierwszego ekranu',
            body: 'Zamiast lania wody o „wieloletnim doświadczeniu”, pierwszy ekran KUBATURY stawia twarde warunki operacyjne: start w piątek o 17:00, gotowość stanowisk w poniedziałek o 8:00, polisa OCP na 1 000 000 PLN oraz numerowane plomby bezpieczeństwa na pojemnikach RODO. Komunikat rozbity na dwa kontrastowe wersy - logistyczny pomarańcz i techniczny grafit - od razu oddziela relokacje korporacyjne od przeprowadzek mieszkań.'
          },
          {
            heading: 'Fizyka ładunku w SVG: dlaczego liczymy jednocześnie m³ oraz kg',
            body: 'W relokacjach biurowych o liczbie kursów rzadko decyduje sama objętość mebli. Metalowe szafy aktowe wypełnione papierem, szafy serwerowe RACK i kasy pancerne wyczerpują limit ładowności auta (3 500 kg DMC) na długo przed zapełnieniem 24 m³ paki. Zbudowałem interaktywny przekrój meblowozu w SVG, który reaguje na każde kliknięcie i wizualizuje oba ograniczenia naraz.',
            bullets: [
              'Presety jednym kliknięciem (Biuro 15 stanowisk, Piętro korporacyjne 50 stanowisk, Archiwum RODO + Serwerownia) pozwalają oszacować skalę operacji w 5 sekund.',
              'Uwzględnienie tarcia budynkowego: piętro załadunku, dostępność windy towarowej oraz dystans automatycznie korygują wielkość ekipy techników i budżet.',
              'Wizualizacja 15 modułów wewnątrz kontenera 4,8 m × 2,2 m × 2,3 m ostrzega zmianą koloru, gdy masa ładunku zbliża się do limitu DMC.'
            ]
          },
          {
            heading: 'Kwalifikacja zapytań przed pierwszym kontaktem',
            body: 'Zwykły formularz „Zapytaj o wycenę” generuje dziesiątki telefonów o pojedynczą kanapę. Tutaj przycisk pod kalkulatorem jednym kliknięciem przenosi gotową specyfikację (kubaturę, masę, liczbę kontenerów 24 m³ oraz pełną listę pozycji) prosto do formularza wizji lokalnej. Całość uzupełnia godzinowy harmonogram weekendowy z poniedziałkowym dyżurem Day-1 Support oraz dane Schema.org (MovingCompany + FAQPage) wspierające czytelne indeksowanie lokalnej oferty.'
          }
        ],
        en: [
          {
            heading: 'Why standard moving websites lose corporate contracts',
            body: 'Most moving company websites look identical: stock photos of smiling guys holding cardboard boxes and vague promises of “fast, affordable transport.” An Office or Facility Manager relocating a 60-person floor is not shopping for a cheap van. They are losing sleep over one risk: Monday at 8:00 AM arriving with unpatched workstations and misplaced HR or tax files.'
          },
          {
            heading: 'Operational guarantees over fluff - engineering trust above the fold',
            body: 'Instead of generic claims about “years of experience,” KUBATURA leads with hard operational SLAs: Friday 17:00 kickoff, Monday 08:00 desk readiness, 1,000,000 PLN all-risk carrier insurance, and numbered security seals on HDPE archive crates. Split dual-tone typography in safety orange and industrial graphite immediately signals commercial engineering rather than residential moving.'
          },
          {
            heading: 'Cargo physics in SVG: why the estimator tracks both m³ and kg',
            body: 'In office relocations, furniture volume is rarely the real bottleneck. Loaded steel filing cabinets, server RACKs, and fireproof safes hit a box truck’s 3,500 kg gross payload limit long before filling its 24 m³ cargo bay. I built a live SVG container cutaway that calculates both constraints simultaneously and animates load distribution in real time.',
            bullets: [
              'One-click presets (15-Desk Office, 50-Desk Corporate Floor, GDPR Archive + Server Room) benchmark project scale in five seconds.',
              'Building friction inputs-floor level, freight elevator access, and route distance-dynamically adjust crew headcount and fee estimates.',
              'Fifteen modular cargo blocks inside the 4.8m × 2.2m × 2.3m bay shift color to flag payload overload before a truck is ever dispatched.'
            ]
          },
          {
            heading: 'Qualifying enquiries before first contact',
            body: 'A blank “Request a Quote” form invites residential tyre-kickers. KUBATURA’s estimator transfers the itemized manifest-total volume, weight, required 24 m³ trips, and equipment list-straight into the site survey brief with a single click. Paired with a minute-by-minute weekend timeline (including Monday morning Day-1 floor support) and MovingCompany + FAQPage structured data to describe the local service clearly for search engines.'
          }
        ]
      }
    },

    {
      id: 'gemba',
      num: '05',
      year: '2026',
      categories: ['tools', 'react'],
      url: 'https://lean-guide-flow.base44.app',
      external: true,
      shortName: { pl: '玄 GEMBA', en: '玄 GEMBA' },
      cardTitle: {
        pl: '玄 GEMBA - Diagnostyka Lean & Six Sigma',
        en: '玄 GEMBA - Lean & Six Sigma Workspace'
      },
      cardDesc: {
        pl: 'Aplikacja tłumacząca problemy z pracy na straty procesowe (Muda, Mura, Muri), dobierająca właściwą z 47 metod Lean i prowadząca przez 5-etapowy plan działań.',
        en: 'Diagnostic web app translating workplace problems into process waste, matching them to 47 Lean/Six Sigma methods and a 5-phase action workspace.'
      },
      liveLabel: { pl: 'Otwórz aplikację', en: 'Open live app' },
      title: {
        pl: '玄 GEMBA - Diagnostyka Lean, TPS & Six Sigma',
        en: '玄 GEMBA - Lean, TPS & Six Sigma Diagnostic Workspace'
      },
      subtitle: {
        pl: 'Aplikacja webowa, która tłumaczy opis problemu z codziennej pracy na straty procesowe (Muda, Mura, Muri), dobiera właściwą z 47 metod Lean i prowadzi przez 5-fazowy plan usprawnień.',
        en: 'An interactive web workspace that translates plain-language workplace problems into process waste, selects the right tool from 47 Lean/Six Sigma methods, and guides execution across 5 phases.'
      },
      tag: { pl: '05 · Dodatkowe narzędzia / Lean & Six Sigma', en: '05 · Custom Web Tools / Lean & Six Sigma' },
      pageType: { pl: 'Aplikacja diagnostyczna + Workspace procesowy', en: 'Diagnostic web app + process workspace' },
      keyFeatures: { pl: 'Diagnoza problemu · 47 metod · 70+ pojęć · Workspace', en: 'Problem diagnosis · 47 methods · 70+ terms · Workspace' },
      duration: { pl: '3 tygodnie', en: '3 weeks' },
      technology: 'React · Tailwind CSS · Lean / TPS Engine',
      stats: {
        pl: [
          ['47 METOD', 'Skatalogowane narzędzia Lean, TPS i Six Sigma (VSM, SMED, 5S, DMAIC)'],
          ['70+ POJĘĆ', 'Praktyczny słownik japońskich terminów produkcyjnych i procesowych'],
          ['5 FAZ', 'Ustrukturyzowany plan wdrożenia i kontroli dla każdego problemu'],
          ['0 ŻARGONU', 'Diagnoza na podstawie naturalnego opisu objawów z miejsca pracy']
        ],
        en: [
          ['47 METHODS', 'Curated Lean, TPS & Six Sigma toolkit (VSM, SMED, 5S, DMAIC)'],
          ['70+ TERMS', 'Plain-language dictionary of Japanese shop-floor concepts'],
          ['5 PHASES', 'Structured observation, data, countermeasure & check roadmap'],
          ['NO JARGON', 'Diagnoses operational issues from plain-English descriptions']
        ]
      },
      sections: {
        pl: [
          {
            heading: 'Odwrócenie najczęstszego błędu: najpierw diagnoza problemu, potem narzędzie',
            body: 'Większość inicjatyw Lean kończy się niepowodzeniem, ponieważ zespół wybiera modne narzędzie zanim dobrze zrozumie źródło problemu. 玄 GEMBA odwraca ten proces: użytkownik opisuje własnymi słowami, co szwankuje na stanowisku pracy lub w procesie, a system sam identyfikuje rodzaj marnotrawstwa (Muda), zmienności (Mura) lub przeciążenia (Muri).'
          },
          {
            heading: 'Cztery zintegrowane moduły: Diagnose, Toolkit, Glossary i Workspace',
            body: 'Aplikacja łączy interaktywną diagnostykę z kompletną bazą wiedzy Systemu Produkcyjnego Toyoty (TPS) oraz Six Sigma, pozwalając przejść od zgłoszenia problemu do trwałego standardu w jednym miejscu.',
            bullets: [
              'Diagnose: Tłumaczenie symptomów i częstotliwości występowania problemu na konkretne przyczyny i rekomendowaną metodę.',
              'Toolkit (47 metod): Precyzyjny katalog metod (m.in. Value Stream Mapping, 5 Whys, SMED, Kanban, DMAIC, 5S) z określeniem czasu wdrożenia i zastosowania.',
              'Glossary (70+ pojęć): Przejrzysty słownik terminów japońskich (Kaizen, Muda, Jidoka, Heijunka, Poka-yoke, Andon) napisany prostym, praktycznym językiem.',
              'Workspace (5 faz planu): Interaktywna przestrzeń robocza prowadząca krok po kroku przez obserwację, zbieranie danych, wdrożenie środka zaradczego i weryfikację.'
            ]
          },
          {
            heading: 'Przełożenie praktyki Lean Green Belt na użyteczny produkt cyfrowy',
            body: 'Projekt stanowi bezpośrednie połączenie moich kompetencji procesowych (Lean Green Belt, Agile Delivery Lead) z inżynierią frontendową - pokazuje, jak złożoną metodykę operacyjną można zamknąć w intuicyjnym narzędziu webowym, które oszczędza czas liderów i zespołów.'
          }
        ],
        en: [
          {
            heading: 'Reversing why Lean fails: understand the problem before picking the tool',
            body: 'Process improvement fails when teams pick a trendy tool before diagnosing the root issue. 玄 GEMBA starts the other way around: users describe the symptom, frequency, and location in plain language, and the engine translates it into underlying waste (Muda), unevenness (Mura), or overburden (Muri).'
          },
          {
            heading: 'Four cohesive modules: Diagnose, Toolkit, Glossary, and Workspace',
            body: 'The platform bridges interactive root-cause diagnosis with a structured Toyota Production System (TPS) and Six Sigma reference library.',
            bullets: [
              'Diagnose: Matches plain-language workplace complaints to the specific method that addresses the root cause.',
              'Toolkit (47 methods): Actionable guides for VSM, 5 Whys, SMED, Kanban, DMAIC, and 5S with clear timeframes and category filters.',
              'Glossary (70+ terms): Shop-floor Japanese terminology (Kaizen, Muda, Jidoka, Heijunka, Poka-yoke) explained without academic fluff.',
              'Workspace (5 phases per plan): A step-by-step checklist covering observation, data collection, countermeasures, and standard verification.'
            ]
          },
          {
            heading: 'Turning Lean Green Belt domain expertise into software',
            body: 'Built at the intersection of operational consulting (Lean Green Belt, Agile Delivery) and frontend engineering, 玄 GEMBA demonstrates how complex B2B methodologies can be transformed into self-serve digital products.'
          }
        ]
      }
    },
{
  "id": "bdcacademy",
  "num": "06",
  "year": "2026",
  "categories": [
    "b2b"
  ],
  "url": "bdc-academy.html",
  "external": false,
  "shortName": {
    "pl": "BDC Academy",
    "en": "BDC Academy"
  },
  "cardTitle": {
    "pl": "BDC Academy — szkolenia dla BDC w automotive",
    "en": "BDC Academy — automotive BDC training"
  },
  "cardDesc": {
    "pl": "Programy szkoleniowe dla zespołów sprzedaży, serwisu, części, F&I oraz liderów BDC w salonach dealerskich.",
    "en": "Training programmes for dealer sales, service, parts, F&I and BDC leadership teams."
  },
  "liveLabel": {
    "pl": "Otwórz stronę",
    "en": "Open project"
  },
  "title": {
    "pl": "BDC Academy — szkolenia Automotive Contact Center",
    "en": "BDC Academy — Automotive Contact Centre Training"
  },
  "subtitle": {
    "pl": "Katalog specjalistycznych programów szkoleniowych dla działów BDC w branży dealerskiej.",
    "en": "A focused catalogue of specialist training programmes for dealership Business Development Centre teams."
  },
  "tag": {
    "pl": "06 · Automotive / B2B",
    "en": "06 · Automotive / B2B"
  },
  "pageType": {
    "pl": "Strona usługowa B2B + katalog szkoleń",
    "en": "B2B service website + training catalogue"
  },
  "keyFeatures": {
    "pl": "7 ścieżek szkoleniowych · czytelne grupowanie oferty",
    "en": "7 training tracks · structured offer navigation"
  },
  "duration": null,
  "technology": "HTML · CSS · JavaScript",
  "stats": {
    "pl": [
      [
        "7 ŚCIEŻEK",
        "Programy dla kluczowych ról w BDC"
      ],
      [
        "SPRZEDAŻ",
        "Obsługa leadów i domykanie wizyt"
      ],
      [
        "SERWIS",
        "Kontakt z klientem posprzedażowym"
      ],
      [
        "F&I",
        "Wsparcie procesu finansowania"
      ]
    ],
    "en": [
      [
        "7 TRACKS",
        "Programmes for key dealership BDC roles"
      ],
      [
        "SALES",
        "Lead handling and appointment conversion"
      ],
      [
        "SERVICE",
        "Customer contact after the sale"
      ],
      [
        "F&I",
        "Support for finance and insurance workflows"
      ]
    ]
  },
  "sections": {
    "pl": [
      {
        "heading": "Oferta uporządkowana według funkcji w salonie",
        "body": "Strona rozdziela szkolenia dla sprzedaży, serwisu, części, F&I, domykania wizyt oraz kierowników BDC, dzięki czemu odwiedzający szybciej odnajduje program powiązany z rolą i zadaniem zespołu."
      },
      {
        "heading": "Treść zaprojektowana dla konkretnego odbiorcy B2B",
        "body": "Zamiast ogólnego opisu szkoleń strona nazywa obszary pracy dealerów i przedstawia ofertę w języku automotive contact center. To daje dobrą bazę do dalszego rozwijania stron poszczególnych programów i kwalifikowania zapytań."
      },
      {
        "heading": "Szkolenie połączone z codziennym procesem",
        "body": "Programy są podzielone według ról i etapów kontaktu z klientem. Dzięki temu organizacja może dobrać szkolenie do konkretnego zadania zespołu, a nie tylko do ogólnej kategorii stanowiska."
      }
    ],
    "en": [
      {
        "heading": "An offer organised around dealership roles",
        "body": "The site separates training for sales, service, parts, F&I, appointment conversion and BDC managers so visitors can find the programme relevant to their team and responsibilities."
      },
      {
        "heading": "Content for a specific B2B audience",
        "body": "Instead of generic training language, the page names dealership workflows and frames the offer for automotive contact-centre teams. This creates a clear foundation for programme detail pages and better-qualified enquiries."
      },
      {
        "heading": "Training connected to daily workflows",
        "body": "The offer is divided by role and by stage of customer contact. This helps a dealership match a programme to a team’s actual responsibilities instead of selecting only by job-title category."
      }
    ]
  }
},
{
  "id": "hauhaus",
  "num": "07",
  "year": "2026",
  "categories": [
    "brand"
  ],
  "url": "hauhaus.html",
  "external": false,
  "shortName": {
    "pl": "HAUHAUS",
    "en": "HAUHAUS"
  },
  "cardTitle": {
    "pl": "HAUHAUS — kameralne psiedszkole",
    "en": "HAUHAUS — neighbourhood dog daycare"
  },
  "cardDesc": {
    "pl": "Warszawskie psiedszkole z ogrodem 800 m², podglądem na żywo i opieką behawiorysty oraz weterynarza.",
    "en": "A Warsaw dog daycare with an 800 m² garden, live camera access, and on-site behaviourist and veterinary support."
  },
  "liveLabel": {
    "pl": "Otwórz stronę",
    "en": "Open project"
  },
  "title": {
    "pl": "HAUHAUS — psiedszkole, ogród i opieka nad psami",
    "en": "HAUHAUS — dog daycare, garden and care"
  },
  "subtitle": {
    "pl": "Strona lokalnej usługi opieki nad psami, która pokazuje warunki pobytu, codzienny rytm i dostępne wsparcie specjalistów.",
    "en": "A local dog-care website presenting the daycare environment, daily routine and specialist support."
  },
  "tag": {
    "pl": "07 · Marka lokalna / Warszawa",
    "en": "07 · Local service / Warsaw"
  },
  "pageType": {
    "pl": "Strona lokalnej usługi + prezentacja oferty",
    "en": "Local service website + offer presentation"
  },
  "keyFeatures": {
    "pl": "Ogród 800 m² · podgląd na żywo · nosework",
    "en": "800 m² garden · live camera · nosework"
  },
  "duration": null,
  "technology": "HTML · CSS · Alpine.js",
  "stats": {
    "pl": [
      [
        "800 m²",
        "Ogród do aktywności na zewnątrz"
      ],
      [
        "NA ŻYWO",
        "Podgląd dla opiekunów"
      ],
      [
        "NOSEWORK",
        "Zajęcia węchowe"
      ],
      [
        "SPECJALIŚCI",
        "Behawiorysta i weterynarz na miejscu"
      ]
    ],
    "en": [
      [
        "800 m²",
        "Outdoor garden space"
      ],
      [
        "LIVE",
        "Camera access for owners"
      ],
      [
        "NOSEWORK",
        "Scent-work activities"
      ],
      [
        "SPECIALISTS",
        "On-site behaviourist and vet"
      ]
    ]
  },
  "sections": {
    "pl": [
      {
        "heading": "Najpierw odpowiedź na pytanie: czy mój pies będzie tu bezpieczny?",
        "body": "Strona od razu komunikuje charakter opieki, przestrzeń do aktywności oraz dostęp do podglądu na żywo. To pomaga opiekunowi ocenić miejsce przed pierwszym kontaktem."
      },
      {
        "heading": "Usługa pokazana przez konkretne elementy dnia",
        "body": "Ogród, nosework, świeża kuchnia oraz wsparcie behawiorysty i weterynarza zamieniają ogólną obietnicę opieki w czytelny obraz tego, czego można oczekiwać."
      },
      {
        "heading": "Lokalna marka z wyraźnym tonem",
        "body": "Lekki, przyjazny język i charakterystyczne określenie „psiedszkole” nadają stronie własny głos, przy jednoczesnym zachowaniu praktycznych informacji dla właściciela psa."
      }
    ],
    "en": [
      {
        "heading": "Answering the first question: will my dog be safe here?",
        "body": "The page quickly communicates the care model, outdoor space and live camera access, helping owners assess the daycare before getting in touch."
      },
      {
        "heading": "Making the service tangible",
        "body": "The garden, nosework, fresh kitchen and on-site behaviourist and vet turn a general promise of care into a clearer picture of what a dog’s day can include."
      },
      {
        "heading": "A local brand with a recognisable voice",
        "body": "The warm tone and distinctive naming give the service its own character while keeping practical information easy for dog owners to find."
      }
    ]
  }
},
{
  "id": "piec",
  "num": "08",
  "year": "2026",
  "categories": [
    "brand"
  ],
  "url": "https://rotating-baguette-637711.framer.app/",
  "external": true,
  "shortName": {
    "pl": "PIEC®",
    "en": "PIEC®"
  },
  "cardTitle": {
    "pl": "PIEC® — Niegrzeczny chleb",
    "en": "PIEC® — No-Nonsense Sourdough"
  },
  "cardDesc": {
    "pl": "Marka rzemieślniczej piekarni zakwasowej oparta na długiej fermentacji, prostych składnikach i odważnym tonie.",
    "en": "A craft sourdough bakery brand built around slow fermentation, simple ingredients and a bold voice."
  },
  "liveLabel": {
    "pl": "Otwórz projekt",
    "en": "Open live project"
  },
  "title": {
    "pl": "PIEC® — Niegrzeczny chleb",
    "en": "PIEC® — No-Nonsense Sourdough Bakery"
  },
  "subtitle": {
    "pl": "Marka piekarni rzemieślniczej, która opowiada o zakwasie, czasie i wypiekach z charakterem.",
    "en": "A craft bakery brand built around sourdough, time and baked goods with character."
  },
  "tag": {
    "pl": "08 · Marka / Żywność",
    "en": "08 · Brand / Food"
  },
  "pageType": {
    "pl": "Strona marki + katalog wypieków",
    "en": "Brand website + bakery range"
  },
  "keyFeatures": {
    "pl": "48 godzin fermentacji · 4 linie wypieków · FAQ",
    "en": "48-hour fermentation · 4 bakery lines · FAQ"
  },
  "duration": null,
  "technology": "Framer · Responsive CMS site",
  "stats": {
    "pl": [
      [
        "48 GODZIN",
        "Fermentacja zakwasu"
      ],
      [
        "4 LINIE",
        "Chleb, croissanty, brioche i bagietki"
      ],
      [
        "4 SKŁADNIKI",
        "Prosty skład komunikowany na stronie"
      ],
      [
        "1 GŁOS",
        "Wyrazista, konsekwentna osobowość marki"
      ]
    ],
    "en": [
      [
        "48 HOURS",
        "Sourdough fermentation"
      ],
      [
        "4 LINES",
        "Bread, croissants, brioche and baguettes"
      ],
      [
        "4 INGREDIENTS",
        "Simple ingredients highlighted on site"
      ],
      [
        "1 VOICE",
        "Distinctive, consistent brand personality"
      ]
    ]
  },
  "sections": {
    "pl": [
      {
        "heading": "Marka zbudowana wokół własnego charakteru",
        "body": "Hasło „Niegrzeczny chleb” od razu ustawia ton. Mocna typografia, kontrast i krótkie komunikaty sprawiają, że marka jest łatwa do zapamiętania."
      },
      {
        "heading": "Proces rzemieślniczy jako główna opowieść",
        "body": "Długi czas fermentacji i ręczna praca są pokazane jako konkretne etapy: wyrabianie, fermentacja, pieczenie i przełamanie bochenka. Strona przekłada sposób produkcji na historię marki."
      },
      {
        "heading": "Wypieki mają własne nazwy i role",
        "body": "Buntownik, Croissant Chaos, Brioche Baby i Bagietki Rebel porządkują ofertę w cztery rozpoznawalne linie. FAQ odpowiada na podstawowe pytania o zakwas, skład i asortyment."
      }
    ],
    "en": [
      {
        "heading": "A brand with a clear point of view",
        "body": "The “Niegrzeczny chleb” (“naughty bread”) line sets the tone immediately. Strong typography, contrast and concise copy make the identity easy to recognise."
      },
      {
        "heading": "The craft process becomes the story",
        "body": "Long fermentation and hands-on baking are presented as clear stages: kneading, fermentation, baking and breaking the loaf. The site turns the process into the brand narrative."
      },
      {
        "heading": "A bakery range with its own character",
        "body": "Buntownik, Croissant Chaos, Brioche Baby and Bagietki Rebel organise the offer into four memorable lines. The FAQ answers basic questions about sourdough, ingredients and products."
      }
    ]
  }
}
  ]
};
