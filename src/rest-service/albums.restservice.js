import {endpoint} from "../../main.js";

/**
 * variable to locally cache albums
 * @type {Album[]}
 */
export let albums = [];

/**
 * fetch albums from server and locally cache
 * @returns {Promise<void>}
 * @throws {Error} error object received from server
 */
export async function getAlbums(){
	const res = await fetch(endpoint + "/albums");
	if(!res.ok){
		throw await res.json();
	}
	albums = await res.json();
}

/**
 * search for albums on server and update local cache
 * @param {string} searchValue search value
 * @returns {Promise<Album[]>} array of albums that matches search
 * @throws {Error} error object from server if the request fails
 */
export async function searchAlbums(searchValue){
	const res = await fetch(endpoint + "/search/albums?q=" + searchValue);
	if(!res.ok){
		throw await res.json();
	}
	return await res.json();
}