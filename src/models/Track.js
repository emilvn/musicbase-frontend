import {albums} from "../rest-service/albums.restservice.js";
import {Item} from "./Item.js";

export class Track extends Item{
	#_album_id;
	constructor(TrackData){
		super(TrackData);
		this.#_album_id = TrackData.album_id;
	}
	get album(){
		return albums.find(album => album.id === this.#_album_id);
	}
}