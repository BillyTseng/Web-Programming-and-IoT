// Test data
var response = {
   "success": true,
   "forecast":[
      { "high": "88", "low": "72", "desc": "cloudy" },
      { "high": "95", "low": "70", "desc": "sunny" },
      { "high": "89", "low": "67", "desc": "rain" },
      { "high": "90", "low": "68", "desc": "cloudy" },
      { "high": "91", "low": "70", "desc": "partly cloudy" }
   ]
};

$("button").click(function() {
   // Get the ZIP code from the text field
   var zip = $("#zip").val();
   var html = "";
   // Make an Ajax request to weather.php with the entered ZIP code
   var requestData = { zip: zip };
   $.get("https://wp.zybooks.com/weather.php", requestData, function(data) {
      if (data.success === false) {
         $("#forecast").html(data.error);
      } else {
         html += "<h3>Forecast</h3>";
         html += "<ol>";
         data.forecast.forEach(function(element) {
             html += "<li>" + element.desc + ": High is " + element.high + ", low is " + element.low + "</li>";
         });
         html += "</ol>";
         $("#forecast").html(html);
      }
   }, "json").fail(function(jqXHR) {
      $("#forecast").html("There was a problem contacting the server: " + jqXHR.status);
   });
});
