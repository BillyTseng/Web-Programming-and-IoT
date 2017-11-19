function responseHandler(data) {
   console.log("Data handled");
}

var requestData = { "zip": "90210" };
$.get(

   /* Your solution goes here */
   "https://wp.zybooks.com/weather.php", requestData, responseHandler, "json"

);
