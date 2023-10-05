import {artists, getArtists, searchArtists} from "../rest-service/artists.restservice.js";
import {albums, getAlbums} from "../rest-service/albums.restservice.js";
import {getTracks, searchTracks, tracks} from "../rest-service/tracks.restservice.js";
import {displayArtists} from "../view/artists.view.js";
import {displayAlbums} from "../view/albums.view.js";
import {getAlbumsToDisplay} from "./getalbums.js";
import {ListRenderer} from "../view/ListRenderer.js";
import {ArtistRenderer} from "../view/ArtistRenderer.js";
import {AlbumRenderer} from "../view/AlbumRenderer.js";

/**
 * updates the grids with the newest data from the database
 * @returns {Promise<void>}
 * @throws {Error} rethrows error from rest functions to be caught further up
 */
export async function updateView(){
	try{
		await getArtists();
		await getAlbums();
		await getTracks();
	}
	catch (err){
		throw err;
	}
	const ArtistListRenderer = new ListRenderer(artists, document.querySelector("#artists"), ArtistRenderer);
	const AlbumListRenderer = new ListRenderer(albums, document.querySelector("#albums"), AlbumRenderer);
	ArtistListRenderer.render();
	AlbumListRenderer.render();
}

/**
 * update the view with the artists/albums that matches the search
 * @param {string} searchValue
 * @returns {Promise<void>}
 */
export async function updateViewFromSearch(searchValue){
	try{
		const artistsToDisplay = await searchArtists(searchValue);
		const tracksSearched = await searchTracks(searchValue);
		const albumsToDisplay = await getAlbumsToDisplay(searchValue, artistsToDisplay, tracksSearched);
		displayArtists(artistsToDisplay);
		displayAlbums(albumsToDisplay, tracks);
	}
	catch (err){
		throw err;
	}
}