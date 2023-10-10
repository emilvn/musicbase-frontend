export class ListRenderer {
    #_renderers;
    #_container;
    constructor(list, container, ItemRenderer) {
        this.#_container = container
        this.#_renderers = list.map(item => new ItemRenderer(item))
    }
    render() {
            this.#_renderers.forEach(ItemRenderer => {
                const html = ItemRenderer.render()
                this.#_container.insertAdjacentHTML("beforeend", html)
                const element = this.#_container.lastElementChild
                if(ItemRenderer.postRender !== undefined) ItemRenderer.postRender(element);
            })
        }

    clear() {
        this.#_container.innerHTML = "";
    }
}