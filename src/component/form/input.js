export default class Input extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'style'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'type':
        this.input.setAttribute('type', current);
        break;
      case 'style':
        this.updateStyle(newValue);
        break;
    }
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.createElement();
    this.initStyle();
    this.shadowRoot.append(this.$style, this.$input);
  }

  createElement() {
    this.$input = document.createElement('input');

  }

  updateStyle(style) {
    this.$style.textContent = this.$style.textContent + style;
  }

  initStyle() {
    this.$style = document.createElement('style');
    this.$style.textContent = `
      input {
        height: 30px;
        min-width: 120px;
        border-radius: 2px;
        border: 1px solid dodgerblue;
      }
    `
  }

}

customElements.define('inte-input', Input);