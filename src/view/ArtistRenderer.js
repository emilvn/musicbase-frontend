export class ArtistRenderer{
	item;
	constructor(Artist) {
		this.item = Artist;
	}
	render(){
		return `
		<article>
			<h2>${this.item.name}</h2>
			<div class="artist-buttons">
				<button class="edit-button"><img src="icons/edit-icon.png" alt="Edit"></button>
				<button class="delete-button"><img src="icons/delete-icon.png" alt="Delete"></button>
			</div>
		</article>
		`;
	}
	postRender(element){
		element.style.backgroundImage = `url(${this.item.image})`;
		//TODO: add event listeners for buttons
	}
}