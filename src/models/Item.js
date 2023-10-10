export class Item{
	#_id;
	#_name;
	constructor(ItemData){
		this.#_id = ItemData.id;
		this.#_name = ItemData.name;
	}
	get	id(){
		return this.#_id;
	}
	get name(){
		return this.#_name;
	}
}