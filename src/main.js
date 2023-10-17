import {TabUtility} from "./view/TabUtility.js";
import {Controller} from "./controller/Controller.js";
import {ArtistRenderer} from "./view/renderers/ArtistRenderer.js";
import {AlbumRenderer} from "./view/renderers/AlbumRenderer.js";
import {TrackRenderer} from "./view/renderers/TrackRenderer.js";
import {Artist} from "./models/Artist.js";
import {Album} from "./models/Albums.js";
import {Track} from "./models/Track.js";

window.addEventListener("load", main);

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