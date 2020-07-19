const mainGridContainer = document.querySelector('#mainGridContainer');
const resetGrid = document.querySelector('#resetGrid');
const randomColour = document.querySelector('#randomColour')
const grayScale = document.querySelector('#grayScale');






let resetFunction = () => {

    let mainGridContainer = document.getElementById('mainGridContainer');
    while (mainGridContainer.firstChild) {
        mainGridContainer.removeChild(mainGridContainer.firstChild);
    }

    gridSideLength = prompt("How many cells per side?", 16)
    buildGridFunction(numberOfCells = (gridSideLength * gridSideLength));

    const cellVariable = '--grid-sides';
    document.documentElement.style.setProperty(cellVariable, gridSideLength);

};
resetGrid.addEventListener('click', resetFunction);




let colourFunction = () => {

};
randomColour.addEventListener('click', colourFunction);

let grayscaleFunction = () => {
    alert("grayscale");
};
grayScale.addEventListener('click', grayscaleFunction);

let buildGridFunction = () => {

    for (let i = 0; i < numberOfCells; i++) {

        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = 'lightblue';
        mainGridContainer.appendChild(cell);
        cell.addEventListener('mouseover', cellHover)

    }

    console.log(gridSideLength);
    console.log(numberOfCells);

};

let cellHover = (cell) => {

    cell.target.style.backgroundColor = 'RED';
};