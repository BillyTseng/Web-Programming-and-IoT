/* If "success" is true, display the first todo item. Otherwise, display the response's "error". */
function responseReceivedHandler() {
   /* Successful request:
      {
         "success": true,
         "todos": [
            [ '...', ... ]
         ]
      }

      Unsuccessful request:
      {
         "success": false,
         "error": "..."
      } */

   /* Your solution goes here */
   if (this.response.success)
      console.log(this.response.todos[0]);
   else
      console.log(this.response.error);
}

var xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.addEventListener("load", responseReceivedHandler);
xhr.open("GET", "https://wp.zybooks.com/todos.php?day=Monday");
xhr.send();
