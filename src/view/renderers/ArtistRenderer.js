export class ArtistRenderer{
    item;
    constructor(Artist) {
        this.item = Artist
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