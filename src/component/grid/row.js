export default class Row extends HTMLElement{

  static create(...rest) {
    const $row = document.createElement('inte-row');
    const $slotDiv = Row.createRowSlot();


    $slotDiv.setAttribute('class', 'column-container');
    $slotDiv.style.display = 'flex';
    $slotDiv.style.width = '100%';
    $slotDiv.style.flexWrap = 'wrap';

    $slotDiv.append(...rest);
    $row.append($slotDiv);

    return $row;
  }

  $container

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.createElement();
  }

  connectedCallback() {
  }

  createElement() {
    this.$container = document.createElement('div');
    this.$slot = document.createElement('slot');

    this.$container.setAttribute('class', 'container');
    this.$slot.setAttribute('name', 'row-slot');

    this.$container.appendChild(this.$slot);

    this.shadowRoot.append( this.$container);
  }

  static createRowSlot() {
    const node = document.createElement('div');
    node.setAttribute('slot', 'row-slot');

    return node;
  }

  static create(...rest) {
    const $row = document.createElement('inte-row');
    const $slotDiv = Row.createRowSlot();


    $slotDiv.setAttribute('class', 'column-container');
    $slotDiv.style.display = 'flex';
    $slotDiv.style.width = '100%';
    $slotDiv.style.flexWrap = 'wrap';

    $slotDiv.append(...rest);
    $row.append($slotDiv);

    return $row;
  }
}

customElements.define('inte-row', Row);