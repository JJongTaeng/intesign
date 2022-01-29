interface IEInterface {
  setAttribute(name: string, attribute: string): this;
  append(nodes: string | Node[]): this;
  clearChildren(): this;
  appendChild(node: Node): this;
}

export default class IElement<T extends HTMLElement> implements IEInterface {
  private readonly $element: T;

  constructor(tag: keyof HTMLElementTagNameMap) {
    this.$element = document.createElement(tag) as T;
  }

  setAttribute(name, attribute) {
    this.$element.setAttribute(name, attribute);
    return this;
  }

  append(...nodes) {
    this.$element.append(...nodes);
    return this;
  }

  appendChild(node) {
    this.$element.append(node);
    return this;
  }

  getElement(): T {
    return this.$element;
  }

  clearChildren() {
    this.$element.replaceChildren();
    return this;
  }
};