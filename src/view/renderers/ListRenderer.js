export class ListRenderer {
    #_renderers;
    #_container;
    constructor(list, container, ItemRenderer) {
        this.#_container = container
        this.#_renderers = list.map(item => new ItemRenderer(item))
    }
    render() {
            this.#_renderers.forEach(itemRenderer => {
                const html = itemRenderer.render()
                this.#_container.insertAdjacentHTML("beforeend", html)
                const element = this.#_container.lastElementChild
                if(itemRenderer.postRender !== undefined) itemRenderer.postRender(element);
            })
        }

    clear() {
        this.#_container.innerHTML = "";
    }
}