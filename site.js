/* FBR Trust — shared menu and footer.
   Edit the menu or footer here once, and every page updates. */

const FBR = {
  email: 'info@fbrtrust.org',
  phone: '+91 99748 39454',   // leave blank ('') to hide
  regLine: 'Registered public charitable trust · Reg. No. GJ/2023/0334947 · PAN AAATF9493J<br>Regd. office: Vadodara, Gujarat · Field work: Varanasi, Uttar Pradesh'
};

const NAV_LINKS = [
  { href: 'index.html',    label: 'Home' },
  { href: 'about.html',    label: 'About' },
  { href: 'projects.html', label: 'Our Work' },
  { href: 'contact.html',  label: 'Contact & Gallery' },
  { href: 'enquiry.html',  label: 'Enquiry' }
];

function buildNav() {
  const here = location.pathname.split('/').pop() || 'index.html';
  const links = NAV_LINKS.map(l =>
    `<li><a href="${l.href}"${l.href === here ? ' class="active" aria-current="page"' : ''}>${l.label}</a></li>`
  ).join('');

  return `
  <nav class="site-nav" aria-label="Main">
    <a class="logo" href="index.html">
      <img class="logo-img" src="images/logo-emblem.png" alt="FBR Trust logo" width="48" height="48">
      <div class="logo-text">FBR Trust<span>Foundation for Bull Rehabilitation</span></div>
    </a>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <ul class="nav-links">
      ${links}
      <li><a href="donate.html" class="nav-donate${here === 'donate.html' ? ' active' : ''}">Donate</a></li>
    </ul>
  </nav>`;
}

function buildFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div>
      <img src="images/logo-full.png" alt="FBR Trust logo" width="96" height="96" style="display:block;margin-bottom:0.75rem">
      <strong>Foundation for Bull Rehabilitation &amp; Charitable Trust</strong><br>
      ${FBR.regLine}<br>
      <a href="mailto:${FBR.email}">${FBR.email}</a>${FBR.phone ? ' · ' + FBR.phone : ''}
      <div class="sdgs">
        <span class="sdg">SDG 1</span><span class="sdg">SDG 2</span><span class="sdg">SDG 7</span>
        <span class="sdg">SDG 8</span><span class="sdg">SDG 13</span><span class="sdg">SDG 15</span>
      </div>
    </div>
    <div>
      <h4>Explore</h4>
      <ul>
        <li><a href="about.html">About &amp; Mission</a></li>
        <li><a href="projects.html">Our Work</a></li>
        <li><a href="contact.html#gallery">Gallery</a></li>
      </ul>
    </div>
    <div>
      <h4>Support</h4>
      <ul>
        <li><a href="donate.html">Donate</a></li>
        <li><a href="donate.html#csr">CSR Partnership</a></li>
        <li><a href="enquiry.html">Send an Enquiry</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="copyright">© ${year} FBR Trust. All rights reserved.</div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const navSlot = document.getElementById('site-nav');
  const footSlot = document.getElementById('site-footer');
  if (navSlot) navSlot.outerHTML = buildNav();
  if (footSlot) footSlot.outerHTML = buildFooter();

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }
});
