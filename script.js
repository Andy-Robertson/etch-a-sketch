const mainGridContainer = document.querySelector('#mainGridContainer');


//function to appends 256 squares to document
function buildGrid() {
    for (i = 0; i < 256; i++) {

        const square = document.createElement('div');
        square.classList.add('square');
        mainGridContainer.appendChild(square);
    }
}
buildGrid();