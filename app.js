console.log('new start');

// Pizza class

class Pizza {
  constructor(id, name, price, heat, toppings, photo) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.heat = heat;
    this.toppings = toppings;
    this.photo = photo;
  }
  static generateId() {
    return 'pizza_' + Math.ceil(Math.random() * (100000 - 0) + 0);
  }
}

// Ui class

class UI {
  constructor() {
    this.pizzas = [];
  }
  addPizzaToArr(pizza) {
    this.pizzas.push(pizza);
  }
  static displayPizza() {
    const pizzas = Store.getPizzas();
    pizzas.forEach((pizza) => UI.addPizza(pizza));
  }

  static addPizza(pizza) {
    const container = document.querySelector('.card-container');

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
    <h5>Name: ${pizza.name}</h5>
    <h5>Price: ${pizza.price}</h5>
    <h5>Heat:${pizza.heat}</h5>
    <h5>Toppings:${pizza.toppings}</h5>
    <img src=${pizza.photo} alt="pizza">
    <br/>
  
    <a href=# data-id=${pizza.id} class = 'btn delete'>Remove</a>
    `;
    container.appendChild(card);
  }

  static deletePizza(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert() {
    const div = document.createElement('div');
    div.className = 'modal';
  }

  static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#price').value = '';
  }
}

// Store Class

class Store {
  static getPizzas() {
    let pizzas;
    if (sessionStorage.getItem('pizzas') === null) {
      pizzas = [];
    } else {
      pizzas = JSON.parse(sessionStorage.getItem('pizzas'));
    }
    return pizzas;
  }

  static addPizza(pizza) {
    const pizzas = Store.getPizzas();
    pizzas.push(pizza);

    sessionStorage.setItem('pizzas', JSON.stringify(pizzas));
  }
  static removePizza(id) {
    const pizzas = JSON.parse(JSON.stringify(Store.getPizzas()));

    const filter = pizzas.filter((item) => item.id !== id);
    sessionStorage.setItem('pizzas', JSON.stringify(filter));
  }
}

// display pizza

document.addEventListener('DOMContentLoaded', UI.displayPizza);

//  add pizza

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  //values
  const id = Pizza.generateId();
  const name = document.querySelector('#name').value;
  const price = document.querySelector('#price').value;
  const heat = document.querySelector('#heat').value;
  const toppings = document.querySelector('#toppings').value;
  const photo = document.querySelector('#photo').value;

  // Validation

  if (name.length === 0 || name.length > 30 || price < 0) {
    alert('Invalid form entry');
  } else {
    const pizza = new Pizza(id, name, price, heat, toppings, photo);

    UI.addPizza(pizza);
    Store.addPizza(pizza);
    UI.clearFields();
  }
});

// Event remove pizza

document.querySelector('.card-container').addEventListener('click', (e) => {
  UI.deletePizza(e.target);
  Store.removePizza(e.target.dataset.id);
  console.log(e.target.dataset.id);
});
