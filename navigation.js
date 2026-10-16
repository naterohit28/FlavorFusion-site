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

// Traditional menus: linked tabs and panels, with keyboard support.
const menuTabs = [...document.querySelectorAll('.banana-tab')];
const menuPanels = [...document.querySelectorAll('.banana-panel')];
function selectTraditionalMenu(tab) {
  menuTabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  menuPanels.forEach(panel => {
    const selected = panel.dataset.menu === tab.dataset.menu;
    panel.classList.toggle('active', selected);
    panel.hidden = !selected;
  });
}
menuTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTraditionalMenu(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % menuTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + menuTabs.length) % menuTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = menuTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectTraditionalMenu(menuTabs[next]);
    menuTabs[next].focus();
  });
});
