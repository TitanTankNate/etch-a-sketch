// Project walkthrough
// Create 16x16 grid of square divs

// Select parent container
// Create single grid block
// Append 16^2 child grid blocks to that container
// Make sure that the grid blocks are square
// (and maybe proportional to the screen width and height?)

let num1 = (innerHeight*.9)/16-4;

// Select parent container
const container = document.querySelector(".container");

for (let i=1;i<=(16 ** 2);i++) {
    // Create single grid block
    // // Create div
    const gridBlockTemplate = document.createElement("div");

    // // Make div square
    gridBlockTemplate.style.display = "flex";
    gridBlockTemplate.style.flex = `1 1 ${num1}px`;
    gridBlockTemplate.style.aspectRatio = "1";

    // // Style grid block
    gridBlockTemplate.style.borderStyle = "solid";
    gridBlockTemplate.style.borderColor = "#00FF00";
    gridBlockTemplate.style.borderWidth = "2px";
    gridBlockTemplate.textContent = `t${i}`;
    // gridBlockTemplate.textContent = '';

    // TEST: Append child
    container.appendChild(gridBlockTemplate);
}
