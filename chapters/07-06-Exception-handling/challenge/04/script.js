/* Throw a RangeError exception if any of the numbers is less than -10.
Throw a TypeError exception if the parameter is not an array.
Hint: Use Array.isArray(numList) to check if numList is an array. */

function processNumbers(numList) { // Code will be tested with different values of numList
   var result = 0;
   if (!Array.isArray(numList))
      throw new TypeError("Not a array");
   for (var index = 0; index < numList.length; index++) {
      if (numList[index] < -10)
         throw new RangeError("Less than -10");
      result += numList[index] * 1.3 * index;
   }
   return result;
}
