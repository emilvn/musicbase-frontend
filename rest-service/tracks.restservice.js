import {endpoint} from "../main.js";

export async function getTracks(){
	const res = await fetch(endpoint + "/tracks");
	if(!res.ok){
		throw await res.json();
	}
	return await res.json();
}