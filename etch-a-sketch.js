"use strict";

const gridContainer = document.querySelector(".sketch-pad");
const gridNum = 100;
const gridCountTotal = Math.pow(gridNum, 2);

for (let i = 0; i < gridCountTotal; i++) {
	const gridItem = document.createElement("div");
	gridItem.classList.add("grid-item");
	gridContainer.appendChild(gridItem);
}

const gridItemSize = 16;
const gridWidth = gridNum * gridItemSize;
console.log(gridWidth);
const gridItems = document.querySelectorAll(".grid-item");

gridContainer.style.cssText = `
   
    grid-template-columns: repeat(${gridNum}, 1fr);
	grid-template-rows: repeat(${gridNum}, 1fr);
    width: ${gridWidth}px;
    
`;

console.log(gridItems.length);

gridItems.forEach((grid) => {
	grid.textContent = "1";
	grid.style.cssText = `
            border: 2px solid black;
        `;
});
