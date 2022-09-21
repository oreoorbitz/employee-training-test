const clicks = []

// create an event listener to listen for the custom "DOM:updated" event
/* Inside of the callback for the event listener, 
take the contents of the event.detail object, the text and time of the event, put these two properties into a new object and push to the clicks array
*/

// create a new function, call it clean. the function will take a an array, the clicks array. The function will return a new array, with just a single string value, consisting of the id value of the button, the title and the date, every space would be replaced with -

// execute the function with clicks as the argument, and assign to a variable, cleanClicks, console log clean clicks to test