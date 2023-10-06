import {DataService} from "./src/rest-service/DataService.js";
import {Artist} from "./src/models/Artist.js";
import {Album} from "./src/models/Album.js";
import {Track} from "./src/models/Track.js";
import {ArtistRenderer} from "./src/view/renderers/ArtistRenderer.js";
import {AlbumRenderer} from "./src/view/renderers/AlbumRenderer.js";
import {Controller} from "./src/controller/Controller.js";
import {TrackRenderer} from "./src/view/renderers/TrackRenderer.js";
import {TabUtility} from "./src/view/TabUtility.js";

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
	TabUtility.initTabs();

	const ArtistDataService = new DataService("/artists", Artist);
	const AlbumDataService = new DataService("/albums", Album);
	const TrackDataService = new DataService("/tracks", Track);

	try {
		const ArtistController = new Controller(ArtistDataService, ArtistRenderer, document.querySelector("#artist-grid"));
		const AlbumController = new Controller(AlbumDataService, AlbumRenderer, document.querySelector("#album-grid"));
		const TrackController = new Controller(TrackDataService, TrackRenderer, document.querySelector("#track-grid"));

		await ArtistController.init();
		await AlbumController.init();
		await TrackController.init();

		document.querySelector("#artist-search")
			.addEventListener("search", (event) => {
				ArtistController.search(event.target.value);
				AlbumController.search(event.target.value);
				TrackController.search(event.target.value);
			});
	}
	catch (err){
		console.dir(err);
	}
}