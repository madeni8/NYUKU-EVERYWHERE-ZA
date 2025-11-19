document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#siteSearch');
  if (!input) return;
  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.product-item').forEach(card => {
      const text = (card.textContent || '').toLowerCase();
      card.style.display = q ? (text.includes(q) ? '' : 'none') : '';
    });
  });
});