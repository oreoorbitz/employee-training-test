Javascript DOM elements have built events that are triggered during certain functions, executed when users preform certain actions, like clicking button.
We can then use the built in eventListener function to preform a callback when a function is executed.
These events are scoped globally, so to speak, if we click on a button, we can add a function in index.js, and index2.js to listen to these events. 
This allows us the benefit of separation of concern, where as we can have separate modules listening to an event, and then have the specific event object inside of the callback for that event
Often, the built in eventListener function will not work for our needs,as such we would want to dispatch a custom event.

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent