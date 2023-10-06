import {ListRenderer} from "../view/renderers/ListRenderer.js";

export class Controller{
	#_ItemDataService;
	#_ItemRenderer;
	#_container;
	constructor(ItemDataService, ItemRenderer, container) {
		this.#_ItemDataService = ItemDataService;
		this.#_ItemRenderer = ItemRenderer;
		this.#_container = container;
	}
	async init(){
		try{
			const items = await this.#_ItemDataService.getAll();
			this.initView(items);
		}
		catch (err){
			console.log(err);
		}
	}
	initView(items){
		const ItemListRenderer = new ListRenderer(items, this.#_container, this.#_ItemRenderer);
		ItemListRenderer.clear();
		ItemListRenderer.render();
	}
	search(searchValue){
		if(searchValue === ""){
			this.init();
		}
		else{
			this.searchView(searchValue);
		}
	}
	async searchView(searchValue){
		try{
			const items = await this.#_ItemDataService.search(searchValue);
			console.log(items);
			this.initView(items);
		}
		catch (err){
			console.log(err);
		}
	}

	get ItemDataService(){
		return this.#_ItemDataService;
	}

	get ItemRenderer(){
		return this.#_ItemRenderer;
	}
}