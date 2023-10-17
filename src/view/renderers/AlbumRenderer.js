import {ListRenderer} from "./ListRenderer.js";
import {TrackRenderer} from "./TrackRenderer.js";

/**
 * AlbumRenderer class
 * @class
 * @property {Album} item
 * @implements {ItemRenderer}
 */
export class AlbumRenderer {
    item;

    /**
     * AlbumRenderer constructor
     * @param {Album} album
     * @constructs AlbumRenderer
     */
    constructor(album) {
        this.item = album;
    }

    /**
     * Render the album
     * @returns {string} HTML string of the album
     * @override
     */
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

    /**
     * Post render the album
     * @param {HTMLElement} element
     * @override
     */
    postRender(element) {
        if(Array.isArray(this.item.tracks)){
            const trackListRenderer = new ListRenderer(this.item.tracks, element.querySelector("ul"), TrackRenderer)
            trackListRenderer.render()
        }
        element.style.backgroundImage = `url("${this.item.image}")`
    }
}
