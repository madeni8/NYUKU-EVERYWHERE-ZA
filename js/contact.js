document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('#contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#c-name');
    const email = contactForm.querySelector('#c-email');
    const message = contactForm.querySelector('#c-message');

    // Validation
    if (!name.value.trim()) {
      alert('Please enter your name');
      name.focus();
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      alert('Please enter a valid email');
      email.focus();
      return;
    }

    if (!message.value.trim()) {
      alert('Please enter a message');
      message.focus();
      return;
    }

    // Formspree endpoint (replace with your real form ID)
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id';

    // If user replaced FORMSPREE_ENDPOINT with real endpoint, attempt fetch
    if (!FORMSPREE_ENDPOINT.includes('your-form-id')) {
      try {
        const resp = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(contactForm)
        });

        if (resp.ok) {
          alert('Message sent — thank you! (via Formspree)');
          contactForm.reset();
          return;
        } else {
          console.warn('Formspree response', resp.status);
        }
      } catch (err) {
        console.warn('Formspree error', err);
      }
    }

    // Fallback: open user's mail client (mailto)
    const subject = encodeURIComponent(`Website contact from ${name.value}`);
    const body = encodeURIComponent(
      `Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
    );

    window.location.href = `mailto:nyukueverywhere@gmail.com?subject=${subject}&body=${body}`;
  });
});
