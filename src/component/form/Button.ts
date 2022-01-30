import IElement from "../../utils/IElement";

export interface HTMLInteButtonElement extends HTMLElement {
  setName(name: string): this;
  setSize(size: 'small' | 'normal' | 'large'): this;
}

export default class Button extends HTMLElement implements HTMLInteButtonElement{
  static get observedAttributes() {
    return ['name', 'size', 'style'];
  }

  $button: HTMLButtonElement;
  $style: HTMLStyleElement;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.$style = new IElement<HTMLStyleElement>('style')
      .setTextContent(
        `
          .button {
            height: 30px;
            background: #00A6FF;
            border: 0;
            color: white;
            transition: 0.2s;
            cursor: pointer;
            border-radius: 2px;
          }
          .button.large {
            height: 35px;
          }
          .button.small {
            height: 25px;
          }
          
          .button:hover {
            background: #50C2FF;
            color: white;
          }
        `
      )
      .getElement();

    this.$button = new IElement<HTMLButtonElement>('button')
      .setAttribute('class', 'button')
      .getElement();

    this.shadowRoot.append(this.$style, this.$button);
  }

  connectedCallback() {
    this.setAttribute('size', 'normal');
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch(name) {
      case 'name':
        this.$button.textContent = newValue;
        break;
      case 'size':
        if(newValue === 'large') {
          this.$button.classList.remove('large');
          this.$button.classList.add('large');
        } else if(newValue === 'small') {
          this.$button.classList.remove('large');
          this.$button.classList.add('small');
        } else {
          this.$button.classList.remove('large');
          this.$button.classList.remove('small');
        }
        break;
    }
  }


  setName(name: string) {
    this.setAttribute('name', name);
    return this;
  }

  setSize(size: 'small' | 'normal' | 'large') {
    this.setAttribute('size', size);
    return this;
  }
}

customElements.define('inte-button', Button);