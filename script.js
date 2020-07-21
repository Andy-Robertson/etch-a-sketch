const mainGridContainer = document.querySelector('#mainGridContainer');
const resetGrid = document.querySelector('#resetGrid');
const randomColour = document.querySelector('#randomColour')
const grayScale = document.querySelector('#grayScale');
let penColour = "#2c3e50";
let gridSideLength = 16;

//removes grid from DOM, calls buildGrid(), provides user feedback if minus or greater than 40 grid size input, sets --grid-sides variable in style.css
let reset = () => {
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
        penColour = "#2c3e50";
        buildGrid();
        const cellVariable = '--grid-sides';
        document.documentElement.style.setProperty(cellVariable, gridSideLength);
    }
};
resetGrid.addEventListener('click', reset);

// picks a character and appends it to variable penColour 6 times creating a colour code, called when user selects the random pen button
let colourPicker = () => {
    let character = '0123456789ABCDEF';
    penColour = '#';
    for (let i = 0; i < 6; i++) {
        penColour += character[Math.floor(Math.random() * 16)];
    }
    return penColour;
};
randColPen.addEventListener('click', colourPicker);

//sets default penColour, called when user selects default pen button
let defaultPen = () => {
    penColour = '#2c3e50';
};
defPen.addEventListener('click', defaultPen);

//sets penColour to the default grid background colour, called when the user selects the eraser button 
let erase = () => {
    penColour = '#d5d8dc';
};
erasePen.addEventListener('click', erase);

//creates the grid depending on the user input from reset(), default grid size is 16 x 16 
let buildGrid = () => {
    for (let i = 0; i < gridSideLength * gridSideLength; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = '#d5d8dc';
        mainGridContainer.appendChild(cell);
        cell.addEventListener("mouseover", cellHover);
    }
};

//changes the background colour of each cell to the hex value held in variable penColour, called by buildGrid and activated on mouse hover on a cell
let cellHover = (cell) => {
    cell.target.style.backgroundColor = penColour;
};

// builds a default grid on page load, sets variable --grid-sides on style.css 
buildGrid();
const cellVariable = '--grid-sides';
document.documentElement.style.setProperty(cellVariable, gridSideLength);