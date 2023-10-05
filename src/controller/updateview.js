import {getAlbumsToDisplay} from "./getalbums.js";
import {ListRenderer} from "../view/ListRenderer.js";
import {ArtistRenderer} from "../view/ArtistRenderer.js";
import {AlbumRenderer} from "../view/AlbumRenderer.js";
import {DataService} from "../rest-service/DataService.js";
import {Artist} from "../models/Artist.js";
import {Album} from "../models/Album.js";
import {Track} from "../models/Track.js";


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
 * updates the grids with the newest data from the database
 * @returns {Promise<void>}
 * @throws {Error} rethrows error from rest functions to be caught further up
 */
export async function updateView(){
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
	const ArtistListRenderer = new ListRenderer(artists, document.querySelector("#artist-grid"), ArtistRenderer);
	const AlbumListRenderer = new ListRenderer(albums, document.querySelector("#album-grid"), AlbumRenderer);
	ArtistListRenderer.render();
	AlbumListRenderer.render();
}

/**
 * update the view with the artists/albums that matches the search
 * @param {string} searchValue
 * @returns {Promise<void>}
 */
export async function updateViewFromSearch(searchValue){
	const ArtistDataService = new DataService("/artists", Artist);
	const AlbumDataService = new DataService("/albums", Album);
	const TrackDataService = new DataService("/tracks", Track);
	try{
		const artistsToDisplay = await ArtistDataService.search(searchValue);
		const tracksSearched = await TrackDataService.search(searchValue);
		const albumsSearched = await AlbumDataService.search(searchValue);
		const albumsToDisplay = await getAlbumsToDisplay(albumsSearched, artistsToDisplay, tracksSearched);

		const ArtistListRenderer = new ListRenderer(artistsToDisplay, document.querySelector("#artist-grid"), ArtistRenderer);
		const AlbumListRenderer = new ListRenderer(albumsToDisplay, document.querySelector("#album-grid"), AlbumRenderer);
		ArtistListRenderer.render();
		AlbumListRenderer.render();
	}
	catch (err){
		throw err;
	}
}