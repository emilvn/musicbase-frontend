import {ListRenderer} from "../view/renderers/ListRenderer.js";
import { DataService } from "../rest-service/DataService.js";

export class Controller{
	#DataService;
	#uri;
	#ItemModel;
	#Container;
	constructor(uri, itemModel, container) {
		this.#uri = uri;
		this.#ItemModel = temModel;
		this.#Container = container;
		this.#DataService = new DataService(this.#uri, this.#ItemModel);
	}

	
}