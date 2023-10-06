import {ListRenderer} from "./ListRenderer.js";
import {TrackRenderer} from "./TrackRenderer.js";

export class AlbumRenderer{
	item;
	constructor(Album) {
		this.item = Album;
	}
	render(){
		return `
		<article>
			<h3>${this.item.name}</h3>
			<p>Features: ${this.item.artistNames}</p>
			<ul></ul>
			<div class="album-buttons">
				<button class="edit-button"><img src="icons/edit-icon.png" alt="Edit"></button>
				<button class="delete-button"><img src="icons/delete-icon.png" alt="Delete"></button>
			</div>
		</article>
		`;
	}
	postRender(element){
		const TrackListRenderer = new ListRenderer(this.item.tracks, element.querySelector("ul"), TrackRenderer);
		TrackListRenderer.render();
		element.style.backgroundImage = `url(${this.item.image})`;
		//TODO: add event listeners for buttons
	}
}