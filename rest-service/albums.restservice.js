import {endpoint} from "../main.js";

export async function getAlbums(){
	const res = await fetch(endpoint + "/albums");
	if(!res.ok){
		throw await res.json();
	}
	return await res.json();
}