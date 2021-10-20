export default class Row extends HTMLElement{

  $container

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.createElement();
  }

  initStyle() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
    `;

    return styleElement;
  }

  createElement() {
    this.$container = document.createElement('div');
    this.$slot = document.createElement('slot');

    this.$slot.setAttribute('name', 'row-slot');

    this.$container.appendChild(this.$slot);

    this.shadowRoot.append(this.initStyle(), this.$container);
  }

  static createRowSlot() {
    const node = document.createElement('div');
    node.setAttribute('slot', 'row-slot');
    node.setAttribute('class', 'container');

    return node;
  }

  static create(...rest) {
    const $row = document.createElement('inte-row');
    const slot = Row.createRowSlot();

    slot.append(...rest);
    $row.append(slot);

    return $row;
  }
}

customElements.define('inte-row', Row);