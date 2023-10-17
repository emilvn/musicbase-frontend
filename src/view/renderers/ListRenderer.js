/**
 * ListRenderer class
 * @class
 * @property {function} render function that renders a list of items
 * @property {function} clear function that clears the list
 * @property {ItemRenderer} ItemRenderer constructor for the ItemRenderer
 */
export class ListRenderer {
    #renderers;
    #container;

    /**
     * ListRenderer constructor
     * @param {Item[]} list list of items
     * @param {HTMLElement} container container to render the items in
     * @param {typeof ItemRenderer} IRenderer constructor for the ItemRenderer
     * @constructs ListRenderer
     */
    constructor(list, container, IRenderer) {
        this.#container = container
        this.#renderers = list.map(item => new IRenderer(item));
    }
    render() {
            this.#renderers.forEach(itemRenderer => {
                const html = itemRenderer.render()
                this.#container.insertAdjacentHTML("beforeend", html)
                const element = this.#container.lastElementChild
                if(itemRenderer.postRender !== undefined) itemRenderer.postRender(element);
            })
        }

    clear() {
        this.#container.innerHTML = "";
    }
}