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

    /**
     * Render the track
     * @returns {string} HTML string of the track
     * @override
     */
    render() {
        return `
        <li>${this.item.name}</li>
        `
    }
}