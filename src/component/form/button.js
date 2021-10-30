export default class Button extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size'];
  }

  static setName($button, name) {
    $button.setAttribute('name', name);
  }

  static setSize($button, size) {
    $button.setAttribute('size', size);
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.createElement();

    this.shadowRoot.append(this.initStyle(), this.$button);
  }

  connectedCallback() {
    this.setAttribute('size', 'normal');
  }

  attributeChangedCallback(name, prev, current) {
    switch (name) {
      case 'name':
        this.$button.textContent = current;
        break;
      case 'size':
        if(current === 'large') {
          this.$button.classList.remove('large');
          this.$button.classList.add('large');
        }
        else if(current === 'small') {
          this.$button.classList.remove('large');
          this.$button.classList.add('small');
        }
        else {
          this.$button.classList.remove('large');
          this.$button.classList.remove('small');
        }
        break;
    }
  }

  createElement() {
    this.$button = document.createElement('button');
    this.$button.classList.add('button');
  }

  initStyle() {
    const $style = document.createElement('style');
    $style.textContent = `
      .button {
        height: 30px;
        background: dodgerblue;
        border: 1px solid dodgerblue;
        color: white;
        transition: 0.2s;
      }
      .button.large {
        height: 35px;
      }
      .button.small {
        height: 25px;
      }
      
      .button:hover {
        background: white;
        color: black;
      }
    `

    return $style
  }

}

customElements.define('inte-button', Button);