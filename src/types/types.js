/**
 * @typedef Album
 * @property {number} id unique id of album
 * @property {string} name name of album
 * @property {string} image image url of album
 * @property {Artist[]} artists array of artists
 * @property {Track[]} tracks array of tracks
 */

/**
 * @typedef Artist
 * @property {number} id unique id of artist
 * @property {string} name name of artist
 * @property {string} image image url of artist
 */

/**
 * @typedef Track
 * @property {number} id unique id of track
 * @property {string} name name of track
 * @property {number || null} album_id id of album the track is on
 */