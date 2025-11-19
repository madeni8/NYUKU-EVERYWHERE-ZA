document.addEventListener('DOMContentLoaded', () => {
  const ticker = document.querySelector('#liveTicker');
  if (!ticker) return;
  const items = [
    'New drop: "Nyuku Black Tee" — 24 left',
    'Flash sale: Hoodies 20% off for 2 hours',
    'Limited cap restock — only 10 pieces',
    'Pre-order open: Denim Jacket — ships next month',
    'Free shipping on orders over R700'
  ];
  let idx=0;
  setInterval(()=> {
    ticker.textContent = items[idx % items.length];
    idx++;
  }, 6000);
});