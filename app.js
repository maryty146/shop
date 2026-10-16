const products = [
  { id: 1, title: 'Ноутбук 15"',       category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 4, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 },
  { id: 5, title: 'Наушники',          category: 'Аксессуары', price: 1700 },
  { id: 6, title: 'Колонка',           category: 'Аксессуары', price: 4500 },
  { id: 7, title: 'Веб-камера',        category: 'Аксессуары', price: 3000 },
];

const catalog = document.getElementById('catalog');

function renderProducts() {
  catalog.innerHTML = products.map(p => `
    <div class="card">
      <div class="category">${p.category}</div>
      <h3>${p.title}</h3>
      <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
      <button data-id="${p.id}">В корзину</button>
    </div>
  `).join('');
}

renderProducts();

catalog.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
          const productId = Number(event.target.getAttribute('data-id'));
          const product = products.find(p => p.id === productId);
                if (product) {
            console.log('Выбран товар:', product.title);
        }
    }
});