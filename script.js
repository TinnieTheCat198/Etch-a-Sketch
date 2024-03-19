const container = document.querySelector(".container");
const rows = document.getElementsByClassName("grid-row");
const cells = document.getElementsByClassName("cell");

function createGrid(rowNum, colNum){
    createRow(rowNum);
    const rows = document.getElementsByClassName("grid-row");
    createColumn(colNum);
}

function createRow(rowNum){
    for(let r = 0; r < rowNum; r++){
        const row = document.createElement("div");
        row.className = "grid-row";
        container.appendChild(row);
    }
}

function createColumn(colNum){
    let rowNum = rows.length;
    for(let r = 0; r < rowNum; r++){
        for(let c = 0; c < colNum; c++ ){
            const cell = document.createElement("div");
            cell.className="cell";
            rows[r].appendChild(cell);
        }
    }
}

createGrid(16,16);