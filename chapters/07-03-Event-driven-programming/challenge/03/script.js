/* Write and register an event handler that changes the font size of the h1 tag to 33 on mouseover. */

var h1Element = document.getElementsByTagName("h1")[0];

/* Your solution goes here */
h1Element.addEventListener("mouseover", function() {
   h1Element.style.fontSize = 33;
});
