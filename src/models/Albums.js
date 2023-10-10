import {Track} from "./Track.js";
import {Item} from "./Item.js";
import {Artist} from "./Artist.js";

export class Album extends Item{
	#_image;
	#_artists;
	#_tracks;
	constructor(AlbumData){
		super(AlbumData);
		this.#_image = AlbumData.image;
		this.#_artists = AlbumData.artists.map(artist => new Artist(artist));
    this.#_tracks = AlbumData.tracks
    ? AlbumData.tracks.map(track => new Track(track))
    : [];
	}
	get image(){
		return this.#_image;
	}
   get artistNames() {
      return this.#_artists.map(artist => artist.name).reduce((acc,curr)=> acc + curr + ', ', "").slice(0, -2);
    }
	get tracks(){
		return this.#_tracks.map(track => new Track(track));
	}
}

