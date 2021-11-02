export default class Row extends HTMLElement{
  static get observedAttributes() {
    return ['style'];
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
  $container

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.createElement();

    this.shadowRoot.append( this.initStyle(), this.$container);

  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(newValue);
      switch (name) {
        case 'style':
          this.updateStyle(newValue);
          break;
      }
  }

  connectedCallback() {
  }

  createElement() {
    this.$container = document.createElement('div');
    this.$slot = document.createElement('slot');

    this.$container.setAttribute('class', 'container');
    this.$slot.setAttribute('name', 'row-slot');

    this.$container.appendChild(this.$slot);
  }

  updateStyle(style) {
    this.$style.textContent = this.$style.textContent + style;
  }

  initStyle() {
    this.$style = document.createElement('style');
    this.$style.textContent = ``;
    return this.$style;
  }
}

customElements.define('inte-row', Row);