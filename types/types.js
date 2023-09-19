/**
 * @typedef Artist
 * @property {number} id unique id of artist
 * @property {string} name name of artist
 * @property {string} image image url of artist
 * */

/**
 * @typedef Album
 * @property {number} id unique id of album
 * @property {string} name name of album
 * @property {string} image image url of album
 * @property {string[]} artist_names array of artist names
 * */

/**
 * @typedef Track
 * @property {number} id id of track
 * @property {string} name name of track
 * @property {number} album_id id of album the track is on
 * */