import {Item} from "./Item.js";

/**
 * Artist class
 * @class
 * @extends Item
 * @property {string} image
 * @property {string} name
 * @property {number} id
 */
export class Artist extends Item{
	#image;

	/**
	 * Artist constructor
	 * @param {ArtistData} ArtistData
	 * @constructs Artist
	 */
	constructor(ArtistData){
		super(ArtistData);
		this.#image = ArtistData.image;
	}
	get image(){
		return this.#image;
	}
}