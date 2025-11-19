document.addEventListener('DOMContentLoaded', () => {

  // Tabs (products page)
  document.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.dataset.group;

      // Remove active class from all tabs in the same group
      document.querySelectorAll(`[data-group="${group}"]`).forEach(el => el.classList.remove('active'));

      tab.classList.add('active');

      const target = tab.dataset.target;

      // Hide all panes in the same group
      document.querySelectorAll(`[data-pane="${group}"]`).forEach(p => p.style.display = 'none');

      // Show the selected pane
      const pane = document.querySelector(`#${target}`);
      if (pane) pane.style.display = 'block';
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
      const item = title.closest('.accordion-item');
      if (!item) return;

      item.classList.toggle('open');
      const content = item.querySelector('.accordion-content');
      if (!content) return;

      content.style.display = item.classList.contains('open') ? 'block' : 'none';
    });
  });

  // Product quick view modal
  document.querySelectorAll('.quickview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.querySelector('#productModal');
      if (!modal) return;

      const title = btn.dataset.title || '';
      const img = btn.dataset.img || '';

      const modalTitle = modal.querySelector('.modal-content h3');
      const modalImg = modal.querySelector('.modal-content img');

      if (modalTitle) modalTitle.textContent = title;
      if (modalImg) modalImg.src = img;

      modal.classList.add('open');
    });
  });

  // Close modal when clicking close button or outside modal
  document.querySelectorAll('.modal-close, .modal').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
      }
    });
  });

});
