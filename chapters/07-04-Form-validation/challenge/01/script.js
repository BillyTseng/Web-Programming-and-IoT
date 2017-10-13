function checkAgeForm(event) {
   var form = document.getElementById("pageForm");
   var userAge = form.userAge;

   userAge.style.backgroundColor = "LightGreen";
   if (userAge.value < 0) {
      userAge.style.backgroundColor = "Orange";
      event.preventDefault();
   }
}

/* Your solution goes here */
document.getElementById("pageForm").addEventListener("submit", checkAgeForm);
