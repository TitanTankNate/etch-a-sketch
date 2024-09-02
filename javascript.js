let isMouseDown = false;

// Mouse "drag" handling for drawing via mouseover listener later
document.body.onmousedown = () => {
    isMouseDown = true;
};
document.body.onmouseup = () => {
    isMouseDown = false;
};

// Create default grid on page refresh
createGrid(16);

// Create event listener for custom grid size button
const gridSizeButton = document.querySelector(".grid-size-button");
gridSizeButton.addEventListener("click", () => {
    // Select all current grid blocks
    const allSelectedGridBlocks = document.querySelectorAll(".grid-box");
    // Delete all grid blocks
    allSelectedGridBlocks.forEach((selectedGridBlock) => {
        selectedGridBlock.remove();
    });

    // Request new grid size from user
    let readyToInitialize = false;
    do {
        let userGridSizeChoice = parseInt(prompt("Select a grid size between 2 and 100."));

        // Handle user input.  Grid constraints are 2 to 100, inclusive
        if (userGridSizeChoice < 2) {
            alert("Cannot create etch-a-sketch grid with only one square.");
        } else if (userGridSizeChoice > 100) {
            alert("Cannot create grids larger than 100x100.");
        } else {
            // Create grid of user's choice of size
            createGrid(userGridSizeChoice);
            readyToInitialize = true;
        }
    } while (!readyToInitialize);   // This loop only exits if the user input is valid

});


// Function: createGrid
// // This function creates a gridSize x gridSize grid of transparent black squares
function createGrid(gridSize) {
    // Select parent container
    const container = document.querySelector(".container");

    // Create gridSize x gridSize grid of divs
    for (let i=1;i<=(gridSize ** 2);i++) {
        // Create single grid block
        // // Create div
        const gridBlockTemplate = document.createElement("div");
        gridBlockTemplate.classList.add("grid-box");
        gridBlockTemplate.id=`${i}`;

        // // Make div square
        gridBlockTemplate.style.display = "flex";
        gridBlockTemplate.style.flex = "1 1 auto";
        gridBlockTemplate.style.boxSizing = "border-box";
        gridBlockTemplate.style.aspectRatio = "1";
        gridBlockTemplate.style.minWidth = `${800/gridSize}px`;

        // // Style grid block
        gridBlockTemplate.style.backgroundColor = "#000000";
        gridBlockTemplate.style.opacity = 0;

        // Append child
        container.appendChild(gridBlockTemplate);
    }

    // Set up event listener to handle popover events for each grid
    const allGridBlocks = document.querySelectorAll(".grid-box");
    allGridBlocks.forEach((gridBlock) => {
        gridBlock.addEventListener("mouseover", () => {
            // If user mouses over a box without holding down LMouse, do nothing
            if (isMouseDown) {
                gridBlock.style.opacity = parseFloat(gridBlock.style.opacity) + 0.1;
            };
        });
    });
}

