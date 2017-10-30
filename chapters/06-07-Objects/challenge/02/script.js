/* Define a method named roleOf that receives the name of an actor and returns
 that actor's role. If the actor is not in the movie return "Not in this movie.".
  Ex: roleOf("Viggo Mortensen") returns "Aragorn". Hint: A method may access the
   object's properties using the keyword this. Ex: this.cast accesses the
    object's cast property. */

var movie = { // Code will be tested with different actors and movies
   name: "The Lord of the Rings: The Fellowship of the Ring",
   director: "Peter Jackson",
   composer: "Howard Shore",
   cast: {
      "Elijah Wood": "Frodo Baggins",
      "Sean Astin": "Samwise Gamgee",
      "Ian McKellen": "Gandalf",
      "Viggo Mortensen": "Aragorn",
      "Orlando Bloom": "Legolas",
      "Christopher Lee": "Saruman"
   },
   roleOf: function(actorName) {

      /* Your solution goes here */
      if (this.cast[actorName])
        return this.cast[actorName];
      else
        return "Not in this movie.";
   }
};
