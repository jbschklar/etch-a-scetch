"use strict";

const gridContainer = document.querySelector(".sketch-pad");
const gridNum = 50;
const gridCountTotal = Math.pow(gridNum, 2);
const gridSqSize = 900;

for (let i = 0; i < gridCountTotal; i++) {
	const gridItem = document.createElement("div");
	gridItem.classList.add("grid-item");
	gridContainer.appendChild(gridItem);
}

const gridItemSize = 8;
const gridWidth = gridNum * gridItemSize;
console.log(gridWidth);
const gridItems = document.querySelectorAll(".grid-item");

gridContainer.style.cssText = `
   
    grid-template-columns: repeat(${gridNum}, 1fr);
	grid-template-rows: repeat(${gridNum}, 1fr);
    width: ${gridSqSize}px;
    height: ${gridSqSize}px;
    
`;

console.log(gridItems.length);

gridItems.forEach((grid) => {
	grid.addEventListener("mouseover", function () {
		// grid.style.backgroundColor = "black";
		grid.classList.add("active");
	});
});
