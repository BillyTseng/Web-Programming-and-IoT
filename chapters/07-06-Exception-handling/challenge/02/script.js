/* Surround the call to processNumbers with a try-catch statement. The catch block should assign processedValue with -1. */

var numList = [ 1, 2, 5, 7 ]; // Code will be tested with different arrays.
var processedValue = 0;
try {
   processedValue = processNumbers(numList);
} catch(e) {
   processedValue = -1;
}
