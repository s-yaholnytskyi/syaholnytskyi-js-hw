const items = document
  .querySelector('ul#categories')
  .querySelectorAll('li.item');

for (let i = 0; i < items.length; i++) {
  console.log(`Категорія: ${items[i].querySelector('h2').textContent}`);
  console.log(`Кількість елементів: ${items[i].querySelectorAll('li').length}`);
}
