let isMouseDown = false;

document.body.onmousedown = () => {
    isMouseDown = true;
};
document.body.onmouseup = () => {
    isMouseDown = false;
};


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
        gridBlockTemplate.style.backgroundColor = "#000000";
        gridBlockTemplate.style.opacity = 0;

        // // Style grid block
        // gridBlockTemplate.style.borderStyle = "solid";
        // gridBlockTemplate.style.borderColor = "#00FF00";
        // gridBlockTemplate.style.borderWidth = "2px";
        // gridBlockTemplate.textContent = '';

        // Append child
        container.appendChild(gridBlockTemplate);
    }

}

createGrid(100);

const allGridBlocks = document.querySelectorAll(".grid-box");
allGridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseover", () => {
        if (isMouseDown) {
            gridBlock.style.opacity = parseFloat(gridBlock.style.opacity) + 0.1;
        };
    });
});