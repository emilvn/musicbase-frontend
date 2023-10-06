import {DataService} from "./src/rest-service/DataService.js";
import {Artist} from "./src/models/Artist.js";
import {Album} from "./src/models/Album.js";
import {Track} from "./src/models/Track.js";
import {ArtistRenderer} from "./src/view/renderers/ArtistRenderer.js";
import {AlbumRenderer} from "./src/view/renderers/AlbumRenderer.js";
import {Controller} from "./src/controller/Controller.js";

window.addEventListener("load", main);

/**
 * endpoint of server
 * @type {string}
 */
export const endpoint = "http://localhost:3000";

/**
 * variable to locally cache artists
 * @type {Artist[]}
 */
export let artists = [];

/**
 * variable to locally cache albums
 * @type {Album[]}
 */
export let albums = [];

/**
 * variable to locally cache tracks
 * @type {Track[]}
 */
export let tracks = [];


/**
 * Initialize app
 * @returns {Promise<void>}
 */
async function main(){
	const ArtistDataService = new DataService("/artists", Artist);
	const AlbumDataService = new DataService("/albums", Album);
	const TrackDataService = new DataService("/tracks", Track);

	try{
		artists = await ArtistDataService.getAll();
		albums = await AlbumDataService.getAll();
		tracks = await TrackDataService.getAll();
	}
	catch (err){
		throw err;
	}

	const ArtistController = new Controller(ArtistDataService, ArtistRenderer, document.querySelector("#artist-grid"));
	const AlbumController = new Controller(AlbumDataService, AlbumRenderer, document.querySelector("#album-grid"));

	await ArtistController.init();
	await AlbumController.init();

	document.querySelector("#artist-search")
		.addEventListener("search", (event) => {
			ArtistController.search(event.target.value);
			AlbumController.search(event.target.value);
		});
}