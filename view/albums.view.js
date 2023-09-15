
export function displayAlbums(albums){
	document.querySelector("#artist-grid").innerHTML = "";
	for(const album of albums){
		displayAlbum(album);
	}
}

function displayAlbum(album){
	const container = document.querySelector("#album-grid");
	const myHTML = /*html*/`
		<article>
            <div>
                <h3>${album.name}</h3>
            </div>
        </article>
	`;
	container.insertAdjacentHTML("beforeend", myHTML);
	container.querySelector("article:last-child")
		.style.backgroundImage = `url(${album.image})`;
}