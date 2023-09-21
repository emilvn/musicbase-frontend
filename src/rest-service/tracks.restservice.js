import {endpoint} from "../../main.js";

/**
 * variable to locally cache tracks
 * @type {Track[]}
 */
export let tracks = [];
/**
 * fetch tracks from server and caches locally
 * @returns {Promise<void>}
 * @throws {Error} error object from server if the request fails
 */
export async function getTracks(){
	const res = await fetch(endpoint + "/tracks");
	if(!res.ok){
		throw await res.json();
	}
	tracks = await res.json();
}

/**
 * search for tracks on server and update local cache
 * @param {string} searchValue search value
 * @returns {Promise<Track[]>} array of tracks that matches search
 * @throws {Error} error object from server if the request fails
 */
export async function searchTracks(searchValue){
	const res = await fetch(endpoint + "/search/tracks?q=" + searchValue);
	if(!res.ok){
		throw await res.json();
	}
	return await res.json();
}