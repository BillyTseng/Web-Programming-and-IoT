var validColor = "lightgreen";
var invalidColor = "orange";
var userNameInput = document.getElementById("userName");
var formWidget = document.getElementById("userForm");
var userNameValid = false;

function userNameCheck(event) {
   if (event.target.value.length > 5 && event.target.value.length < 14) {
      event.target.style.backgroundColor = validColor;
      userNameValid = true;
   } else {
      event.target.style.backgroundColor = invalidColor;
      userNameValid = false;
   }
}

userNameInput.addEventListener('input', userNameCheck);
function formCheck(event) {
   if (!userNameValid) {
      event.preventDefault();
   }
}

formWidget.addEventListener('submit', formCheck);
