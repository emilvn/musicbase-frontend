export class ListRenderer {
    #_renderers;
    #_container;
    constructor(list, container, ItemRenderer) {
        this.#_container = container
        this.#_renderers = list.map(item => new ItemRenderer(item))
    }
    render() {
            let RenderALl;
            RenderALl.forEach(ItemRenderer => {
                const html = ItemRenderer.render()
                this.#_container.insertAdjacentHTML("beforeend", html)
                const addHtml =this.#_container.lastElementChild
                ItemRenderer.postRender !== undefined ? ItemRenderer.postRender(addHtml) : undefined
            })

        }

    clear() {
        this.#_container.innerHTML = "";
    }
}