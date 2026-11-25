document.addEventListener('DOMContentLoaded', () => {
      if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      document.documentElement.classList.add('motion-ready');
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));
    });

    function web4bizApp() {
      const shared = window.WEB4BIZ_DATA || {};
      const sharedProjects = shared.projects || [];
      const projectsCount = sharedProjects.length || 5;

      return {
        direction: document.documentElement.dataset.theme,
        lang: web4bizSeo.language(),
        mobileMenuOpen: false,
        emailCopied: false,
        projectsCount: projectsCount,

        selectedTier: 'tools',
        form: { name: '', email: '', message: '', honey: '' },
        formStatus: 'idle',
        formFeedback: '',

        tiers: [
          {
            id: 'seo-landing',
            badge: { pl: 'PAKIET SZYBKI START', en: 'FAST START TIER' },
            timeline: { pl: 'Czas: ~2 tygodnie', en: 'Timeline: ~2 weeks' },
            title: {
              pl: 'Nowoczesna Strona B2B z SEO',
              en: 'High-Performance B2B Website & SEO'
            },
            desc: {
              pl: 'Szybka, profesjonalna strona ofertowa, która jasno i bez żargonu tłumaczy Twoje usługi, buduje wiarygodność i sprawia, że klienci mogą znaleźć Twoją ofertę i szybko ją zrozumieć.',
              en: 'A fast, high-trust service website that clearly explains your offer, builds instant credibility, and makes sure clients can find your offer and understand it quickly.'
            },
            bullets: {
              pl: [
                'Przejrzysta struktura oferty dopasowana do tego, jak kupuje Twój klient',
                'Techniczne podstawy SEO, uporządkowana treść i metadane',
                'Szybki, wygodny kontakt i analityka zapytań ułatwiająca domykanie sprzedaży'
              ],
              en: [
                'Clear service structure designed around how your buyers make decisions',
                'Technical SEO foundations, structured content and metadata',
                'Frictionless contact flows and inquiry tracking to help close deals faster'
              ]
            },
            example: { pl: 'Wzór: ck-adrem.pl', en: 'Ref: ck-adrem.pl' }
          },
          {
            id: 'tools',
            badge: { pl: 'NAJCZĘŚCIEJ WYBIERANY', en: 'MOST POPULAR' },
            timeline: { pl: 'Czas: 2–3 tygodnie', en: 'Timeline: 2–3 weeks' },
            title: {
              pl: 'Strona B2B + Dedykowane Narzędzie Online',
              en: 'B2B Website + Custom Interactive Tool'
            },
            desc: {
              pl: 'Strona, która nie tylko prezentuje ofertę, ale realnie wyręcza Twój zespół w codziennej pracy. Projektuję moduł szyty pod Twoją branżę - od estymatora kosztów i mapy tras po konfigurator usługi - dzięki czemu klient sam dobiera parametry, a Ty dostajesz gotowe do domknięcia zapytanie.',
              en: 'A website that goes beyond a static brochure to actively save your team hours every week. I build an interactive module tailored to your business-from a cost estimator or route map to a service configurator-so buyers define their needs upfront and you receive ready-to-close enquiries.'
            },
            bullets: {
              pl: [
                'Pełny zakres pakietu Start (szybka strona ofertowa, SEO i widoczność w AI)',
                'Narzędzie dopasowane do Twojego procesu (np. wycena, dobór wariantu, mapa, przelicznik)',
                'Koniec z ogólnikowymi mailami - klient wysyła zapytanie z kompletem konkretnych danych'
              ],
              en: [
                'Everything in the Fast Start tier (high-speed B2B site, SEO foundations and clear content)',
                'A bespoke tool built around your workflow (estimator, route map, matcher, or switcher)',
                'No more vague enquiries - buyers submit requests pre-filled with exact specifications'
              ]
            },
            example: { pl: 'Wzór: KUBATURA / adremt2.pl', en: 'Ref: KUBATURA / adremt2.pl' }
          },
          {
            id: 'react-app',
            badge: { pl: 'SYSTEM PREMIUM', en: 'CUSTOM SYSTEM' },
            timeline: { pl: 'Czas: 3–4 tygodnie', en: 'Timeline: 3–4 weeks' },
            title: {
              pl: 'Platforma Wielojęzyczna lub Aplikacja Webowa',
              en: 'Multilingual Platform or Custom Web App'
            },
            desc: {
              pl: 'Rozwiązanie dla firm, którym zwykła strona ofertowa już nie wystarcza. Buduję rozbudowane platformy na rynki zagraniczne oraz dedykowane aplikacje doradcze, które prowadzą klienta krok po kroku do decyzji - bez angażowania handlowca na starcie.',
              en: 'Built for businesses that have outgrown a standard service website. I engineer scalable multi-market platforms and interactive advisory web apps that guide buyers step-by-step to a decision-before a sales rep ever picks up the phone.'
            },
            bullets: {
              pl: [
                'Obsługa wielu języków i walut na jednej platformie (gotowość na eksport)',
                'Interaktywne katalogi, bazy wiedzy lub narzędzia diagnostyczne dla klientów',
                'Płynne działanie na każdym urządzeniu i architektura gotowa na dalszy rozwój'
              ],
              en: [
                'Multi-language and multi-currency support in one platform (export-ready)',
                'Interactive catalogs, knowledge bases, or self-serve diagnostic workspaces',
                'Instant, app-like responsiveness on every device with room to scale'
              ]
            },
            example: { pl: 'Wzór: 玄 GEMBA / PIEC®', en: 'Ref: 玄 GEMBA / PIEC®' }
          }
        ],

        copy: {
          pl: {
            navEstimator: 'Co robię',
            navAbout: 'Jak pracuję',
            navContact: 'Kontakt',
            navCta: 'Wyceń projekt',
            eyebrow: 'WEB4BIZ.PL · NIEZALEŻNA PRAKTYKA CYFROWA (POLSKA / EUROPA)',
            heroLine1: 'Strony.',
            heroLine2: 'Narzędzia.',
            heroLine3: 'Aplikacje webowe.',
            heroIntro: 'Projektuję i tworzę strony internetowe, narzędzia online oraz aplikacje webowe dla firm.',
            heroBtnPrimary: 'Porozmawiajmy o projekcie',
            heroBtnSecondary: 'Zobacz 4 wybrane projekty',
            proof: ['10+ LAT W B2B', '5+ LAT W AGILE & LEAN', 'PL · EN · IT'],
            workKicker: '01 / WYBRANE PROJEKTY',
            workTitle: 'Wybrane projekty.',
            workSub: 'Cztery projekty. Różne branże i wyzwania. Każdy z nich łączy czytelny projekt z konkretnym celem biznesowym.'
          },
          en: {
            navEstimator: 'What I do',
            navAbout: 'How I work',
            navContact: 'Contact',
            navCta: 'Start a project',
            eyebrow: 'WEB4BIZ.PL · INDEPENDENT DIGITAL PRACTICE (POLAND / EUROPE)',
            heroLine1: 'Websites.',
            heroLine2: 'Tools.',
            heroLine3: 'Web apps.',
            heroIntro: 'I design and build websites, online tools and web apps for businesses.',
            heroBtnPrimary: 'Let’s discuss your project',
            heroBtnSecondary: 'See 4 selected projects',
            proof: ['10+ YEARS IN B2B', '5+ YEARS IN AGILE & LEAN', 'PL · EN · IT'],
            workKicker: '01 / SELECTED PROJECTS',
            workTitle: 'Selected projects.',
            workSub: 'Four projects across different industries and challenges. Each pairs a clear experience with a specific business goal.'
          }
        },

        get t() {
          return this.copy[this.lang];
        },

        get navProjectsLabel() {
          return this.lang === 'pl' ? `Projekty (${this.projectsCount})` : `Projects (${this.projectsCount})`;
        },

        get activeTierObj() {
          return this.tiers.find(item => item.id === this.selectedTier) || this.tiers[1];
        },

        setDirection(dir) {
          document.documentElement.classList.add('theme-selected');
          this.direction = dir;
          try { localStorage.setItem('w4b_theme', dir); } catch { /* Keep the selection for this visit. */ }
        },

        toggleLang() {
          this.lang = this.lang === 'pl' ? 'en' : 'pl';
          localStorage.setItem('lang', this.lang);
          web4bizSeo.updateUrl('index', this.lang);
          this.updateDocumentMetadata();
        },

        updateDocumentMetadata() {
          web4bizSeo.apply('index', this.lang);
        },

        async copyEmail() {
          const email = (shared.brand && shared.brand.email) || 'artur.zaluska@gmail.com';
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(email);
            } else {
              const tmp = document.createElement('input');
              tmp.value = email;
              document.body.appendChild(tmp);
              tmp.select();
              document.execCommand('copy');
              document.body.removeChild(tmp);
            }
            this.emailCopied = true;
            setTimeout(() => { this.emailCopied = false; }, 2500);
          } catch (e) {
            window.location.href = 'mailto:' + email;
          }
        },

        prefillContact() {
          const tier = this.activeTierObj;
          if (this.lang === 'pl') {
            this.form.message = `Dzień dobry, interesuje mnie wariant: ${tier.title.pl} (${tier.timeline.pl}).\n\nKrótki opis mojego projektu: `;
          } else {
            this.form.message = `Hi, I am interested in the "${tier.title.en}" tier (${tier.timeline.en}).\n\nBrief description of my project: `;
          }
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            document.getElementById('contact-name')?.focus({ preventScroll: true });
          }, 420);
        },

        async sendMail() {
          if (this.form.honey) return;

          const name = this.form.name.trim();
          const email = this.form.email.trim();
          const msg = this.form.message.trim();

          if (name.length < 2 || msg.length < 10 || !/[aeiouyąęó]/i.test(msg)) {
            this.formStatus = 'error';
            this.formFeedback = this.lang === 'pl'
              ? 'Proszę wpisać poprawne imię oraz pełną treść wiadomości (min. kilka słów).'
              : 'Please enter a valid name and a meaningful project description.';
            return;
          }

          this.formStatus = 'sending';
          this.formFeedback = '';

          try {
            const response = await fetch('https://formsubmit.co/ajax/artur.zaluska@gmail.com', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                _subject: this.lang === 'pl'
                  ? `Nowe zapytanie (${this.activeTierObj.title.pl}) - web4biz.pl`
                  : `New enquiry (${this.activeTierObj.title.en}) - web4biz.pl`,
                Imię: name,
                Email: email,
                Pakiet: this.activeTierObj.title[this.lang],
                Wiadomość: msg,
                _template: 'table'
              })
            });

            const data = await response.json();

            if (response.ok && (data.success === true || data.success === 'true')) {
              this.formStatus = 'success';
              this.formFeedback = this.lang === 'pl'
                ? 'Dziękuję! Wiadomość została wysłana bezpośrednio na moją skrzynkę. Odezwę się wkrótce.'
                : 'Thank you! Your message has been sent directly to my inbox.';
              this.form.name = '';
              this.form.email = '';
              this.form.message = '';
            } else {
              throw new Error('FormSubmit error');
            }
          } catch (err) {
            this.formStatus = 'error';
            this.formFeedback = this.lang === 'pl'
              ? 'Nie udało się wysłać automatycznie. Napisz bezpośrednio na: artur.zaluska@gmail.com'
              : 'Could not send automatically. Please email me at: artur.zaluska@gmail.com';
          }
        },

      };
    }
