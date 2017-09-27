/* Display "unauthorized" if the response's status is 401. Otherwise,
 display "not unauthorized". */
 function responseReceivedHandler() {

    /* Your solution goes here */
    if (this.status === 401) {
       console.log("unauthorized");
    } else {
       console.log("not unauthorized");
    }

 }

 var xhr = new XMLHttpRequest();
 xhr.addEventListener("load", responseReceivedHandler);
 xhr.addEventListener("error", responseReceivedHandler);
 xhr.open("GET", "https://wp.zybooks.com/weather.php?zip=90210");
 xhr.send();
