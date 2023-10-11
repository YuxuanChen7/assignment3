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
