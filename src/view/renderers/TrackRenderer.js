export class TrackRenderer {
    item;
    constructor(Track) {
        this.item = Track
    }
    render() {
        return `
        <li>${this.item.name}</li>
        `
    }
}