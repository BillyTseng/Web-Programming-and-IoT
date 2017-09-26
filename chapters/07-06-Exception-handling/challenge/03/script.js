/* Add a finally statement that displays "Execution ended.". */

var numList = [ 1, 2, 5, 7 ]; // Code will be tested with different arrays.
var processedValue = 0;

try {
   processedValue = processNumbers(numList);
}
catch (exception) {
   processedValue = -1;
}

/* Your solution goes here */
finally {
   console.log("Execution ended.");
}
