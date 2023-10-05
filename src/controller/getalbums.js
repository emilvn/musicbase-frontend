import {albums} from "./updateview.js";

/**
 * get all albums where either the artist, the album name or a track on the album, matches the search
 * @param {Album[]} albumsSearched
 * @param {Artist[]} artistsSearched
 * @param {Track[]} tracksSearched
 * @returns {Promise<Album[]>}
 * @throws {Error} rethrows error from search to be handled further up
 */
export async function getAlbumsToDisplay(albumsSearched, artistsSearched, tracksSearched){
	try{
		const artistAlbums = getAlbumsFromArtists(albums, artistsSearched);
		const trackAlbums = getAlbumsFromTracks(albums, tracksSearched);

		let uniqueAlbumsMap = new Map();
		addAlbumsToMap(albumsSearched, uniqueAlbumsMap);
		addAlbumsToMap(artistAlbums, uniqueAlbumsMap);
		addAlbumsToMap(trackAlbums, uniqueAlbumsMap);

		return Array.from(uniqueAlbumsMap.values());
	}
	catch (err){
		throw err;
	}
}

/**
 * helper function to add only unique albums to a map
 * @param {Album[]} albums albums to add to map
 * @param {Map} albumMap map of Albums to add to
 * @returns {Map} updated map of Albums
 */
function addAlbumsToMap(albums, albumMap){
	albums.forEach((album) => {
		if(!albumMap.has(album.id)){
			albumMap.set(album.id, album);
		}
	});
	return albumMap;
}


/**
 * function to update album array on track search
 * @param {Album[]} albums array of albums
 * @param {Track[]} tracks array of tracks to add albums from
 * @returns {Album[]}
 */
function getAlbumsFromTracks(albums, tracks){
	const albumsFromTracks = [];
	for(const track of tracks){
		const trackAlbum = albums.find(album => album.id === track.album_id);
		if(trackAlbum){
			albumsFromTracks.push(trackAlbum);
		}
	}
	return albumsFromTracks;
}

/**
 * function to get the albums from the artists that matches the search
 * @param {Album[]} albums
 * @param {Artist[]} artists
 * @returns {Album[]}
 */
function getAlbumsFromArtists(albums, artists){
	const albumsFromArtists = [];
	for(const album of albums){
		if(!artists.find(artist => album.artists.find(a => a.name === artist.name))){
			continue;
		}
		albumsFromArtists.push(album);
	}
	return albumsFromArtists;
}