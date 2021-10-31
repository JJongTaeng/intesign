export default class Input extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'style'];
  }

  attributeChangedCallback(name, prev, current) {
    switch (name) {
      case 'type':
        this.input.setAttribute('type', current);
        break;
      case 'style':
        this.updateStyle(current);
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

  updateStyle(styleStr) {
    this.$style = this.$style + styleStr;
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