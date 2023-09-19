import {artists, searchArtists} from "../rest-service/artists.restservice.js";
import {albums, getSpecificAlbum, searchAlbums} from "../rest-service/albums.restservice.js";
import {searchTracks, tracks} from "../rest-service/tracks.restservice.js";
import {displayArtists} from "../view/artists.view.js";
import {displayAlbums} from "../view/albums.view.js";

export async function search(){
	const searchBar = document.querySelector("#artist-search");
	const searchValue = searchBar.value;
	try{
		await searchArtists(searchValue);
		await searchAlbums(searchValue);
		await searchTracks(searchValue);
		await getAlbumsFromTracks(albums, tracks);
		displayArtists(artists);
		displayAlbums(albums, tracks);
	}
	catch(err){
		console.log(err);
	}
}

async function getAlbumsFromTracks(albums, tracks){
	for(const track of tracks){
		if(!albums.find(album => album.id === track.album_id)){
			albums.push(await getSpecificAlbum(track.album_id));
		}
	}
}