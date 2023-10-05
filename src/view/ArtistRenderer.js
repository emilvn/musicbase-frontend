export class ArtistRenderer{
	item;
	constructor(Artist) {
		this.item = Artist;
	}
	render(){
		return `
		<article style="background-image: url("${this.item.image}")>
			<h2>${this.item.name}</h2>
		</article>
		`;
	}
	postRender(element){
		// method for adding event listeners
	}
}