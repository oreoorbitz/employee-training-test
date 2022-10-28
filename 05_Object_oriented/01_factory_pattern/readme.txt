For the first 3 modules in this section I will be using this article for reference:
https://medium.com/launch-school/a-comparative-guide-to-javascript-object-creation-patterns-31c9c3cfede1
You can refer to it for more detailed examples.

In this module, we will be using the factory pattern in javascript.
The factory pattern essentially is the idea of having a function return a new object, 
with with the values assigned from the arguements passed to the function

a very simpe example of a factory function would like this:

function buttonMaker (text,styles, action) {
    return {
        text,
        styles,
        action,
        create: (location) => {
          const buttonEl = document.createElement("div")
          styles.forEach( style => {
            buttonEl.style[ Object.keys(style)[0]] = Object.values(style)[0]     
          })
          buttonEl.formAction = action
          buttonEl.innerText = text
          location.append(buttonEl)
          this.timesCreated += 1
        },
        timesCreated: 0,
        _this: this
    }
}

const blueHiButton = buttonMaker('Hi!, checkout the blue page!', { backgroundColor: 'blue' }, '/blue-page.html')
const redHiButton = buttonMaker('Hi, checkout the red page!', {backgroundColor: 'red}, '/red-page.html')

blueHiButton.create(here)
redHiButton.create(there)
blueHiButton.create(everywhere)

if (blueHiButton.timesCreated > 1) {
    redHiButton.text = "Hey, you should really check out the red page!"
}

redHiButton.create(allAtOnce)

in this module, you will using the factor pattern to create a factory to organize creating new DOM elements

create a factory method, headingMaker, this will take in a text input, and a level input, which will decide if it is a h1, h2 ,or whatever

create a factory methodCalled imageMaker, this will take in a src, and an alt attribute

create a factory method called button maker, this will take in a text element.

All these above factory methods will output an object with a append function in the object. The append function will take in a target element, and append the created element(header, button, image) into the target element.

create a factor method called article, it will take in three parameters, a makeHeading parameter, which will take in the object we output from the headingMaker factory, a makeImage parameter, which will take in the object we output from imageMaker factory, and a makeButton parameter, which will take in the object we output from the buttonMaker factory.

the article object you create with the factory should have an append function, it will take in an element as it's parameter, this function will create an article element, then use the append function in the  makeImage, makeButton, and makeHeader objects to append the button, header, and image to the article, then, the created article will be appended to the target element inputed.

you can create the content to put in yourself, you only to create one article object in this example
