import { scene } from "../script.js";
import * as THREE from "three";

// Const, Var, Let
// ------------ dark/light mode toggle ------------
const toggle = document.querySelector(".toggle");
let getMode = localStorage.getItem("mode");

// ------------ filter (ascending/descending) ------------
const filter_sort_box = document.querySelector(".filter-sort-box");
const filter_asc = document.getElementById("filter-asc");
const filter_desc = document.getElementById("filter-desc");

// ------------ filter (sort by) ------------
const filter_text = document.querySelector(".filter-text");

// dark/light mode toggle
if (getMode && getMode === "dark-theme") {
	document.body.classList.add("dark-theme");
	toggle.classList.add("active");

	scene.background = new THREE.Color(0x98a2b3);

	scene.remove(scene.getObjectByName("grid"));

	const grid = new THREE.GridHelper(20, 20, 0x475b74, 0x475b74);
	grid.name = "grid";
	scene.add(grid);

	localStorage.setItem("mode", "dark-theme");
}

toggle.addEventListener("click", () => toggle.classList.toggle("active"));

toggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");

	if (document.body.classList.contains("dark-theme")) {
		scene.background = new THREE.Color(0x98a2b3);

		scene.remove(scene.getObjectByName("grid"));

		const grid = new THREE.GridHelper(20, 20, 0x475b74, 0x475b74);
		grid.name = "grid";
		scene.add(grid);

		localStorage.setItem("mode", "dark-theme");
	} else {
		scene.background = new THREE.Color(0xdbe9e9);

		scene.remove(scene.getObjectByName("grid"));
		const grid = new THREE.GridHelper(20, 20, 0xffffff, 0xffffff);
		grid.name = "grid";
		scene.add(grid);

		localStorage.setItem("mode", "light");
	}
});

// filter (ascending/descending)
filter_sort_box.addEventListener("click", () => {
	if (filter_asc.style.display != "none") {
		filter_asc.style.display = "none";
		filter_desc.style.display = "block";
	} else {
		filter_asc.style.display = "block";
		filter_desc.style.display = "none";
	}
});

// filter (sort by)
filter_text.addEventListener("click", () => {
	// do something
});
