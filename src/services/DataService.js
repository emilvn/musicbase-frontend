export class DataService{
	static endpoint = "musicbase-backend.azurewebsites.net";
	#_url;
	#_uri;
	#_Model;

	constructor(uri, Model){
		this.#_uri = uri;
		this.#_url = DataService.endpoint + uri;
		this.#_Model = Model;
	}

	async getAll(){
		const response = await fetch(this.#_url);
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return data.map((object) => new this.#_Model(object));
	}

	async getById(id){
		const response = await fetch(this.#_url + "/" + id);
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return new this.#_Model(data);
	}

	async addOne(object){
		const response = await fetch(this.#_url, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(object)
		});
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return new this.#_Model(data);
	}

	async updateOne(id, object){
		const response = await fetch(this.#_url + "/" + id, {
			method: "PUT",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(object)
		});
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return new this.#_Model(data);
	}
	async deleteById(id){
		const response = await fetch(this.#_url + "/" + id, {
			method: "DELETE"
		});
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return new this.#_Model(data);
	}

	async search(query){
		const response = await fetch(DataService.endpoint + "/search" + this.#_uri + "?q=" + query);
		if(!response.ok){
			throw await response.json();
		}
		const data = await response.json();
		return data.map((object) => new this.#_Model(object));
	}
}