const grid = document.getElementById("grid");

/*
Question 1
Expected: add a new row to the grid
*/
document.getElementById("addRow").addEventListener("click", () => {
    const newRow = grid.insertRow();
    const currentColumns = grid.rows[0]?.cells.length || 0;

    for (let i = 0; i < currentColumns; i++) {
        newRow.insertCell();
    }
});

/*
Question 2
Expected: add a new col to the grid
*/
document.getElementById("addColumn").addEventListener("click", () => {
    for (let row of grid.rows) {
        row.insertCell();
    }
});

/*
Question 3
Expected: remove a row from the grid
*/
const removeRowButton = document.getElementById("removeRow");
removeRowButton.addEventListener("click", () => {
    if(grid.rows.length > 0){
        grid.deleteRow(grid.rows.length - 1);
    }
});


/*
Question 5
Expected: color selected is passed in from HTML to JS for other color functionalities
*/
let selectedColor = "red"; //default case
document.getElementById("colorSelect").addEventListener("change", (e) => {
    selectedColor = e.target.value;
});

/*
Question 6
Expected: cells clicked would be modified to the selected color
*/
grid.addEventListener("click", (e) => {
    if (e.target.tagName === "td") {
        e.target.style.backgroundColor = selectedColor;
    }
});

/*
Question 7
Expected: all cells would be modified to the selected color
*/
document.getElementById("colorAll").addEventListener("click", () => {
    for (let row of grid.rows) {
        for (let cell of row.cells) {
            cell.style.backgroundColor = selectedColor;
        }
    }
});

/*
Question 8
Expected: all uncolored cells would be modified to the selected color
*/
document.getElementById("colorUncolored").addEventListener("click", () => {
    for (let row of grid.rows) {
        for (let cell of row.cells) {
            if (!cell.style.backgroundColor) {
                cell.style.backgroundColor = selectedColor;
            }
        }
    }
});

/*
Question 9
Expected: all cells would be modified to uncolored
*/
document.getElementById("removeColor").addEventListener("click", () => {
    for (let row of grid.rows) {
        for (let cell of row.cells) {
            cell.style.backgroundColor = ''; 
        }
    }
});
