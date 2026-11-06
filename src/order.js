import { loadStripe } from '@stripe/stripe-js';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_51CrumbcloudDemoKey000000000000000000000000000000';

const form = document.querySelector('#order-form');
const status = document.querySelector('#order-status');
const total = document.querySelector('#order-total');

const prices = { 'cloud-sponge': 28, 'pistachio-dream': 34, 'lemon-meringue': 31 };

function updateTotal() {
  const data = new FormData(form);
  const cake = data.get('cake');
  const quantity = Number(data.get('quantity') || 1);
  total.textContent = `€${(prices[cake] ?? 0) * quantity}`;
}

form?.addEventListener('change', updateTotal);
updateTotal();

loadStripe(STRIPE_PUBLISHABLE_KEY).then((stripe) => {
  const card = stripe?.elements().create('card', { hidePostalCode: true });
  card?.mount('#card-element');
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'This is a demo shop: no order is placed and no payment is processed.';
});
