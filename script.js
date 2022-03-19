// Declare global variables
let numRows = 3;
let numCols = 3;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
    let table = document.getElementById("grid").children[0]; // select the table
    let newRow = table.insertRow(); // create a new roll
    for (let i = 0; i < numCols; i++) newRow.insertCell();
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
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