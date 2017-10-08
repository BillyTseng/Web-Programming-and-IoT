/* Assign jsonData with the parsed value of the stringStructure variable.
 Then, assign "Shooting guard" to the position property in jsonData and assign
  stringStructure with the stringified version of jsonData. */
var stringStructure = '{ "name": "Michael Jordan", "height": { "ft": 6, "in": 6 }, "points": 25, "position": "Power forward" }';

/* Your solution goes here */
var jsonData = JSON.parse(stringStructure);
jsonData.position = "Shooting guard";
stringStructure = JSON.stringify(jsonData);
