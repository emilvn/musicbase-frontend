function displayArtist(artist){
	const container = document.querySelector("#artist-grid");
	const myHTML = /*html*/`
		<article>
            <div class="artist-info">
                <h3>${artist.name}</h3>
            </div>
        </article>
	`;
	container.insertAdjacentHTML("beforeend", myHTML);
	container.querySelector("article:last-child")
		.style.backgroundImage = `url(${artist.image})`;
}