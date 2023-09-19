import {endpoint} from "../main.js";

/**
 * variable to locally cache artists
 * @type {Artist[]}
 */
export let artists = [];

/**
 * fetch artists from server
 * @returns {void}
 * @throws {Object} error message object from server
 */
export async function getArtists(){
	const res = await fetch(endpoint + "/artists");
	if(!res.ok){
		throw await res.json();
	}
	artists = await res.json();
}

/**
 * search for artists on server
 * @param {string} searchValue search value
 * @returns {Promise<Artist[]>} array of artists that matches search
 */
export async function searchArtists(searchValue){
	artists = [];
	const res = await fetch(endpoint + "/search/artists?q=" + searchValue);
	if(!res.ok){
		throw await res.json();
	}
	artists = await res.json();
}