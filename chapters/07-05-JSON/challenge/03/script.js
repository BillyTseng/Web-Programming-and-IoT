/* Use a reviver function of JSON.parse to divide all even numbers by two and
assign jsonData with the result. */
var stringObject = '{ "year": 2017, "month": 8, "day": 3, "hour": 8, "minute": 38 }';

/* Your solution goes here */
var contents = document.getElementById("contents");
var jsonObject = JSON.parse(stringObject, function(k, v) {
  if (v % 2 === 0) {
    v = v/2;
    return v;
  }
  return v;
});
var text = "";
for (var i = 0; i < Object.keys(jsonObject).length; i++) {
  text += Object.keys(jsonObject)[i] + ": " + Object.values(jsonObject)[i] + "<br>";
}
contents.innerHTML = text;
