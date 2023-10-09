export class TrackRenderer {
    item;
    constructor(Track) {
        this.item = Track
    }
    render() {
        return `
        <h3>${this.item.name}</h3>
        `
    }
    postRender(element) {

    }
}