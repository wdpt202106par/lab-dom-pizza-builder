// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(sauce=> {
    if (state.whiteSauce===true){
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust=> {
    if (state.glutenFreeCrust){
      crust.style.visibility = 'hidden';
    } else {
      crust.style.visibility = 'visible';
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // 1. pour le bouton pepperoni: si son state est vrai => rajouter la classe active / sinon lui enlever
  // 2. pour le bouton mushrooms: si son state est vrai => rajouter la classe active / sinon lui enlever
  // 3. pour le bouton greenpeppers: si son state est vrai => rajouter la classe active / sinon lui enlever
  // ...

  // 1.
  if (state.pepperoni===true){
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  }
  // 2.
  if (state.mushrooms===true){
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }
  // 3.
  if (state.greenPeppers===true){
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }
  //4.
  if (state.whiteSauce===true){
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }
  //5.
  if (state.glutenFreeCrust===true){
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
}
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const total = document.querySelector('strong');
  const panel = document.querySelector('.panel.price');
  const list = document.querySelector('.panel.price ul');
  const allIng = document.querySelectorAll('.panel.price ul li');//[li,li,li,li,li]
  console.log(allIng);
  allIng.forEach(ing=>ing.style.textDecoration='line-through')  ;
  let sum = 10;
  for (let i=0;i<allIng.length;i++){
    if (allIng[i].innerHTML==='$1 pepperoni' && state.pepperoni){
      allIng[i].style.textDecoration='none';
      sum++; 
    } 
    if (allIng[i].innerHTML==='$1 mushrooms' && state.mushrooms){
      allIng[i].style.textDecoration='none';
      sum++;
    } 
    if (allIng[i].innerHTML==='$1 green peppers' && state.greenPeppers){
      allIng[i].style.textDecoration='none';
      sum++;
    } 
    if (allIng[i].innerHTML==='$3 white sauce' && state.whiteSauce){
      allIng[i].style.textDecoration='none';
      sum+=3;
    } 
    if (allIng[i].innerHTML==='$5 gluten-free crust' && state.glutenFreeCrust){
      allIng[i].style.textDecoration='none';
      sum+=5;
    } 
  }
  total.innerHTML=`$${sum}`;
}
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',()=>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click',()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click',()=>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click',()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});