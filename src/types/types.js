/**
 * @typedef AlbumData
 * @property {number} id unique id of album
 * @property {string} name name of album
 * @property {string} image image url of album
 * @property {ArtistData[]} artists array of artists
 * @property {TrackData[]} tracks array of tracks
 */

/**
 * @typedef ArtistData
 * @property {number} id unique id of artist
 * @property {string} name name of artist
 * @property {string} image image url of artist
 */

/**
 * @typedef TrackData
 * @property {number} id unique id of track
 * @property {string} name name of track
 */

/**
 * @typedef ItemRenderer
 * @property {function} render function that returns a string of html
 * @property {function} postRender function that takes an element and modifies it
 * @property {Item} item the item to render
 */