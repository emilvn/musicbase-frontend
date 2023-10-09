import {ListRenderer} from "../view/renderers/ListRenderer.js";

export class Controller{
	#dataService;
	#uri;
	#itemModel;
	#container;
	constructor(uri, itemModel, container) {
		this.#uri = uri;
		this.#itemModel = itemModel;
		this.#container = container;
	}
	
}