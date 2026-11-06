const form = document.querySelector('#contact-form');
const status = document.querySelector('#contact-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const token = window.grecaptcha?.getResponse();
  if (!token) {
    status.textContent = 'Please confirm you are not a robot.';
    return;
  }
  status.textContent = 'Thanks! This is a demo shop, so your message was not sent anywhere.';
  form.reset();
  window.grecaptcha.reset();
});
