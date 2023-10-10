export class ArtistRenderer{
    item;
    constructor(Artist) {
        this.item = Artist
    }
    render() {
        return `<article>
                <h3>${this.item.name}</h3>
            </article>
        `
    }
    postRender(element) {
        element.style.backgroundImage = `url(${this.item.image})`;
    }
}