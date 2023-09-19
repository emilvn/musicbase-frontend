import {search} from "./search.js";

export function setEventListeners(){
	document.querySelector("#artist-search")
		.addEventListener("search", search);
}