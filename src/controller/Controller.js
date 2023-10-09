import {ListRenderer} from "../view/renderers/ListRenderer.js";
import { DataService } from "../rest-service/DataService.js";

export class Controller{
	#ItemModel;
	#uri;
	#ItemRenderer;
	#container;
	#DataService;
	
	constructor(ItemModel, uri, ItemRenderer, container) {
		this.#ItemModel = ItemModel;
		this.#uri = uri;
		this.#ItemRenderer = ItemRenderer;
		this.#container = container;
		this.#DataService = new DataService(this.#uri, this.#ItemModel);
	}
	async init() {
		const items = await this.#DataService.getAll()
 		initView(items);
	}
	initView(items) {
		const ItemListRenderer = new ListRenderer(items, this.#container, this.#ItemRenderer);
		ItemListRenderer.clear();
		ItemListRenderer.render();
	}
	search(searchString) {
		if(searchString != "") {
			this.init();
		} else {
			this.searchView(searchString)
		}
	}
	async searchView(searchString) {
		const items = await this.#DataService.search(searchString);
		initViews(items);
	}

	
}