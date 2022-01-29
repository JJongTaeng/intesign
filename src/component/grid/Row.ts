import IElement from "../../utils/IElement";

export default class Row extends HTMLElement {
  static get observedAttributes() {
    return ['style'];
  }

  $container: HTMLDivElement;
  $slot: HTMLSlotElement;
  $style: HTMLStyleElement;
  $bodyStyle: HTMLStyleElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.$bodyStyle = this.$style = new IElement<HTMLStyleElement>('style')
      .setTextContent(`
        div[slot="row-slot"] {
          display: flex;
          flex-wrap: wrap;
        }
      `)
      .setParent(document.head)
      .getElement();

    this.$style = new IElement<HTMLStyleElement>('style')
      .setTextContent(`
      `)
      .getElement();

    this.$slot = new IElement<HTMLSlotElement>('slot')
      .setAttribute('name', 'row-slot')
      .getElement();

    this.$container = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'container')
      .appendChild(this.$slot)
      .getElement();

    this.shadowRoot.append(this.$style, this.$container);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'style':
        break;
    }
  }

  setContent(...rest: HTMLElement[]) {
    this.$slot.replaceChildren();

    const $slotChild = new IElement<HTMLDivElement>('div')
      .setAttribute('slot', 'row-slot')
      .append(...rest)
      .setParent(this.$slot)
      .getElement();

    $slotChild.style.display = 'flex';
    $slotChild.style.width = '100%';
    $slotChild.style.flexWrap = 'wrap';

    return this;
  }

}

customElements.define('inte-row', Row);