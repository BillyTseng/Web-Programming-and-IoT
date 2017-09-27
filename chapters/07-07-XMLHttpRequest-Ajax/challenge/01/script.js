/* Store a new XMLHttpRequest object in the xhr variable, then assign
requestHandler function as the "load" event listener. */
function requestHandler() {
   console.log("handling response: " + this.responseText);
}

/* Your solution goes here */
var xhr = new XMLHttpRequest();
xhr.addEventListener("load", requestHandler);
