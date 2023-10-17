/**
 * DataService class
 * @class
 * @property {string} endpoint static url of the endpoint
 * @property {function} getAll function that returns all items
 * @property {function} getById function that returns one item
 * @property {function} search function that returns items that match the search string
 * @property {function} addOne function that adds an item
 * @property {function} updateOne function that updates an item
 * @property {function} deleteById function that deletes an item
 */
export class DataService{
	static endpoint = "https://musicbase-backend.azurewebsites.net";
	#url;
	#uri;
	#Model;

	/**
	 * DataService constructor
	 * @param {string} uri uri of the endpoint
	 * @param {typeof Item}Model constructor for the item
	 * @constructs DataService
	 */
	constructor(uri, Model){
		this.#uri = uri;
		this.#url = DataService.endpoint + uri;
		this.#Model = Model;
	}

	/**
	 * Get all items
	 * @returns {Promise<Item[]>}
	 */
	async getAll(){
		const response = await fetch(this.#url);
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return data.map((object) => new this.#Model(object));
	}

	/**
	 * Get one item by id
	 * @param {string} id
	 * @returns {Promise<Item>}
	 */
	async getById(id){
		const response = await fetch(this.#url + "/" + id);
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return new this.#Model(data);
	}

	/**
	 * Add one item
	 * @param {ArtistData|AlbumData|TrackData} itemData
	 * @returns {Promise<void>}
	 */
	async addOne(itemData){
		const response = await fetch(this.#url, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(itemData)
		});
		if(!response.ok){
			throw await response.json();
		}
	}

	/**
	 * Update one item
	 * @param {string} id
	 * @param {ArtistData|AlbumData|TrackData} itemData
	 * @returns {Promise<void>}
	 */
	async updateOne(id, itemData){
		const response = await fetch(this.#url + "/" + id, {
			method: "PUT",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(itemData)
		});
		if(!response.ok){
			throw await response.json();
		}
	}

	/**
	 * Delete one item
	 * @param {string} id
	 * @returns {Promise<void>}
	 */
	async deleteById(id){
		const response = await fetch(this.#url + "/" + id, {
			method: "DELETE"
		});
		if(!response.ok){
			throw await response.json();
		}
	}

	/**
	 * Search for items
	 * @param {string} query
	 * @returns {Promise<Item[]>}
	 */
	async search(query){
		const response = await fetch(DataService.endpoint + "/search" + this.#uri + "?q=" + query);
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return data.map((object) => new this.#Model(object));
	}
}