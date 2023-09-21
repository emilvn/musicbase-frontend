/**
 * displays all albums and tracks
 * @param {Album[]} albums albums to display
 * @param {Track[]} tracks tracks to display
 */
export function displayAlbums(albums, tracks){
	document.querySelector("#album-grid").innerHTML = "";
	for(const album of albums){
		const albumTracks = tracks.filter(track => track.album_id === album.id); // tracks on the given album
		displayAlbum(album, albumTracks);
	}
}

/**
 * displays an album details
 * @param {Album} album album to display
 * @param {Track[]} tracks tracks on the album
 */
function displayAlbum(album, tracks){
	const container = document.querySelector("#album-grid");
	const myHTML = /*html*/`
		<article>
            <h3>${album.name}</h3>
            <p>Features: ${album.artist_names.map(name => " "+name)}</p>
            <div>
            </div>
        </article>
	`;
	container.insertAdjacentHTML("beforeend", myHTML);
	const currentArticle = container.querySelector("article:last-child");
	tracks.forEach(track => {
		currentArticle.querySelector("div").insertAdjacentHTML("beforeend",`<p>${track.name}</p>`);
	})
	currentArticle.style.backgroundImage = `url(${album.image})`;
}