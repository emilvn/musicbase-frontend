import {TabUtility} from "./src/view/TabUtility.js";
import {Controller} from "./src/controller/Controller.js";
import {ArtistRenderer} from "./src/view/renderers/ArtistRenderer.js";
import {AlbumRenderer} from "./src/view/renderers/AlbumRenderer.js";
import {TrackRenderer} from "./src/view/renderers/TrackRenderer.js";
import {Artist} from "./src/models/Artist.js";
import {Album} from "./src/models/Albums.js";
import {Track} from "./src/models/Track.js";


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
	const ArtistController = new Controller(Artist, "/artists", ArtistRenderer, document.querySelector("#artist-grid"));
	const AlbumController = new Controller(Album, "/albums", AlbumRenderer, document.querySelector("#album-grid"));
	const TrackController = new Controller(Track, "/tracks", TrackRenderer, document.querySelector("#track-grid"));
	document.querySelector("#artist-search")
		.addEventListener("search", (event) => {
			ArtistController.search(event.target.value);
			AlbumController.search(event.target.value);
			TrackController.search(event.target.value);
		});
	try {
		await ArtistController.init();
		await AlbumController.init();
		await TrackController.init();

	}
	catch (err){
		console.dir(err);
	}
}