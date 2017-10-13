var form = document.getElementById("userForm");

function validateForm(event) {
   var phoneNumber = form.phoneNumber.value;
   var userName = form.userName.value;

   /* Your solution goes here */
   if (phoneNumber.length !== 10) {
      console.log("Phone number is invalid");
      event.preventDefault();
   }

   if (userName.length >= 11) {
      console.log("User name is invalid");
      event.preventDefault();
   }
}

form.addEventListener("submit", validateForm);
