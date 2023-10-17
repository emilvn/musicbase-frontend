/**
 * ArtistRenderer class
 * @class
 * @property {Artist} item
 * @implements {ItemRenderer}
 */
export class ArtistRenderer{
    item;

    /**
     * ArtistRenderer constructor
     * @param {Artist} artist
     * @constructs ArtistRenderer
     */
    constructor(artist) {
        this.item = artist
    }
    render() {
        return `
            <article>
                <div>
                    <h3>${this.item.name}</h3>
                </div>
            </article>
        `
    }
    postRender(element) {
        element.style.backgroundImage = `url(${this.item.image})`;
    }
}