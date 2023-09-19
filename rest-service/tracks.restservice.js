import {endpoint} from "../main.js";

/**
 * variable to locally cache tracks
 * @type {Track[]}
 */
export let tracks = [];

/**
 * fetch tracks from server and caches locally
 * @returns {void}
 * @throws {Object} error message object from server
 */
export async function getTracks(){
	const res = await fetch(endpoint + "/tracks");
	if(!res.ok){
		throw await res.json();
	}
	tracks = await res.json();
}

/**
 * search for tracks on server
 * @param {string} searchValue search value
 * @returns {Promise<Track[]>} array of tracks that matches search
 */
export async function searchTracks(searchValue){
	tracks = [];
	const res = await fetch(endpoint + "/search/tracks?q=" + searchValue);
	if(!res.ok){
		throw await res.json();
	}
	tracks = await res.json();
}