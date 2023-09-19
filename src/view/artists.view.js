/**
 * display artists
 * @param artists artists to display
 */
export function displayArtists(artists){
	document.querySelector("#artist-grid").innerHTML = "";
	for(const artist of artists){
		displayArtist(artist);
	}
}

/**
 * display artist
 * @param artist artist to display
 */
function displayArtist(artist){
	const container = document.querySelector("#artist-grid");
	const myHTML = /*html*/`
		<article>
            <div>
                <h3>${artist.name}</h3>
            </div>
        </article>
	`;
	container.insertAdjacentHTML("beforeend", myHTML);
	container.querySelector("article:last-child")
		.style.backgroundImage = `url(${artist.image})`;
}