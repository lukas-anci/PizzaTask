console.log('pizza');

const formEl = document.getElementById('form');
const nameEl = document.getElementById('name');
const priceEl = document.getElementById('price');
const heatEl = document.getElementById('heat');
const toppingsEl = document.getElementById('toppings');
const photoEl = document.getElementById('photo');
const cardContainerEl = document.querySelector('.card-container');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('sent');

  const pizzaToCreate = {
    name: nameEl.value,
    price: priceEl.value,
    heat: heatEl.value,
    toppings: toppingsEl.value,
    photo: photoEl.value,
  };

  console.log(pizzaToCreate);

  cardContainerEl.innerHTML += `<div class="card">
  <h5>${pizzaToCreate.name}</h5>
  <h5>${pizzaToCreate.price}</h5>
  <h5>${pizzaToCreate.heat}</h5>
  <h5>${pizzaToCreate.toppings}</h5>
  <img src=${pizzaToCreate.photo} alt="pizza">
  
</div>`;

  return pizzaToCreate;
});
