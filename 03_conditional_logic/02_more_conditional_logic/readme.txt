So, the imaginary client has hired you to to do some ADA fixes for his website, because of time constraints, 
he wants you to use javascript to automatically make certain features compliant, instead of changing the HTML.
The client will be changing around content very often, so we will not use specific js files for specific pages, 
instead we will use a single javascript file, that should work on any page, and not break any feature.

please implement the following features in global.js, they should work on every page that needs them, and if a page doesn't need them, 
the features shouldn't break the functionality of the website:

1. Add an alt tag to every image, by using the name of the image file in the src tag of the image,
make sure the alt tag text doesn't have any url path information in it, or the file name of the image, 
just the name of the image file, carefull, their are some broken images around, that the client wants to keep because they are insane!

2. For some insane reason, all the anchor tags are not using a <a> tag, instead they are just divs, with the class "button".
 add an aria-role="link' to every button

3. some buttons will have a class of "button" but also a class of "submit", these should not have a role of link, but instead aria-role="button"

4. The headings on the side are not using proper semantic tags, like h1 and h2, instead, they are divs with the class of "heading".
Add aria-role="heading" to every element with the "heading class", and also, an aria-level attribute, with a value depending on the order of the element, 
so the first element with the "heading" would have an aria-level of "1", and the second of "2", and so often

5. For some insane reason, some elements that aren't supposed to have the heading role have the heading class, but these all have a number in the text, 
so any element with a class of "heading" and a text content that includes a number should not have the aria-role="heading" added!

For this task, you can not make any changes to the HTML