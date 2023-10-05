import {Item} from "./Item.js";

export class Artist extends Item{
	#_image;
	constructor(ArtistData){
		super(ArtistData);
		this.#_image = ArtistData.image;
	}
	get image(){
		return this.#_image;
	}
}