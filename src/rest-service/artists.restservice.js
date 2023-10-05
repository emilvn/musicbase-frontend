import {endpoint} from "../../main.js";
import {Artist} from "../models/Artist.js";

/**
 * variable to locally cache artists
 * @type {Artist[]}
 */
export let artists = [];

/**
 * fetch artists from server and cache locally
 * @returns {Promise<void>}
 * @throws {Error} error object from server if the request fails
 */
export async function getArtists(){
	const res = await fetch(endpoint + "/artists");
	if(!res.ok){
		throw await res.json();
	}
	artists = (await res.json()).map(artist => new Artist(artist));
}

/**
 * search for artists on server and update local cache
 * @param {string} searchValue search value
 * @returns {Promise<Artist[]>}
 * @throws {Error} error object from server if the request fails
 */
export async function searchArtists(searchValue){
	const res = await fetch(endpoint + "/search/artists?q=" + searchValue);
	if(!res.ok){
		throw await res.json();
	}
	return await res.json();
}