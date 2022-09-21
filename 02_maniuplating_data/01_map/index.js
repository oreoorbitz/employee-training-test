// Create a variable containing all the buttons that have the data-component-button attribute
const buttons = document.querySelectorAll('[data-component-button]')
buttons.forEach((button) => {
  button.addEventListener('click', )
})

// Iterate through all these buttons using a forEach

// Create event listener to check for clicks on the buttons

/*
inside of the click event callback dispatch event to the document. When creating this event, create a detail object to pass into the custom event
Inside of a detail object, add a property with a key of "data", and a value of the data-id dataset attribute, then another property, with a key of "time",
and value of the current time, using the Date class, and lastly title, with value of the innerText of the button
*/
