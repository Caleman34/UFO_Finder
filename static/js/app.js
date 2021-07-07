var tableData = data;
var tbody = d3.select("tbody");

// read data from data.js into table on html using JS
tableData.forEach(function(ufoData) {
  console.log(ufoData);
  var row = tbody.append("tr");

  Object.entries(ufoData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

console.log(tableData);

// filter the data
var form = d3.select("#datetime");
var button = d3.select("#filter-btn");

// Assign handler function to target objects in HTML file
form.on("submit", runFilter);
button.on("click", runFilter);

// Declare handler function
function runFilter() {
  d3.event.preventDefault();
  // assign input value in the form to variable
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
  // empty the table object before appending filter results
  tbody.html("");
  // Filter sightings to specified date
  var results = tableData.filter(sighting => sighting.datetime == inputValue);
  results.forEach((uforesults) => {
    var row = tbody.append("tr");
    Object.entries(uforesults).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  }