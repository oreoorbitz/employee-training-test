Is this module we are going to look at another way to create HTML elements, copying from a Content Template element
the key idea of a using a template tag is to just copy the template tag,
edit it if needed, then inject where needed, you don't parse a string, and you don't create DOM elements with the createElement method.

The difference between using a template tag, and just a regular div
is that a template tag is not rendered when the page loads, and is not visible.
This saves on loading performance, and saves you the bother of a hiding the template element.


Much like the last task, take the content of the template element, copy it, 
then replace the data with the data from the results of the imaginary API