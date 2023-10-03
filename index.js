const grid = document.getElementById("grid");

//Question 1
document.getElementById("addRow").addEventListener("click", () => {
    const newRow = grid.insertRow();
    const currentColumns = grid.rows[0]?.cells.length || 0;

    for (let i = 0; i < currentColumns; i++) {
        newRow.insertCell();
    }
});

//Question 2
document.getElementById("addColumn").addEventListener("click", () => {
    for (let row of grid.rows) {
        row.insertCell();
    }
});
