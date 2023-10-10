import {TabUtility} from "./src/view/TabUtility.js";

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
	TabUtility.initTabs();

}