"use strict";

const gridContainer = document.querySelector(".sketch-pad");
const btnStart = document.querySelector(".prompt");
const btnReset = document.querySelector(".reset");
const gridSqSize = 900;
let gridNum;
let clickCount;
let gridItems;
let initial = true;

// Main functionality for the game contained in this function to be called with click event on start btn
const etchASketch = function () {
	clickCount = 0;
	gridContainer.innerHTML = "";

	// Prompts user for pixel number
	const getGridNum = function () {
		const num = prompt("Choose the pixel size from 10 to 100");
		return +num;
	};

	gridNum = getGridNum();

	if (!gridNum || gridNum < 10 || gridNum > 100) {
		alert("Invalid Number");
		return;
	}

	// Allows creation of the gridcontainer based on prompted user input value a.k.a gridNum
	gridContainer.style.cssText = `
    grid-template-columns: repeat(${gridNum}, 1fr);
    grid-template-rows: repeat(${gridNum}, 1fr);
    `;

	// Calculated to establish number of 'grid-items' to create in gridContainer
	const gridCountTotal = Math.pow(gridNum, 2);

	// Creates 'pixels' using user's selected number to adjust grid item size relative to the container
	for (let i = 0; i < gridCountTotal; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item");
		gridContainer.appendChild(gridItem);
	}

	gridItems = document.querySelectorAll(".grid-item");

	// initial boolean value is true only during the first function call per page load to avoid duplication of 'live" class toggle
	if (initial) {
		gridContainer.addEventListener("click", function () {
			gridItems.forEach((grid) => {
				if (clickCount < 2) {
					grid.classList.toggle("live");
					console.log(grid.classList.contains("live"));
				}
			});
			clickCount++;
		});
	}
	gridItems.forEach((grid) => {
		grid.addEventListener("mousemove", function () {
			if (grid.classList.contains("live")) grid.style.backgroundColor = "black";
		});
	});
	// initial set to false for reason described above
	initial = false;
};

// Resets the grid back to blank canvas
const reset = function () {
	gridItems.forEach((grid) => {
		grid.style.backgroundColor = "white";
		grid.classList.remove("live");
	});
	clickCount = 0;
};

// Starts application when the start button is clicked
btnStart.addEventListener("click", etchASketch);

btnReset.addEventListener("click", reset);
