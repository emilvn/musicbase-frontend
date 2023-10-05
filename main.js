import {setEventListeners} from "./src/controller/seteventlisteners.js";
import {updateView} from "./src/controller/updateview.js";

window.addEventListener("load", main);

/**
 * endpoint of server
 * @type {string}
 */
export const endpoint = "http://localhost:3000";

/**
 * Initialize app
 * @returns {Promise<void>}
 */
async function main(){
	setEventListeners();
	try{
		await updateView();
	}
	catch(err){
		console.log(err);
	}
}