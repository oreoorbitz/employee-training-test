when making a framework, it is vital to know why you are making a framework -
besides giving frontend developers anxiety because there are so many frontend frameworks to choose from -
You frame work is ultimately abstracting a often repeated action or pattern. 
Jquery took the often needed pattern of different versions of the same function for different browsers,
and abstracted that into a single function.

React took the many different approaches, or lack of good approaches that developers had to managing state, 
and data binding, and abstracted that to a concrete library, that some people call a framework.

so, in this module, you won't be creating a framework, I just used that word because it sounds better, 
but  a small little library that you might use in shopify development

a product card generator.

This library can take various different inputs to generate a doM element in a common format for product cards.
You will use a es6 class, and the resulting instance will have setter methods that let you update the state of the created card, 
whenever the state of the instance is updated, the DOM element will automatically update via 1 way data binding

You will implement separation of concerns to break up your library into multiple classes or utility functions where needed,
 and bring everything together in a end point class.