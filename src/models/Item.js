/**
 * Abstract class for all items
 * @class
 * @abstract
 * @property {number} id unique id of item
 * @property {string} name name of item
 * @hideconstructor
 */
export class Item{
	#id;
	#name;
	constructor(ItemData){
		this.#id = ItemData.id;
		this.#name = ItemData.name;
	}
	get	id(){
		return this.#id;
	}
	get name(){
		return this.#name;
	}
}