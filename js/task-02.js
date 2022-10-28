const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
ingredients.forEach(ingredient => {
const itemIngredient = document.createElement("li");
itemIngredient.textContent = ingredient
itemIngredient.classList.add("item");
list.append(itemIngredient);
});