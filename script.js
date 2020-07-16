const mainGridContainer = document.querySelector('#mainGridContainer');
const square = document.createElement('div');

//function to appends 256 squares to document
function buildGrid() {

    for (i = 0; i < 256; i++) {

        const square = document.createElement('div');
        square.classList.add('square');
        mainGridContainer.appendChild(square);
        square.addEventListener('mouseover', alertFunction);
    }
}
buildGrid();

//changes background colour of class square, called by function buildGrid
function alertFunction(square) {

    square.target.style.background = 'blue';

}


//resets grid prompts for grid size
function reset(square) {

    square.target.style.background = 'white';

}