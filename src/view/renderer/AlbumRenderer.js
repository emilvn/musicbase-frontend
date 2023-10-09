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
        <h3>${this.item.name}</h3>
        <p>Features: ${this.item.artist_names.map(name => " "+name)}</p>
        <ul></ul>
        </article>
        `
    }
    postRender(element) {
        const TrackListRenderer = new ListRenderer(this.item.track, element.querySelector("ul"), TrackRenderer)
        TrackListRenderer.render()
    }
}
