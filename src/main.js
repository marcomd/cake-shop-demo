import { inject } from '@vercel/analytics';

inject();

// Microsoft Clarity: session recordings and heatmaps for the order funnel.
window.clarity = window.clarity || function (...args) {
  (window.clarity.q = window.clarity.q || []).push(args);
};
const clarityTag = document.createElement('script');
clarityTag.async = true;
clarityTag.src = 'https://www.clarity.ms/tag/crumb0demo';
document.head.appendChild(clarityTag);

const current = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav a').forEach((link) => {
  const target = new URL(link.href).pathname.replace(/\/$/, '') || '/';
  if (target === current) link.setAttribute('aria-current', 'page');
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
