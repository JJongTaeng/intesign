import IElement from "../../utils/IElement";

export default class Message extends HTMLElement {
  static get observedAttributes() {
    return ['message', 'type', 'visible', 'style'];
  }

  $middle: HTMLDivElement;
  $container: HTMLDivElement;
  $content: HTMLSpanElement;
  $style: HTMLStyleElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.$content = new IElement<HTMLSpanElement>('span')
      .setAttribute('class', 'content')
      .getElement();

    this.$container = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'container')
      .append(this.$content)
      .getElement();

    this.$middle = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'middle')
      .append(this.$container)
      .getElement();

    this.$style = new IElement<HTMLStyleElement>('style')
      .setTextContent(
        `
        .middle {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
    
          display: flex;
          justify-content: center;
        }
        .container {
          position: absolute;
          top: 30px;
          transform: scale(1, 0);
          padding: 10px;
          transition: 0.3s;
          transform-origin: 50% top;
          min-width: 200px;
          font-weight: bold;
    
          background: white;
          border: 1px solid #eee;
          border-radius: 2px;
          box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, .4);
    
          display: flex;
          justify-content: center;
          align-items: center;
        }`
      )
      .getElement();

    this.shadowRoot.append(this.$style, this.$middle);
    document.body.appendChild(this);
  }

  connectedCallback() {

  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'message':
        this.$content.textContent = newValue;
        break;
      case 'type':
        if(newValue === 'info') {
          this.$content.style.color = '#00A6FF';
        } else if(newValue === 'error') {
          this.$content.style.color = 'crimson';
        }
        break;
      case 'visible':
        if(newValue === 'true') {
          this.$container.style.transform = 'scale(1, 1)';
        } else {
          this.$container.style.transform = 'scale(1, 0)';
        }
        break;
    }
  }

  setMessage(message) {
    this.setAttribute('message', message);
    return this;
  }

  setType(type) {
    this.setAttribute('type', type);
    return this;

  }

  setVisible(visible) {
    this.setAttribute('visible', visible);
  }

}

customElements.define('inte-message', Message);