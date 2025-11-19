document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lightbox-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // prevent default link behavior

      const src = btn.dataset.src || btn.getAttribute('href');
      if (!src) return;

      // Check if lightbox already exists
      let lb = document.querySelector('.lightbox');
      if (!lb) {
        lb = document.createElement('div');
        lb.className = 'lightbox';
        document.body.appendChild(lb);
      }

      // Set lightbox content using template literal
      lb.innerHTML = `
        <div class="lb-content">
          <img src="${src}" alt="${btn.dataset.alt || 'Image'}">
          <button class="lb-close" aria-label="Close">&times;</button>
        </div>
      `;

      // Show lightbox
      lb.classList.add('open');

      // Close button
      const closeBtn = lb.querySelector('.lb-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => lb.classList.remove('open'));
      }

      // Close when clicking outside content
      lb.addEventListener('click', (ev) => {
        if (ev.target === lb) lb.classList.remove('open');
      });
    });
  });
});
