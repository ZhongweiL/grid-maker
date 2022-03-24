// Declare global variables
let numRows = 3;
let numCols = 3;
let colorSelected; 
const table = document.getElementById("grid").children[0]; // select the table

for (const row of table.children) {
    for (const cell of row.children) {
        cell.addEventListener('click', changeColor); // add event listener for every cell
    }
}

// Add a row
function addR() {
    const newRow = table.insertRow(); // create a new roll
    for (let i = 0; i < numCols; i++) {
        const newCell = newRow.insertCell(); // add columns for the new row
        newCell.addEventListener('click', changeColor); // add event listener for every new cell
    }
    numRows++; // increment the number of rows
}

// Add a column
function addC() {
    for (const row of table.children) { // add a column for every row
        const newCell = row.insertCell();
        newCell.addEventListener('click', changeColor); // add event listener for every new cell
    }
    numCols++; // update the number of columms
}

// Remove a row
function removeR() {
    if (numRows == 0) return; // do nothing if the number of rows is 0
    table.deleteRow(-1); // remove the last row
    numRows--; // update number of rows
}

// Remove a column
function removeC() {
    if (numCols == 0) return; // do nothing if the number of columns is 0
    const table = document.getElementById("grid").children[0]; // select the table
    for (const row of table.children) { // remove the last column for every row
        row.deleteCell(-1);
    }
    numCols--; // update number of cols
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    for (const row of table.children) {
        for (const cell of row.children) {
            // fill the cell with the selected color if there isn't already a color
            if (!cell.style.backgroundColor) cell.style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    for (const row of table.children) {
        for (const cell of row.children) {
            // fill the cell with the selected color
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

// Change color on click
function changeColor() {
    this.style.backgroundColor = colorSelected;
}