const logEl = document.querySelector('[data-component-count]')
const logTo = el => value => el.innerText = value
const logToDOM = logTo(logEl)

logToDOM('count goes here!')

// create an event listener to listen for the custom "DOM:updated" event
// In the callback for the eventlistener, take the current innerText of the count and increase the count by 1, then set that new count as the inner text

