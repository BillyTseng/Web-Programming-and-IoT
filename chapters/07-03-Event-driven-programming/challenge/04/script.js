/* Write a setTimeout function that changes the background color of the h3 tag to gold after waitTime */
var h3Element = document.getElementsByTagName("h3")[0];
var waitTime = 300;

setTimeout(
   /* Your solution goes here */
   function () {
      h3Element.style.background = "gold";
   }, waitTime
);
