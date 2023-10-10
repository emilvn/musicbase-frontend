import {ListRenderer} from "./ListRenderer.js";
import {TrackRenderer} from "./TrackRenderer.js";

export class AlbumRenderer {
    item;
    constructor(Album) {
        this.item = Album
    }
    render() {
        return `
        <article>
            <div>
                <h3>${this.item.name}</h3>
                <p class="artist-names">Features: ${this.item.artistNames}</p>
            </div>
            <div>
                <ul></ul>
            </div>
        </article>
        `
    }
    postRender(element) {
        if(Array.isArray(this.item.tracks)){
            const TrackListRenderer = new ListRenderer(this.item.tracks, element.querySelector("ul"), TrackRenderer)
            TrackListRenderer.render()
        }
        element.style.backgroundImage = `url("${this.item.image}")`
    }
}
