// List Button
let navLinks = document.querySelector('.nav-links');
let listBtn = document.querySelector('.list-btn i');
// Quantity Input with icrease & decrease buttons
let quantity = document.querySelectorAll('[name="quantity"]');
let increaseBtn = document.querySelectorAll('.increase');
let decreaseBtn = document.querySelectorAll('.decrease');
// Total Price
let total = document.querySelectorAll('td .total');
let price = document.querySelectorAll('td .price');
// Update Cart Button
let updateCartBtn = document.querySelector('.update-cart');
let proceedCheckoutBtn = document.querySelector('.proceed-checkout');
// Remove Product
let removeProduct = document.querySelectorAll('.remove');
// Cart Totals
let subtotal = document.querySelector('.subtotal');
let allTotals = document.querySelector('.all-totals');

// List button when screen is small
listBtn.onclick = () => {
  if (listBtn.classList.contains('fa-bars')) {
    listBtn.classList.remove('fa-bars');
    listBtn.classList.add('fa-xmark');
    navLinks.classList.add('active');
  } else {
    listBtn.classList.remove('fa-xmark');
    listBtn.classList.add('fa-bars');
    navLinks.classList.remove('active');
  }
}

// Increase quentity number
increaseBtn.forEach((e, index) => {
  e.onclick = () => {
    quantity[index].value = +quantity[index].value + 1;
    decreaseBtn[index].disabled = false;
  }
})

// Decrease quentity number
decreaseBtn.forEach((e, index) => {
  e.onclick = () => {
    quantity[index].value = +quantity[index].value - 1;
    if (quantity[index].value == 0) { decreaseBtn[index].disabled = true }
    else { decreaseBtn[index].disabled = false }
  }
})

// Calculate total price when clicked on Update cart button
updateCartBtn.onclick = () => {
  let totalPrice = 0;
  total.forEach((e, index) => {
    e.textContent = (+quantity[index].value * +price[index].textContent).toFixed(2);
    if (!e.parentElement.parentElement.classList.contains('hide')) {
      totalPrice += +e.textContent;
    }
  })
  subtotal.textContent = totalPrice.toFixed(2);
  allTotals.textContent = totalPrice.toFixed(2);
}

// Remove Product 
removeProduct.forEach(e => {
  e.onclick = () => {
    e.parentElement.parentElement.remove();
    check();
  }
})

// Check if there are rows in table or not
function check() {
  if (document.querySelector('tbody tr') === null) {
    document.querySelector('.table-cart').classList.add('hide');
    document.querySelector('.empty-cart').classList.remove('hide');
  }
}
