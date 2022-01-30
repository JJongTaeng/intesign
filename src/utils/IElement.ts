interface IEInterface {
  setAttribute(name: string, attribute: string): this;
  append(nodes: string | Node[]): this;
  clearChildren(): this;
  appendChild(node: Node): this;
  setParent(node: HTMLElement): this;
  setTextContent(text: string): this;
}

type CustomTag = 'inte-button' | 'inte-input' | 'inte-row' | 'inte-column';
type IElementTag = keyof HTMLElementTagNameMap | CustomTag;

export default class IElement<T extends HTMLElement> implements IEInterface {
  private readonly $element: T;

  constructor(tag: IElementTag) {
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

  setParent(node: HTMLElement) {
    node.appendChild(this.$element);
    return this;
  }

  setTextContent(text: string) {
    this.$element.textContent = text;
    return this;
  }
};