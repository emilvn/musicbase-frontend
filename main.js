import {artists, getArtists} from "./rest-service/artists.restservice.js";
import {albums, getAlbums} from "./rest-service/albums.restservice.js";
import {getTracks, tracks} from "./rest-service/tracks.restservice.js";
import {displayArtists} from "./view/artists.view.js";
import {displayAlbums} from "./view/albums.view.js";
import {setEventListeners} from "./controller/seteventlisteners.js";

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