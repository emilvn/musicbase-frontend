import {ListRenderer} from "./ListRenderer.js";
import {TrackRenderer} from "./TrackRenderer.js";

export class AlbumRenderer{
	item;
	constructor(Album) {
		this.item = Album;
	}
	render(){
		return `
		<article style="background-image: url("${this.item.image}")>
			<h2>${this.item.name}</h2>
			<p>${this.item.artistNames}</p>
			<ul></ul>
		</article>
		`;
	}
	postRender(element){
		const TrackListRenderer = new ListRenderer(this.item.tracks, element.querySelector("ul"), TrackRenderer);
		TrackListRenderer.render();
	}
}