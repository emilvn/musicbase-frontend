import {Item} from "./Item.js";
export class Artist extends Item{
	_image;
	constructor(ArtistData){
		super(ArtistData);
		this.image = ArtistData.image;
	}
	get image(){
		return this._image;
	}
}