/* Alpha2Omega - offline file:// protocol compatibility */
(function() {
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href]').forEach(function(a) {
      var h = a.getAttribute('href');
      if (h && !h.startsWith('http') && !h.startsWith('#') && !h.startsWith('mailto:') && !h.startsWith('tel:') && !h.endsWith('.html')) {
        if (h.endsWith('/')) {
          a.setAttribute('href', h + 'index.html');
        } else if (h.includes('/#')) {
          var parts = h.split('#');
          if (parts[0].endsWith('/')) {
            a.setAttribute('href', parts[0] + 'index.html#' + parts[1]);
          }
        }
      }
    });
  }
})();

/* Alpha2Omega.ai — progressive enhancement only. Every page is complete without this file. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var map = function (v, a, b) { return clamp((v - a) / (b - a), 0, 1); };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  /* pinned Alpha→Omega scene on roomy screens */
  var proc = $('.process[data-pin]');
  var steps = proc ? $$('.stepcard', proc) : [];
  var glyphs = proc ? $$('.rail .big span', proc) : [];
  var labels = proc ? $$('.rail li', proc) : [];
  var fill = proc ? $('.rail .fill', proc) : null;
  var pinMQ = matchMedia('(min-width: 900px) and (min-height: 640px)');
  function setPinned() { if (proc) proc.classList.toggle('pinned', pinMQ.matches && !reduce); }
  setPinned();
  if (pinMQ.addEventListener) pinMQ.addEventListener('change', function () { setPinned(); kick(); });
  var active = -1;
  function setStep(i) {
    if (i === active) return; active = i;
    [steps, glyphs, labels].forEach(function (list) { list.forEach(function (el, j) { el.classList.toggle('on', j === i); }); });
  }

  /* Click rail label to scroll to step */
  if (labels.length) {
    labels.forEach(function (li, idx) {
      li.addEventListener('click', function () {
        var pin = proc ? $('.pin', proc) : null;
        if (!pin) return;
        var vh = innerHeight;
        var top = pin.getBoundingClientRect().top + scrollY;
        var span = pin.offsetHeight - (vh - 96);
        var targetY = top + (idx / Math.max(1, steps.length - 1)) * span + 10;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      });
    });
  }

  /* damped scroll engine */
  var heroCopy = $('#heroCopy');
  var target = scrollY, cur = scrollY, running = false;
  function frame() {
    cur += (target - cur) * 0.1;
    if (Math.abs(target - cur) < 0.4) cur = target;
    render(cur);
    if (cur !== target) requestAnimationFrame(frame); else running = false;
  }
  function kick() { target = scrollY; if (!running) { running = true; requestAnimationFrame(frame); } }
  function render(y) {
    var vh = innerHeight;
    if (!reduce && heroCopy) {
      var p = map(y, 0, vh * 0.7);
      heroCopy.style.transform = 'translateY(' + (-p * 40) + 'px)';
      heroCopy.style.opacity = 1 - p * 0.55;
    }
    if (proc) {
      if (proc.classList.contains('pinned')) {
        var pin = $('.pin', proc);
        var top = pin.getBoundingClientRect().top + (scrollY - y);
        var span = pin.offsetHeight - (vh - 96);
        var pp = map(76 - top, 0, Math.max(1, span));
        setStep(Math.min(steps.length - 1, Math.floor(pp * steps.length)));
        if (fill) fill.style.transform = 'scaleX(' + pp + ')';
      } else if (active !== -2) {
        active = -2; steps.forEach(function (s) { s.classList.add('on'); });
      }
    }
  }
  if (heroCopy || proc) {
    addEventListener('scroll', kick, { passive: true });
    addEventListener('resize', kick);
    render(scrollY);
  }

  /* nav turns dark glass over a dark chapter */
  var darkCh = $$('[data-chapter="dark"]');
  if (darkCh.length && 'IntersectionObserver' in window) {
    var on = new Set();
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.isIntersecting ? on.add(e.target) : on.delete(e.target); });
      document.documentElement.classList.toggle('chapter-dark', on.size > 0);
    }, { rootMargin: '-52px 0px -92% 0px' });
    darkCh.forEach(function (el) { io.observe(el); });
  }

  /* close the mobile menu after choosing a link */
  $$('.menu-panel a').forEach(function (a) { a.addEventListener('click', function () { a.closest('details').open = false; }); });

  /* copy email */
  $$('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = document.getElementById(btn.getAttribute('data-copy'));
      function sel() { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      function done(ok) { var t = btn.textContent; btn.textContent = ok ? 'Copied' : 'Selected, press Ctrl+C'; setTimeout(function () { btn.textContent = t; }, 2000); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(el.textContent).then(function () { done(true); }, function () { sel(); done(false); });
      else { sel(); done(false); }
    });
  });

  /* contact form: until a real endpoint is configured, explain instead of failing silently */
  var form = $('#contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      var msg = $('#formMsg');
      if (!action || action.indexOf('[') !== -1) {
        e.preventDefault();
        msg.textContent = 'The form is not connected yet. Please email us at the address below.';
        return;
      }
      if (!form.checkValidity()) return;
      e.preventDefault();
      msg.textContent = 'Sending…';
      fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error();
          form.reset(); msg.textContent = 'Thanks. We have your message and will be in touch.';
        })
        .catch(function () { msg.textContent = 'That did not send. Please email us at the address below.'; });
    });
  }
})();

/* hours-cost calculator on /delivery/: cost = people × (hours / 37.5) × salary; nothing leaves the page */
(function () {
  var calc = document.getElementById('roiCalc');
  if (!calc) return;
  var gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
  var num = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });
  var people = document.getElementById('c-people'), hours = document.getElementById('c-hours'), salary = document.getElementById('c-salary');
  function update() {
    var p = +people.value, h = +hours.value, s = +salary.value;
    document.getElementById('o-people').textContent = p;
    document.getElementById('o-hours').textContent = h;
    document.getElementById('o-salary').textContent = gbp.format(s);
    document.getElementById('o-cost').textContent = gbp.format(Math.round(p * (h / 37.5) * s / 100) * 100);
    document.getElementById('o-time').textContent = num.format(p * h * 46);
  }
  [people, hours, salary].forEach(function (el) { el.addEventListener('input', update); });
  update();
})();

/* Market Pillar Accordion (desktop hover + click/touch toggle) */
(function initMarketAccordion() {
  var accordion = document.getElementById('marketAccordion');
  if (!accordion) return;
  var cards = accordion.querySelectorAll('.pillar-card');
  
  cards.forEach(function(card) {
    card.addEventListener('click', function(e) {
      var isAlreadyActive = card.classList.contains('active');
      cards.forEach(function(c) { c.classList.remove('active'); });
      accordion.classList.remove('has-active');
      if (!isAlreadyActive) {
        card.classList.add('active');
        accordion.classList.add('has-active');
      }
    });

    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Clicking outside removes active state
  document.addEventListener('click', function(e) {
    if (!accordion.contains(e.target)) {
      cards.forEach(function(c) { c.classList.remove('active'); });
      accordion.classList.remove('has-active');
    }
  });
})();

