/* Use a replacer array of JSON.stringify to return only the month and day
 properties of jsonData, and assign stringData with the result. */

var jsonData = { "year": 2017, "month": 2, "day": 3, "hour": 5, "minute": 32 };

/* Your solution goes here */
var stringData = JSON.stringify(jsonData, ["month", "day"]);
