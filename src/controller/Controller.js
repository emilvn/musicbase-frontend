import {ListRenderer} from "../view/renderers/ListRenderer.js";
import { DataService } from "../services/DataService.js";

/**
 * Controller class
 * @class
 * @property {function} init function that initializes the controller
 * @property {function} initView function that initializes the view
 * @property {function} search function that handles search event
 * @property {function} searchView function that searches for items
 */
export class Controller{
	#ItemModel;
	#uri;
	#ItemRenderer;
	#container;
	#dataService;

	/**
	 * Controller constructor
	 * @param {Function} ItemModel Model constructor for the item
	 * @param {string} uri uri of the endpoint
	 * @param {typeof ItemRenderer} ItemRenderer Renderer constructor for the item
	 * @param {HTMLElement} container container to render the items in
	 * @constructs Controller
	 */
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