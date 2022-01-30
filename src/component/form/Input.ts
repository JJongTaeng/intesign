import IElement from "../../utils/IElement";

export default class Input extends HTMLInputElement {
  static get observedAttributes() {
    return ['type', 'style'];
  }

  $input: HTMLInputElement;
  $style: HTMLStyleElement;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.$input = document.createElement('input');
    this.$style = new IElement<HTMLStyleElement>('style')
      .setTextContent(`
        input {
          height: 30px;
          min-width: 120px;
          border-radius: 2px;
          border: 1px solid #00A6FF;
        }
      `)
      .getElement();
    this.shadowRoot.append(this.$style, this.$input);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'type':
        this.$input.setAttribute('type', newValue);
        break;
    }
  }
}

customElements.define('inte-input', Input,  { extends: 'input' });