export class TrackRenderer {
    item;
    constructor(track) {
        this.item = track;
    }
    render() {
        return `
        <li>${this.item.name}</li>
        `
    }
}