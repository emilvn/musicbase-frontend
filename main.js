import {artists, getArtists} from "./src/rest-service/artists.restservice.js";
import {albums, getAlbums} from "./src/rest-service/albums.restservice.js";
import {getTracks, tracks} from "./src/rest-service/tracks.restservice.js";
import {displayArtists} from "./src/view/artists.view.js";
import {displayAlbums} from "./src/view/albums.view.js";
import {setEventListeners} from "./src/controller/seteventlisteners.js";

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
		await getArtists();
		await getAlbums();
		await getTracks();
	}
	catch(err){
		console.log(err);
	}
	displayArtists(artists);
	displayAlbums(albums, tracks);
}