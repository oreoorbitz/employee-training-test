const cards = document.querySelectorAll("article")
const cardsArr = Array.from(cards)
const updateTotalBtn = document.querySelector('[data-component-update]')
const total = document.querySelector('[data-component-total]')

const getProductTotal = (arr) => arr.map(card => {
  const price = card.querySelector('[data-component-price]').innerText
  const quantity = card.querySelector('[data-component-quantity]').innerText
  return price * quantity
})

updateTotalBtn.addEventListener('click', (event) => {
  const cartTotal = getProductTotal(cardsArr).reduce((sum, product) => sum + product)
  total.innerText = cartTotal
})

// store every product card to a variable, using querySelectorAll
// convert that variable to an array, because querySelectorAll doesn't return an array
/* create a function that takes an array. In the function, map through the array of
DOM elements, and extract the price and quantity of each card. multiply the price by
the quantity, and return the result */
// add a click event listener for the get "Update total" button
// use the function you made above to take all the product cards output the total for each product.
// use the reduce function to iterate through the array of product totals, and sum all these into a cart total
// inject the cart total as the innerText of the data-component-total element
