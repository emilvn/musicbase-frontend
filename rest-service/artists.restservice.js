import {endpoint} from "../main.js";

export async function getArtists(){
	const res = await fetch(endpoint + "/artists");
	if(!res.ok){
		throw await res.json();
	}
	return await res.json();
}