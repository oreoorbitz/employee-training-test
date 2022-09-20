const logEl = document.querySelector('[data-component-log]')
const logTo = el => value => el.innerText = value
const logToDOM = logTo(logEl)

const logToConsole = string => console.log(string)

logToDOM(' Log will go here')

// create a variable to store "click me" button
// create a variable to store type in me input

// Create event listener to check for clicks on the "click me" button
// Inside of the click event callback, get the inner Text of the  button and insert it to the DOM using the logToDOM function

// After executing the logToDOM function, dispatch a new event, called "DOM:updated", dispatch event to the document