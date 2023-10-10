export class ArtistRenderer{
    item;
    constructor(Artist) {
        this.item = Artist
    }
    render() {
        return `
        <h3>${this.item.name}</h3>
        `
    }
    postRender(element) {
        element.style.backgroundImage = `url(${this.item.image})`;
    }
}