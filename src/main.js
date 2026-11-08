import { inject } from '@vercel/analytics';

inject();

// Meta Pixel: measure Instagram and Facebook ad campaigns.
if (!window.fbq) {
  const fbq = function (...args) {
    fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = window._fbq = fbq;
  const pixel = document.createElement('script');
  pixel.async = true;
  pixel.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(pixel);
}
window.fbq('init', '987654321012345');
window.fbq('track', 'PageView');

const current = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav a').forEach((link) => {
  const target = new URL(link.href).pathname.replace(/\/$/, '') || '/';
  if (target === current) link.setAttribute('aria-current', 'page');
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
