function parseJSONData() {
  var resultsList = document.getElementById("resultsList");
  var jsonData = document.getElementById("jsonData").value;
  var jsonObj;
  try {
      jsonObj = JSON.parse(jsonData);
  } catch (ex) {
      console.log(ex.name + ": " + ex.message);
      return;
  }
  var stringHtml = "";
  stringHtml += "<ol>";

  for (var i = 0; i < jsonObj.results.length; i++) {
      stringHtml += "<li>" + jsonObj.results[i].year + ", ";
      stringHtml += jsonObj.results[i].color + ", ";
      stringHtml += jsonObj.results[i].make + ", ";
      stringHtml += jsonObj.results[i].model + "</li>";
  }

  stringHtml += "</ol>";
  resultsList.innerHTML = stringHtml;
}

document.getElementById("parseJson").addEventListener("click", parseJSONData);
