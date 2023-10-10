import {setEventListeners} from "./src/controller/seteventlisteners.js";
import {updateView} from "./src/controller/updateview.js";
import {ListRenderer} from "./src/view/renderer/ListRenderer.js";
import {getAlbums} from "./src/rest-service/albums.restservice.js";
import {getTracks} from "./src/rest-service/tracks.restservice.js";
import {getArtists} from "./src/rest-service/artists.restservice.js";
import {AlbumRenderer} from "./src/view/renderer/AlbumRenderer.js";
import {TrackRenderer} from "./src/view/renderer/TrackRenderer.js";
import {ArtistRenderer} from "./src/view/renderer/ArtistRenderer.js";

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
	setEventListeners();
	const albums = await getAlbums()
	const tracks = await getTracks()
	const artist = await getArtists()

	console.log(albums)
	console.log(artist)
	console.log(tracks)
	try{
		const AlbumListRenderer = new ListRenderer(albums, document.querySelector("#album-grid"), AlbumRenderer);
		const TrackListRenderer = new ListRenderer(tracks, document.querySelector("#track-grid"), TrackRenderer);
		const ArtistsListRenderer = new ListRenderer(artist, document.querySelector("#artist-grid"), ArtistRenderer);

		AlbumListRenderer.render()
		TrackListRenderer.render()
		ArtistsListRenderer.render()
	}
	catch(err){
		console.log(err);
	}
}