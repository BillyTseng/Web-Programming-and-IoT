/* Add a throw statement to the processNumbers function that throws the message
"An element in the list is not a number." if one of the elements in
numberElements is not a number. Hint: The function isNaN() returns true
if the parameter is not a number.
 */

 function processNumbers(numList) { // Code will be tested with different values of numList
    var result = 0;

    for (var index = 0; index < numList.length; index++) {

       /* Your solution goes here */
       if (isNaN(numList[index]))
          throw "Found an element that is not a number.";
       result += numList[index] * 1.3 * index;
    }

    return result;
 }
