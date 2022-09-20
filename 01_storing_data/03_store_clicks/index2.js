
// Create a variable containing the "No click me!" button
// create a variable to store "No click me!" button

// Create event listener to check for clicks on the "No click me!" button
// Inside of the click event callback, get the inner Text of the  button and insert it to the DOM using the logToDOM function

/* 
After executing the logToDOM function, dispatch a new event, called "DOM:updated", 
dispatch event to the document. When creating this event, create a detail object to pass into the custom event
Inside of a detail object, add a property with a key of "text", and a value of the innerText of the button, then another property, with a key of "time", and value of the current time, using the Date class
*/