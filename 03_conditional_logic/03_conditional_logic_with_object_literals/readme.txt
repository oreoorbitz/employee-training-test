Create a small library to turn convert a div that supposed to be a certain element, in that element, 


That that is to say, a developer can use the library to convert a div, into a button

the function will only need to support 3 elements at the moment

Buttons

Links

and images

The library will have an endpoint function that takes in a single parameter, 
a DOM element.

It will take the inputted DOM element,
create a new DOM element that is the matching tag type for what the inputted element is supposed to be
So if an element that is supposed to be a button is inputted, a button element will be created.
the created button element will then have the information from the input, such as the src and alt if it is an image, 
the action and innerText if it a button,  and the href and innerText if it is a link, and so on.

All the inputted DOM elements will have data attributes that need to be converted to real attributes in the new element.

data-src will be converted to a regular src attribute in the newly created element

After the new element is properly created, the library will replace the existing DOM element in place, with the new Dom element.

The main goal of this exercise to avoid using excessive if statements, or case statements, instead, 
use object literals as a way to organize which functions will execute in which scenario given the input

you can place functions inside objects, and if you use dot notation to search for a key that does not exist in an object, 
the object will return undefined.