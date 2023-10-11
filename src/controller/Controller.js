import {ListRenderer} from "../view/renderers/ListRenderer.js";
import { DataService } from "../services/DataService.js";

export class Controller{
	#ItemModel;
	#uri;
	#ItemRenderer;
	#container;
	#dataService;
	
	constructor(ItemModel, uri, ItemRenderer, container) {
		this.#ItemModel = ItemModel;
		this.#uri = uri;
		this.#ItemRenderer = ItemRenderer;
		this.#container = container;
		this.#dataService = new DataService(this.#uri, this.#ItemModel);
	}
	async init() {
		const items = await this.#dataService.getAll()
 		this.initView(items);
	}
	initView(items) {
		const ItemListRenderer = new ListRenderer(items, this.#container, this.#ItemRenderer);
		ItemListRenderer.clear();
		ItemListRenderer.render();
	}
	search(searchString) {
		if(searchString === "") {
			this.init();
		} else {
			this.searchView(searchString)
		}
	}
	async searchView(searchString) {
		const items = await this.#dataService.search(searchString);
		this.initView(items);
	}

	
}