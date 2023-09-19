/**
 * @typedef Artist
 * @property {number|null} id unique id of artist, can be null/undefined when adding new artist
 * @property {string} name name of artist
 * @property {string} image image url of artist
 * */

/**
 * @typedef Album
 * @property {number|null} id unique id of album can be null/undefined when adding new album
 * @property {string} name name of album
 * @property {string} image image url of album
 * @property {string[]} artist_names array of artist names
 * */

/**
 * @typedef Track
 * @property {number|null} id id of track, can be null/undefined when adding new track
 * @property {string} name name of track
 * @property {number} album_id id of album the track is on
 * */