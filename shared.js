// Shared nav and footer for AudiLens site
function renderNav(activePage) {
  const pages = [
    { href: 'index.html',   label: 'Home' },
    { href: 'product.html', label: 'Product' },
    { href: 'about.html',   label: 'About' },
    { href: 'team.html',    label: 'Team' },
    { href: 'contact.html', label: 'Contact', cta: true },
  ];
  return `
  <nav>
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-bar"></div>
      <div class="nav-logo-text"><span>Audi</span><span>Lens</span></div>
    </a>
    <ul class="nav-links">
      ${pages.map(p => `<li><a href="${p.href}" class="${p.cta ? 'nav-cta' : ''}${activePage === p.href ? ' active' : ''}">${p.label}</a></li>`).join('')}
    </ul>
  </nav>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <a href="index.html" class="footer-logo"><span>Audi</span><span>Lens</span></a>
          <p class="footer-tagline">AI-powered hearing loss progression prediction for audiology practices.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>Company</h4>
            <a href="about.html">About</a>
            <a href="team.html">Team</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Product</h4>
            <a href="product.html">How it works</a>
            <a href="product.html#model">The model</a>
            <a href="product.html#data">Data strategy</a>
          </div>
          <div class="footer-col">
            <h4>For practices</h4>
            <a href="contact.html">Request a PoC</a>
            <a href="product.html#roi">ROI calculator</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 AudiLens Inc. All rights reserved. Murray, Utah, USA.</p>
        <span class="footer-badge">Seed stage &mdash; Pre-revenue</span>
      </div>
    </div>
  </footer>`;
}

function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  document.getElementById('nav-placeholder').innerHTML = renderNav(page);
  document.getElementById('footer-placeholder').innerHTML = renderFooter();
  initFadeUp();
});
