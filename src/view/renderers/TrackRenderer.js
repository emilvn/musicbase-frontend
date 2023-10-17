/**
 * TrackRenderer class
 * @class
 * @property {Track} item
 * @implements {ItemRenderer}
 */
export class TrackRenderer {
    item;

    /**
     * TrackRenderer constructor
     * @param {Track} track
     * @constructs TrackRenderer
     */
    constructor(track) {
        this.item = track;
    }
    render() {
        return `
        <li>${this.item.name}</li>
        `
    }
}