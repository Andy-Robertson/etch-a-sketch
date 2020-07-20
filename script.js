const mainGridContainer = document.querySelector('#mainGridContainer');
const resetGrid = document.querySelector('#resetGrid');
const randomColour = document.querySelector('#randomColour')
const grayScale = document.querySelector('#grayScale');
let penColour = "#2c3e50";
let gridSideLength = 16;

let resetFunction = () => {
    let mainGridContainer = document.getElementById('mainGridContainer');
    while (mainGridContainer.firstChild) {
        mainGridContainer.removeChild(mainGridContainer.firstChild);
    }
    gridSideLength = prompt("How many cells per side between 1 and 40?", 16);
    if (gridSideLength > 40) {
        alert("Try again too many cells, must be between 1 and 40.", 16);
    } else if (gridSideLength <= 0) {
        alert("Try again too few cells, must be a positive number between 1 and 40.", 16);
    } else {
        penColour = "black";
        buildGridFunction();
        const cellVariable = '--grid-sides';
        document.documentElement.style.setProperty(cellVariable, gridSideLength);
    }
};
resetGrid.addEventListener('click', resetFunction);

let colourPicker = () => {
    let character = '0123456789ABCDEF';
    penColour = '#';
    for (let i = 0; i < 6; i++) {
        penColour += character[Math.floor(Math.random() * 16)];
    }
    return penColour;
};
randColPen.addEventListener('click', colourPicker);

let defaultPen = () => {
    penColour = '#2c3e50';
};
defPen.addEventListener('click', defaultPen);

let erase = () => {
    penColour = '#d5d8dc';
};
erasePen.addEventListener('click', erase);

let buildGridFunction = () => {
    for (let i = 0; i < gridSideLength * gridSideLength; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = '#d5d8dc';
        mainGridContainer.appendChild(cell);
        cell.addEventListener("mouseover", cellHover);
    }
};

let cellHover = (cell) => {
    cell.target.style.backgroundColor = penColour;
};

buildGridFunction();
const cellVariable = '--grid-sides';
document.documentElement.style.setProperty(cellVariable, gridSideLength);