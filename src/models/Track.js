import {Item} from "./Item.js";

/**
 * Track class
 * @class
 * @extends Item
 * @property {string} name
 * @property {number} id
 */
export class Track extends Item{

	/**
	 * Track constructor
	 * @param TrackData
	 * @constructs Track
	 */
	constructor(TrackData){
		super(TrackData);
	}
}