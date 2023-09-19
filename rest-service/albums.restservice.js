import {endpoint} from "../main.js";

/**
 * variable to locally cache albums
 * @type {Album[]}
 */
export let albums = [];


/**
 * fetch albums from server and locally cache
 * @returns {void}
 * @throws {Object} error message object from server
 */
export async function getAlbums(){
	const res = await fetch(endpoint + "/albums");
	if(!res.ok){
		throw await res.json();
	}
	albums = await res.json();
}

/**
 * gets specific album by id
 * @param {number} albumId id of album to get
 * @returns {Promise<Album>} album object
 * @throws {Object} error object from server
 */
export async function getSpecificAlbum(albumId) {
	const res = await fetch(endpoint + "/albums/" + albumId);
	if (!res.ok) {
		throw await res.json();
	}
	return (await res.json())[0];
}


/**
 * search for albums on server
 * @param {string} searchValue search value
 * @returns {Promise<Album[]>} array of albums that matches search
 */
export async function searchAlbums(searchValue){
	albums = [];
	const res = await fetch(endpoint + "/search/albums?q=" + searchValue);
	if(!res.ok){
		throw await res.json();
	}
	albums = await res.json();
}