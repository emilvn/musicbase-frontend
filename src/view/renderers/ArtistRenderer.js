export class ArtistRenderer{
    item;
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