// from data.js
var tableData = data;

//Get reference to table 
var tbody = d3.select("#tbody");

//Get reference to form
var dateSearch = d3.select("#form");

//Get reference to button
var button = d3.select("#filter-btn");

//Create event handler
button.on("click", runFilter);


function runFilter() {
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");

    //Get the value property of the input element
    var dateValue = dateElement.property("value");

    //Clear existing data
    tbody.html("");

    //Filter the data table
    var filteredData = tableData.filter(sighting => sighting.datetime === dateValue);

    //Loop through filter results
    filteredData.forEach(function(sighting) {
        //append row for each object
        var row = tbody.append("tr");
    
        //log each value and append to row
        Object.entries(sighting).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        });
        
    });
    console.log(filteredData);
}
