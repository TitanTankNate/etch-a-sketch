// Project walkthrough
// Create 16x16 grid of square divs

// Select parent container
// Create single grid block
// Append 16^2 child grid blocks to that container
// Make sure that the grid blocks are square
// (and maybe proportional to the screen width and height?)

// Select parent container
const container = document.querySelector(".container");

// Create single grid block
// // Create div
const gridBlockTemplate = document.createElement("div");

// // Make div square

// // Style grid block
gridBlockTemplate.style.backgroundColor = "#00FF00";
gridBlockTemplate.textContent = "test";

// TEST: Append child
container.appendChild(gridBlockTemplate);