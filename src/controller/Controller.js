import {ListRenderer} from "../view/renderers/ListRenderer.js";
import { DataService } from "../rest-service/DataService.js";

export class Controller{
	#ItemModel;
	#uri;
	#container;
	#DataService;
	constructor(ItemModel, uri, container) {
		this.#ItemModel = ItemModel;
		this.#uri = uri;
		this.#container = container;
		this.#DataService = new DataService(this.#uri, this.#ItemModel);
	}

	
}