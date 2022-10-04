// JavaScript Document

/* menu openen */

var openButton = document.querySelector("header > button");

openButton.addEventListener("click", menuOpenen);

function menuOpenen() {
	var deNav = document.querySelector("header nav");
	
	deNav.classList.add("open");
}

/*menu sluiten*/
var sluitButton = document.querySelector("header nav button");

sluitButton.addEventListener("click", menuSluiten);

function menuSluiten() {
	var deNav = document.querySelector("header nav");
	
	deNav.classList.remove("open");
}

/*cirkel courasel*/

const prev = document.getElementsByTagName("a")[6];
const next = document.getElementsByTagName("a")[36];

next.onclick = () => { 
	document.getElementsByTagName("ul")[1].scrollLeft += 200;
	
};

prev.onclick = () => {
	document.getElementsByTagName("ul")[1].scrollLeft -= 200;
};

/*filter knoppen*/

var maakButtonZwart = document.querySelector("main > ul li *");

maakButtonZwart.addEventListener("click", maakZwart);

function maakZwart() {
	
	maakButtonZwart.classList.toggle("black");
}
