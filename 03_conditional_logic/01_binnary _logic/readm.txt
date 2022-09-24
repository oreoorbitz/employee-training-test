In this module, the client wants to reveal a list of bundles and their prices for a product, they only want the customer to be able to see the list if they read the imaginary terms of service.
So if the client clicks on display like, and the checkbox is not checked, then do not display the list, and instead display the warning, "please ready terms of service".
If the terms of service is checked, display the list.
When displaying the list, you want to make sure its formatted correctly, the client wants to display how much someone is pay per unit, not the price of purchasing a bundle
However, the price being displayed is the price per the bundle, not price per unit!
You must do the following with the list:
Take the numerical value of data-component-price, and divide that by the numerical value at the start of  data-component-title
Then take the resulting value and replace the text of data-component price with this new value, be sure to the result has the dollar formatting in it, like $50
One of the titles in the list doesn't follow the same convention as the others, the client just wants that to be a single sample.
When the title doesn't start with a number, do not change the price, and replace the price text with just "price"