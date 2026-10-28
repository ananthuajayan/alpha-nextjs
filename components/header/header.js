/**
 * Alpha2Omega.ai — Modern Responsive Header Component (<site-header>)
 */

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const root = this.getAttribute('root') || './';
    const current = this.getAttribute('current') || '';

    const cur = (section) => (current === section ? ' aria-current="page"' : '');

    this.innerHTML = `
<a class="skip" href="#main">Skip to content</a>
<header class="site-nav-header is-top">
  <nav class="nav" aria-label="Main Navigation">
    <div class="wrap nav-wrap">
      <!-- Brand Logo -->
      <a class="brand" href="${root}" aria-label="Alpha 2 Omega home">
        <img class="brand-logo" src="${root}assets/images/logo.png" alt="Alpha 2 Omega — From Data to Decisions" height="68">
      </a>

      <!-- Desktop Navigation Links -->
      <div class="nav-links">
        <a href="${root}data-extraction/" class="nav-link"${cur('data-extraction')}><span>Data extraction</span></a>
        <a href="${root}gp-surgeries/" class="nav-link"${cur('gp-surgeries')}><span>GP surgeries</span></a>
        <a href="${root}orthodontics/" class="nav-link"${cur('orthodontics')}><span>Orthodontics</span></a>
        <a href="${root}case-studies/" class="nav-link"${cur('case-studies')}><span>Case studies</span></a>
        <a href="${root}process/" class="nav-link"${cur('process')}><span>Process</span></a>
        <a href="${root}contact/" class="nav-link"${cur('contact')}><span>Contact</span></a>
      </div>

      <!-- Right Actions: CTA + Hamburger Toggle -->
      <div class="nav-actions">
        <a class="btn nav-cta-btn" href="${root}contact/">
          <span>Book an AI audit</span>
          <svg class="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <button type="button" class="nav-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="mobileMenu">
          <span class="toggle-bar"></span>
          <span class="toggle-bar"></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu Drawer & Backdrop -->
  <div class="mobile-drawer-backdrop" id="mobileDrawerBackdrop" aria-hidden="true"></div>
  <div class="mobile-drawer" id="mobileMenu" aria-hidden="true">
    <div class="mobile-drawer-content wrap">
      <div class="mobile-links-grid">
        <a href="${root}data-extraction/" class="mobile-link"${cur('data-extraction')}>
          <div class="mobile-link-text">
            <strong>Data extraction</strong>
            <small>Scanning bureaux &amp; document AI</small>
          </div>
          <span class="mobile-chevron">›</span>
        </a>
        <a href="${root}gp-surgeries/" class="mobile-link"${cur('gp-surgeries')}>
          <div class="mobile-link-text">
            <strong>GP surgeries</strong>
            <small>Patient voice line &amp; workflow triage</small>
          </div>
          <span class="mobile-chevron">›</span>
        </a>
        <a href="${root}orthodontics/" class="mobile-link"${cur('orthodontics')}>
          <div class="mobile-link-text">
            <strong>Orthodontics</strong>
            <small>Referral triage &amp; decision support</small>
          </div>
          <span class="mobile-chevron">›</span>
        </a>
        <a href="${root}case-studies/" class="mobile-link"${cur('case-studies')}>
          <div class="mobile-link-text">
            <strong>Case studies</strong>
            <small>Measured production results &amp; ROI</small>
          </div>
          <span class="mobile-chevron">›</span>
        </a>
        <a href="${root}process/" class="mobile-link"${cur('process')}>
          <div class="mobile-link-text">
            <strong>The process</strong>
            <small>From Alpha audit to Omega run</small>
          </div>
          <span class="mobile-chevron">›</span>
        </a>
        <a href="${root}contact/" class="mobile-link"${cur('contact')}>
          <div class="mobile-link-text">
            <strong>Contact</strong>
            <small>Talk to our team in Manchester &amp; Newcastle</small>
          </div>
          <span class="mobile-chevron">›</span>
        </a>
      </div>

      <div class="mobile-drawer-footer">
        <a class="btn mobile-cta-btn" href="${root}contact/">
          <span>Book an AI audit</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <p class="mobile-footer-meta">Manchester &amp; Newcastle · Serving UK &amp; Ireland</p>
      </div>
    </div>
  </div>
</header>`;

    const header = this.querySelector('.site-nav-header');
    const toggleBtn = this.querySelector('.nav-toggle');
    const backdrop = this.querySelector('.mobile-drawer-backdrop');
    const drawer = this.querySelector('.mobile-drawer');

    const openMenu = () => {
      toggleBtn.setAttribute('aria-expanded', 'true');
      header.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.classList.add('nav-menu-open');
    };

    const closeMenu = () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      header.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('nav-menu-open');
    };

    toggleBtn.addEventListener('click', () => {
      const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    backdrop.addEventListener('click', closeMenu);

    // Close on link click
    this.querySelectorAll('.mobile-link, .mobile-cta-btn').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        closeMenu();
        toggleBtn.focus();
      }
    });

    // Close on resize above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960 && header.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Smart Sticky Header: transparent over the banner at the top, solid once scrolled
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let isTicking = false;
    let firstRun = true;
    const threshold = 8; // minimal delta to avoid micro-jitter

    const updateHeaderScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      // On the first pass, sync the reference point so a restored scroll
      // position does not hide the header before the user moves.
      if (firstRun) {
        lastScrollY = currentScrollY;
        firstRun = false;
      }

      // Never hide if mobile drawer menu is currently open
      if (header.classList.contains('is-open')) {
        header.classList.remove('is-hidden');
        isTicking = false;
        return;
      }

      // At or near top: transparent, always visible, no elevation
      if (currentScrollY <= 20) {
        header.classList.remove('is-hidden');
        header.classList.remove('is-scrolled');
        header.classList.add('is-top');
        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
        isTicking = false;
        return;
      }

      // Past the top: solid glass with subtle shadow
      header.classList.remove('is-top');
      header.classList.add('is-scrolled');

      const delta = currentScrollY - lastScrollY;

      // Only toggle if scroll delta exceeds threshold
      if (Math.abs(delta) > threshold) {
        if (delta > 0 && currentScrollY > 80) {
          // Scrolling down & past navbar -> hide
          header.classList.add('is-hidden');
        } else if (delta < 0) {
          // Scrolling up -> show
          header.classList.remove('is-hidden');
        }
        lastScrollY = currentScrollY;
      }

      isTicking = false;
    };

    // Apply the correct state on load (including restored scroll positions)
    updateHeaderScroll();

    window.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(updateHeaderScroll);
        isTicking = true;
      }
    }, { passive: true });

    // Offline file:// link enhancement
    if (location.protocol === 'file:') {
      this.querySelectorAll('a[href]').forEach(a => {
        const h = a.getAttribute('href');
        if (h && !h.startsWith('http') && !h.startsWith('#') && !h.startsWith('mailto:') && !h.startsWith('tel:') && !h.endsWith('.html')) {
          if (h.endsWith('/')) {
            a.setAttribute('href', h + 'index.html');
          }
        }
      });
    }
  }
}

if (!customElements.get('site-header')) {
  customElements.define('site-header', SiteHeader);
}
