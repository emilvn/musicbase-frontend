import {search} from "./search.js";

/**
 * function to set initial event listeners
 */
export function setEventListeners(){
	document.querySelector("#artist-search")
		.addEventListener("search", search);
}