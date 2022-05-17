"use strict";

const gridContainer = document.querySelector(".sketch-pad");
const btnStart = document.querySelector(".prompt");
const btnReset = document.querySelector(".reset");
const gridSqSize = 900;
const gridItemSize = 8;
let gridNum;

// Prompts user for pixel number
const getGridNum = function () {
	const num = prompt("Choose the pixel size from 10 to 100");
	return +num;
};

// Starts application when the start button is clicked
btnStart.addEventListener("click", function () {
	// Resets the grid back to blank canvas
	const reset = function () {
		gridItems.forEach((grid) => {
			grid.style.backgroundColor = "white";
		});
	};

	gridNum = getGridNum();

	if (!gridNum || gridNum < 10 || gridNum > 100) {
		alert("Invalid Number");
		return;
	}

	const gridCountTotal = Math.pow(gridNum, 2);

	// Creates 'pixels' using user's selected number to adjust grid item size relative to the container
	for (let i = 0; i < gridCountTotal; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item");
		gridContainer.appendChild(gridItem);
	}

	const gridItems = document.querySelectorAll(".grid-item");

	// Allows creation of the gridcontainer based on prompted user input value a.k.a gridNum
	gridContainer.style.cssText = `
    grid-template-columns: repeat(${gridNum}, 1fr);
	grid-template-rows: repeat(${gridNum}, 1fr);
    `;

	// Creates etch-a-sketch effect
	gridItems.forEach((grid) => {
		grid.addEventListener("mousemove", function () {
			grid.style.backgroundColor = "black";
		});
	});

	btnReset.addEventListener("click", function () {
		reset();
	});
});
