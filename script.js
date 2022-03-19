// Declare global variables
let numRows = 3;
let numCols = 3;
let colorSelected; 

// Add a row
function addR() {
    const table = document.getElementById("grid").children[0]; // select the table
    const newRow = table.insertRow(); // create a new roll
    for (let i = 0; i < numCols; i++) newRow.insertCell(); // add columns for the new row
    numRows++; // increment the number of rows
}

// Add a column
function addC() {
    const table = document.getElementById("grid").children[0]; // select the table
    for (const row of table.children) { // add a column for every row
        row.insertCell();
    }
    numCols++; // update the number of columms
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}