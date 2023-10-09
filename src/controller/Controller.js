import {ListRenderer} from "../view/renderers/ListRenderer.js";
import { DataService } from "../rest-service/DataService.js";

export class Controller{
	#ItemModel;
	#uri;
	#container;
	#DataService;
	#ItemListRenderer;
	constructor(ItemModel, uri, container) {
		this.#ItemModel = ItemModel;
		this.#uri = uri;
		this.#container = container;
		this.#DataService = new DataService(this.#uri, this.#ItemModel);
	}
	async init() {
		const items = await this.#DataService.getAll()
 		initView(items);
	}
	initView(items) {
		this.#ItemListRenderer = new ListRenderer()
	}

	
}