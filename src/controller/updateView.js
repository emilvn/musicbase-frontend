import {artists, getArtists, searchArtists} from "../rest-service/artists.restservice.js";
import {albums, getAlbums} from "../rest-service/albums.restservice.js";
import {getTracks, searchTracks, tracks} from "../rest-service/tracks.restservice.js";
import {displayArtists} from "../view/artists.view.js";
import {displayAlbums} from "../view/albums.view.js";
import {getAlbumsToDisplay} from "./search.js";

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
	displayArtists(artists);
	displayAlbums(albums, tracks);
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
		displayAlbums(albumsToDisplay, tracksSearched);
	}
	catch (err){
		throw err;
	}
}