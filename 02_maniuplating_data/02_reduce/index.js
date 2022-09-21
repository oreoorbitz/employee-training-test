// store every product card to a variable, using querySelectorAll
const cards = document.querySelectorAll("article")
// convert that variable to an array, because querySelectorAll doesn't return an array
const cardsArr = Array.from(cards)
/* create a function that takes an array. In the function, map through the array of
DOM elements, and extract the price and quantity of each card. multiply the price by
the quantity, and return the result */
const product = (arr) => arr.map(card => card.querySelector('[data-component-price]').innerText * card.querySelector('[data-component-quantity]').innerText)
// add a click event listener for the get "Update total" button
// use the function you made above to take all the product cards output the total for each product.
// use the reduce function to iterate through the array of product totals, and sum all these into a cart total
// inject the cart total as the innerText of the data-component-total element
const updateTotalBtn = document.querySelector('[data-component-update]')
updateTotalBtn.addEventListener('click', (event) => {
  const cartTotal = product(cardsArr).reduce((sum) => sum + price)
  console.log(5)
})
