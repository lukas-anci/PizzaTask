console.log('pizza');

const formEl = document.getElementById('form');
const nameEl = document.getElementById('name');
const priceEl = document.getElementById('price');
const heatEl = document.getElementById('heat');
const toppingsEl = document.getElementById('toppings');
const photoEl = document.getElementById('photo');
const cardContainerEl = document.querySelector('.card-container');
const errorEl = document.getElementById('error');
const removeEl = document.querySelector('.removeBtn');

removeEl.addEventListener('click', () => {
  storage.removeItem('pizza');
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const pizzaToCreate = {
    name: nameEl.value,
    price: priceEl.value,
    heat: heatEl.value,
    toppings: toppingsEl.value,
    photo: photoEl.value,
  };

  if (nameEl.value < 3 || priceEl.value < 0) {
    return;
  }

  console.log(pizzaToCreate);

  cardContainerEl.innerHTML += `<div class="card">
  <h5>${pizzaToCreate.name}</h5>
  <h5>${pizzaToCreate.price}</h5>
  <h5>${pizzaToCreate.heat}</h5>
  <h5>${pizzaToCreate.toppings}</h5>
  <img src=${pizzaToCreate.photo} alt="pizza">
  <br/>

  <button class='removeBtn'>Remove</button>
  
  
  
</div>`;

  sessionStorage.setItem('pizza', JSON.stringify(pizzaToCreate));
  document.getElementById('btnsubmit').value = '';
});
