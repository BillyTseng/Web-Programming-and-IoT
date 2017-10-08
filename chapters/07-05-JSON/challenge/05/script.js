/* Use a spacer function of JSON.stringify to use 6 consecutive dashes (-)
 for indentation, and display the result on the console. */

var jsonStructure = { "day": "Thursday", "date": { "year": 2015, "month": 2, "day": 12 }, "time": { "hour": 11, "minute": 44 } };

/* Your solution goes here */
console.log(JSON.stringify(jsonStructure, null, "------"));
