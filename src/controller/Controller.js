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
	 * @param {Function} ItemRenderer Renderer constructor for the item
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

	/**
	 * Initialize the controller
	 * @returns {Promise<void>}
	 */
	async init() {
		try{
			const items = await this.#dataService.getAll()
 			this.initView(items);
		}
		catch(err){
			throw new Error(`Error initializing ${this.#uri}: ${err}`);
		}
	}

	/**
	 * Initialize the view
	 * @param {Item[]} items
	 */
	initView(items) {
		const ItemListRenderer = new ListRenderer(items, this.#container, this.#ItemRenderer);
		ItemListRenderer.clear();
		ItemListRenderer.render();
	}

	/**
	 * Handle search event
	 * @param {string} searchString
	 */
	async search(searchString) {
		try {
			if(searchString === "") {
				await this.init();
			} else {
				await this.searchView(searchString);
			}
		}
		catch (err){
			throw err;
		}
	}

	/**
	 * Search for items
	 * @param {string} searchString
	 * @returns {Promise<void>}
	 */
	async searchView(searchString) {
		try{
			const items = await this.#dataService.search(searchString);
			this.initView(items);
		}
		catch(err){
			throw new Error(`Error searching for ${this.#uri}: ${err}`);
		}
	}
}