const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const items = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;

  return li;
});

document.querySelector('#ingredients').append(...items);
