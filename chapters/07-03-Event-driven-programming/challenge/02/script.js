/* Write and register an event handler that displays "Event fired" on the
 console log when the p receives a click event. */

var pElement = document.getElementsByTagName("p")[0];

/* Your solution goes here */
pElement.addEventListener("click", function() {
   console.log("Event fired");
});
