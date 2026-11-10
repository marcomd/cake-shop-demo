import '@fontsource/fraunces/500.css';
import '@fontsource/fraunces/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import { inject } from '@vercel/analytics';

// Start Vercel Web Analytics only after the visitor accepts Measurement (iubenda purpose 4).
// The flag covers consent expressed before this deferred module ran.
if (window.__iubMeasurementAllowed) {
  inject();
} else {
  window.addEventListener('iubenda:measurement-allowed', () => inject(), { once: true });
}

const current = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav a').forEach((link) => {
  const target = new URL(link.href).pathname.replace(/\/$/, '') || '/';
  if (target === current) link.setAttribute('aria-current', 'page');
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
