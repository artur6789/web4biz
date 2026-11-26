function projectsPageApp() {
      const shared = window.WEB4BIZ_DATA || {};
      const sharedProjects = shared.projects || [
        { id: 'adremt2', categories: ['b2b', 'tools'] },
        { id: 'ckadrem', categories: ['b2b'] },
        { id: 'pmclassics', categories: ['tools'] },
        { id: 'kubatura', categories: ['b2b', 'tools'] },
        { id: 'gemba', categories: ['tools', 'react'] }
      ];
      const baseFilters = shared.filters || [
        { id: 'b2b',   label: { pl: 'Strony B2B & SEO',    en: 'B2B & SEO Websites' } },
        { id: 'tools', label: { pl: 'Dodatkowe narzędzia', en: 'Custom Web Tools' } },
        { id: 'react', label: { pl: 'Aplikacje webowe', en: 'Web applications' } },
        { id: 'brand', label: { pl: 'Marki i usługi lokalne', en: 'Consumer brands & local services' } }
      ];

      return {
        direction: document.documentElement.dataset.theme,
        lang: web4bizSeo.language(),
        mobileMenuOpen: false,
        activeFilter: 'all',
        projectsList: sharedProjects,
        baseFilters: baseFilters,

        get projectsCount() {
          return this.projectsList.length;
        },

        get navProjectsLabel() {
          return this.lang === 'pl' ? `Projekty (${this.projectsCount})` : `Projects (${this.projectsCount})`;
        },

        get filterTabs() {
          return [
            {
              id: 'all',
              label: {
                pl: `Wszystkie projekty (${this.projectsCount})`,
                en: `All projects (${this.projectsCount})`
              }
            },
            ...this.baseFilters
          ];
        },

        projectLinkLabel(projectId, language) {
          if (projectId === 'gemba') return language === 'pl' ? 'Otwórz aplikację' : 'Open app';
          return language === 'pl' ? 'Otwórz stronę' : 'Open website';
        },

        matchesFilter(projectId) {
          if (this.activeFilter === 'all') return true;
          const item = this.projectsList.find(p => p.id === projectId);
          return item ? item.categories.includes(this.activeFilter) : true;
        },

        get visibleCount() {
          if (this.activeFilter === 'all') return this.projectsCount;
          return this.projectsList.filter(p => p.categories.includes(this.activeFilter)).length;
        },

        get resultsCounterLabel() {
          const total = String(this.projectsCount).padStart(2, '0');
          const shown = String(this.visibleCount).padStart(2, '0');
          if (this.activeFilter === 'all') {
            return this.lang === 'pl' ? `ZREALIZOWANE: ${total} PROJEKTÓW` : `SHIPPED: ${total} PROJECTS`;
          }
          return this.lang === 'pl' ? `WIDOCZNE: ${shown} / ${total}` : `SHOWING: ${shown} / ${total}`;
        },

        setDirection(dir) {
          document.documentElement.classList.add('theme-selected');
          this.direction = dir;
          try { localStorage.setItem('w4b_theme', dir); } catch { /* Keep the selection for this visit. */ }
        },

        toggleLang() {
          this.lang = this.lang === 'pl' ? 'en' : 'pl';
          localStorage.setItem('lang', this.lang);
          web4bizSeo.updateUrl('projects', this.lang);
          this.updateDocumentMetadata();
        },

        updateDocumentMetadata() {
          web4bizSeo.apply('projects', this.lang);
        }
      };
    }
