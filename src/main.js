import { inject } from '@vercel/analytics';

inject();

const current = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav a').forEach((link) => {
  const target = new URL(link.href).pathname.replace(/\/$/, '') || '/';
  if (target === current) link.setAttribute('aria-current', 'page');
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
