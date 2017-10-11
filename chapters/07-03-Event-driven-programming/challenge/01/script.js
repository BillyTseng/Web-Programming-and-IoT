/* Register the updateCount event handler to handle blur changes for the input
 tag. Note: The function counts the number of characters in the input.*/

var inputElement = document.getElementById("yourName");

function updateCount(event) {
   document.getElementById("stringLength").innerHTML = event.target.value.length;
}

/* Your solution goes here */
inputElement.addEventListener("blur", updateCount);
