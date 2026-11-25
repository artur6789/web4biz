function caseStudyApp() {
      const shared = window.WEB4BIZ_DATA || {};
      const sharedProjects = shared.projects;

      const casesMap = {};
      const projectOrder = [];
      sharedProjects.forEach((p) => {
        casesMap[p.id] = p;
        projectOrder.push(p.id);
      });

      const requestedProject = web4bizSeo.route().project;
      const initialProject = casesMap[requestedProject] ? requestedProject : projectOrder[0];

      return {
        direction: document.documentElement.dataset.theme,
        lang: web4bizSeo.language(),
        mobileMenuOpen: false,
        scrollProgress: 0,
        projectId: initialProject,
        projectOrder: projectOrder,
        cases: casesMap,

        // 8 Interaktywnych Hubów Europejskich dla mapy AD REM T2
        selectedCityIdx: 0,
        fleetType: 'bus',
        heroCities: [
          { id: 'rtm', x: 295, y: 235, km: '1 180', busTime: '12h 30m', ftlTime: '16h 00m', highway: 'A2 · A1',     country: 'NL · HOLANDIA', name: { pl: 'Rotterdam', en: 'Rotterdam' } },
          { id: 'ber', x: 418, y: 222, km: '570',   busTime: '6h 15m',  ftlTime: '8h 00m',  highway: 'A2 · A12',    country: 'DE · NIEMCY',   name: { pl: 'Berlin',    en: 'Berlin' } },
          { id: 'mil', x: 375, y: 365, km: '1 340', busTime: '14h 00m', ftlTime: '18h 30m', highway: 'A1 · A2 · A4',country: 'IT · WŁOCHY',   name: { pl: 'Mediolan',  en: 'Milan' } },
          { id: 'par', x: 245, y: 285, km: '1 590', busTime: '16h 30m', ftlTime: '21h 00m', highway: 'A2 · A4',     country: 'FR · FRANCJA',  name: { pl: 'Paryż',     en: 'Paris' } },
          { id: 'vie', x: 468, y: 318, km: '670',   busTime: '7h 15m',  ftlTime: '9h 30m',  highway: 'S8 · A1 · D1',country: 'AT · AUSTRIA',  name: { pl: 'Wiedeń',    en: 'Vienna' } },
          { id: 'prg', x: 438, y: 270, km: '680',   busTime: '7h 30m',  ftlTime: '9h 45m',  highway: 'S8 · D11',    country: 'CZ · CZECHY',   name: { pl: 'Praga',     en: 'Prague' } },
          { id: 'sto', x: 485, y: 120, km: '1 290', busTime: '15h (prom)', ftlTime: '18h (prom)', highway: 'S7 · E4', country: 'SE · SZWECJA',  name: { pl: 'Sztokholm', en: 'Stockholm' } },
          { id: 'mad', x: 155, y: 395, km: '2 860', busTime: '28h (2 kier.)', ftlTime: '42h 00m', highway: 'A2 · A10 · AP-1', country: 'ES · HISZPANIA', name: { pl: 'Madryt', en: 'Madrid' } }
        ],

        // Interaktywne demo diagnostyki dla 玄 GEMBA
        gembaDemoIdx: 0,
        gembaDemos: [
          {
            id: 'changeover',
            symptom: {
              pl: '„Przezbrojenie maszyny zjada całe popołudnie”',
              en: '“Changeovers eat a whole afternoon of capacity”'
            },
            waste: { pl: 'Strata: Oczekiwanie (Muda)', en: 'Waste: Waiting (Muda)' },
            method: {pl:'SMED (Shingo)', en:'SMED (Shingo)'}
          },
          {
            id: 'defect',
            symptom: {
              pl: '„Ten sam defekt wraca na kontroli końcowej”',
              en: '“The same defect keeps coming back at inspection”'
            },
            waste: { pl: 'Strata: Defekty (Muda)', en: 'Waste: Defects (Muda)' },
            method: {pl:'5 × dlaczego + poka-yoke', en:'5 Whys + poka-yoke'}
          }
        ],

        // Interaktywny symulator ładunku KUBATURA B2B
        kubaturaPreset: 'corp',
        kubaturaItems: [
          { id: 'desk', name: { pl: 'Stanowisko IT (Biurko + 2 Monitory)', en: 'IT Workstation (Desk + Dual Monitors)' }, m3: 1.4, kg: 65, qty: 8 },
          { id: 'cab',  name: { pl: 'Szafa aktowa RODO (pełna)', en: 'Loaded GDPR Filing Cabinet' }, m3: 1.1, kg: 145, qty: 5 },
          { id: 'safe', name: { pl: 'Szafa RACK / Sejf ognioodporny', en: 'Server RACK / Fireproof Safe' }, m3: 1.5, kg: 320, qty: 2 }
        ],

        get projectsCount() {
          return this.projectOrder.length;
        },

        get navProjectsLabel() {
          return this.lang === 'pl' ? `Projekty (${this.projectsCount})` : `Projects (${this.projectsCount})`;
        },

        get backProjectsLabel() {
          return this.lang === 'pl' ? `Wszystkie projekty (${this.projectsCount})` : `All projects (${this.projectsCount})`;
        },

        get kubaturaTotalM3() {
          return this.kubaturaItems.reduce((s, i) => s + i.m3 * i.qty, 0);
        },
        get kubaturaTotalKg() {
          return this.kubaturaItems.reduce((s, i) => s + i.kg * i.qty, 0);
        },
        get kubaturaTrips() {
          if (this.kubaturaTotalM3 === 0 && this.kubaturaTotalKg === 0) return 1;
          return Math.max(1, Math.ceil(this.kubaturaTotalM3 / 24), Math.ceil(this.kubaturaTotalKg / 3500));
        },
        get kubaturaVolPct() {
          if (this.kubaturaTotalM3 === 0) return 0;
          return Math.min(100, Math.round((this.kubaturaTotalM3 / (this.kubaturaTrips * 24)) * 100));
        },
        get kubaturaKgPct() {
          if (this.kubaturaTotalKg === 0) return 0;
          return Math.min(100, Math.round((this.kubaturaTotalKg / (this.kubaturaTrips * 3500)) * 100));
        },
        get kubaturaOverload() {
          return this.kubaturaKgPct >= 88;
        },
        get kubaturaActiveSlots() {
          const pct = Math.max(this.kubaturaVolPct, this.kubaturaKgPct);
          if (pct === 0) return 0;
          return Math.max(1, Math.min(15, Math.round((pct / 100) * 15)));
        },
        applyKubaturaPreset(type) {
          this.kubaturaPreset = type;
          const map = {
            small:   { desk: 6, cab: 2, safe: 1 },
            corp:    { desk: 8, cab: 5, safe: 2 },
            archive: { desk: 2, cab: 12, safe: 4 },
            clear:   { desk: 0, cab: 0, safe: 0 }
          }[type];
          if (!map) return;
          this.kubaturaItems.forEach(i => { i.qty = map[i.id] ?? 0; });
        },
        setKubaturaTargetSlots(targetIdx) {
          this.kubaturaPreset = 'custom';
          const level = this.kubaturaActiveSlots === targetIdx ? targetIdx - 1 : targetIdx;
          const exactLoad = [
            [0, 0, 0], // 0 slots
            [0, 0, 1], // 1 slot
            [0, 3, 0], // 2 slots
            [0, 3, 1], // 3 slots
            [3, 2, 0], // 4 slots
            [1, 6, 0], // 5 slots
            [0, 6, 2], // 6 slots
            [3, 5, 1], // 7 slots
            [1, 9, 1], // 8 slots
            [4, 8, 0], // 9 slots
            [3, 8, 2], // 10 slots
            [2, 8, 4], // 11 slots
            [5, 7, 3], // 12 slots
            [8, 6, 2], // 13 slots
            [7, 6, 4], // 14 slots
            [9, 9, 1]  // 15 slots
          ][Math.max(0, Math.min(15, level))];
          this.kubaturaItems[0].qty = exactLoad[0];
          this.kubaturaItems[1].qty = exactLoad[1];
          this.kubaturaItems[2].qty = exactLoad[2];
        },

        get currentCase() {
          return this.cases[this.projectId] || this.cases[this.projectOrder[0]];
        },

        get activeCity() {
          return this.heroCities[this.selectedCityIdx] || this.heroCities[0];
        },

        get nextProjectId() {
          const idx = this.projectOrder.indexOf(this.projectId);
          return this.projectOrder[(idx + 1) % this.projectOrder.length];
        },

        updateDocumentTitle() {
          web4bizSeo.apply('case-study', this.lang, this.currentCase);
        },

        selectProject(id, pushHistory = true) {
          if (!this.cases[id]) return;
          this.projectId = id;
          if (this.$refs.demo) this.$refs.demo.open = false;
          this.updateDocumentTitle();

          if (pushHistory) web4bizSeo.updateUrl('case-study', this.lang, id, true);
        },

        onSwitcherKeydown(e, idx) {
          let nextIdx = null;
          if (e.key === 'ArrowRight') {
            nextIdx = (idx + 1) % this.projectOrder.length;
          } else if (e.key === 'ArrowLeft') {
            nextIdx = (idx - 1 + this.projectOrder.length) % this.projectOrder.length;
          }
          if (nextIdx !== null) {
            e.preventDefault();
            this.selectProject(this.projectOrder[nextIdx]);
            this.$nextTick(() => {
              const tabs = this.$refs.switcherList?.querySelectorAll('[role="tab"]');
              if (tabs && tabs[nextIdx]) tabs[nextIdx].focus();
            });
          }
        },

        setDirection(dir) {
          document.documentElement.classList.add('theme-selected');
          this.direction = dir;
          try { localStorage.setItem('w4b_theme', dir); } catch { /* Keep the selection for this visit. */ }
        },

        toggleLang() {
          this.lang = this.lang === 'pl' ? 'en' : 'pl';
          localStorage.setItem('lang', this.lang);
          web4bizSeo.updateUrl('case-study', this.lang, this.projectId);
          this.updateDocumentTitle();
        },

        init() {
          this.updateDocumentTitle();

          window.addEventListener('popstate', () => {
            this.lang = web4bizSeo.language();
            const requested = web4bizSeo.route().project;
            const nextId = this.cases[requested] ? requested : this.projectOrder[0];
            this.selectProject(nextId, false);
          });

          window.addEventListener('scroll', () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            this.scrollProgress = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
          }, { passive: true });
        }
      };
    }
