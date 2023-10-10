import {setEventListeners} from "./src/controller/seteventlisteners.js";
import {search} from "./src/controller/search";

window.addEventListener("load", main);

/**
 * endpoint of server
 * @type {string}
 */
export const endpoint = "https://musicbase-backend.azurewebsites.net";

/**
 * Initialize app
 * @returns {Promise<void>}
 */
async function main(){
	document.querySelector("#artist-search")
		.addEventListener("search", search);
}