After we log a user's interaction and store information resulting from that interaction, 
we will want to modify that information.
Map is a built in higher order function. 
A higher order function being a function that accepts a function as it's parameter.
Map is part of the array prototype, so we can execute it using dot notation on any array, like array.map().
It will iterate over the array, 
executing the function that was inputed as it's parameter and it will return a new array containing the result of that function

Take for example:

const doNothing = (list) => list

const listOfLists = [imagine an array containing lists]

// each individual list inside of listOfLists is being passed to doNothing
const resultingArray = listOfLists.map(doNothing)

resultingArray array would be exactly the same as listOfLists

const makeAwesome = list => makeListAwesome(list)

const awesomeArray = listOfLists.map(makeAwesome)\

awesomeArray would have an array of awesome lists

You can also pass an anonymous function to a higher order function, that is.

an anonymous arrow function would look like this:
() => {console.log()}

so you can do something like:

const newList = listOfLists.map( (list) => makeNew(list)  )

