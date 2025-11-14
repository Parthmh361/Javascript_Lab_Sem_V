let allProducts = [];
fetch('products.json')
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderTable(data, 'fetchTable');
    populateCategories(data);
  })
  .catch(err => console.error('Error loading products.json:', err));
$.getJSON('products.json', function(data) {
  renderTable(data, 'jqueryTable');
});
function renderTable(products, tableId) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = '';

  products.forEach(p => {
    const row = document.createElement('tr');
    if (p.stock < 5) row.classList.add('low-stock');

    row.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${p.price}</td>
      <td>${p.stock}</td>
    `;
    tbody.appendChild(row);
  });

  console.log(`Displayed ${products.length} items in ${tableId}`);
}
function populateCategories(products) {
  const select = document.getElementById('categoryFilter');
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}
document.getElementById('categoryFilter').addEventListener('change', applyFilters);
document.getElementById('searchBox').addEventListener('input', applyFilters);

function applyFilters() {
  const category = document.getElementById('categoryFilter').value.toLowerCase();
  const searchText = document.getElementById('searchBox').value.toLowerCase();

  const filtered = allProducts.filter(p => {
    const matchesCategory = (category === 'all' || p.category.toLowerCase() === category);
    const matchesSearch = p.name.toLowerCase().includes(searchText);
    return matchesCategory && matchesSearch;
  });

  renderTable(filtered, 'fetchTable');
}
