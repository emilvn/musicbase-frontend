import {updateView, updateViewFromSearch} from "./updateview.js";

/**
 * function to update the view from the search
 * @returns {Promise<void>}
 */
export async function search(){
	const searchBar = document.querySelector("#artist-search");
	const searchValue = searchBar.value;
	try{
		if(searchValue === ""){
			await updateView();
		}
		else{
			await updateViewFromSearch(searchValue);
		}
	}
	catch(err){
		console.log(err);
	}
}