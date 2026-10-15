// Accessible navigation for the supplied single-page design.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-navigation');
if (toggle && nav) {
  const contact = document.createElement('a');
  contact.href = '#contact';
  contact.className = 'mobile-contact-link';
  contact.textContent = 'Plan Your Celebration';
  nav.append(contact);
  const setOpen = open => {
    nav.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) setOpen(false); });
  window.matchMedia('(max-width: 1100px)').addEventListener('change', () => setOpen(false));
}
