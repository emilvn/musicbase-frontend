import {Track} from "./Track.js";
import {Item} from "./Item.js";
import {Artist} from "./Artist.js";

/**
 * Album class
 * @class
 * @extends Item
 * @property {string} image image url of the album
 * @property {string} name name of the album
 * @property {number} id id of the album
 * @property {string} artistNames combined string of all artist names
 * @property {Track[]} tracks array of tracks on the album
 */
export class Album extends Item{
	#image;
	#artists;
	#tracks;

	/**
	 * Album constructor
	 * @param {AlbumData} AlbumData
	 * @constructs Album
	 */
	constructor(AlbumData){
		super(AlbumData);
		this.#image = AlbumData.image;
		this.#artists = AlbumData.artists.map(artist => new Artist(artist));
    	this.#tracks = AlbumData.tracks
    		? AlbumData.tracks.map(track => new Track(track))
    		: [];
	}

	get image(){
		return this.#image;
	}

   get artistNames() {
      return this.#artists.map(artist => artist.name).reduce((acc,curr)=> acc + curr + ', ', "").slice(0, -2);
    }

	get tracks(){
		return this.#tracks.map(track => new Track(track));
	}
}

