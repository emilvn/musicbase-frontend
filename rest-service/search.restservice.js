import {endpoint} from "../main.js";

export async function searchDatabase(searchValue){
	const res = await fetch(endpoint + "/search?q=" + searchValue);
	if(!res.ok){
		throw await res.json();
	}
	return res.json();
}