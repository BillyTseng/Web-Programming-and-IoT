/* Using the xhr variable, initialize a connection to GET
https://wp.zybooks.com/weather.php?zip=90210, set the response type to document,
 then send the request. */
 function responseReceivedHandler() {
    console.log("Response received");
 }

 var xhr = new XMLHttpRequest();
 xhr.addEventListener("load", responseReceivedHandler);

 /* Your solution goes here */
 xhr.responseType = "document";
 xhr.open("GET", "https://wp.zybooks.com/weather.php?zip=90210");
 xhr.send();
