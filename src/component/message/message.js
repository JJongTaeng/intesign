export default class Message extends HTMLElement {
  static get observedAttributes() {
    return ['message', 'type', 'visible'];
  }

  static create() {
    return document.createElement('inte-message');
  }

  static setMessage($message, message) {
    $message.setAttribute('message', message);
  }

  static setType($message, type) {
    $message.setAttribute('type', type)
  }

  static setVisible($message, visible) {
    $message.setAttribute('visible', visible);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open"});

    this.createElement();
    this.setClassName();
    this.appendElements();
    this.shadowRoot.append(this.initStyle(), this.$middle);
  }

  connectedCallback() {
  }

  attributeChangedCallback(name, prev, current) {
    switch (name) {
      case 'message':
        this.$content.textContent = current;
        break;
      case 'type':
        if(current === 'info') {
          this.$content.style.color = 'dodgerblue';
        } else if(current === 'error') {
          this.$content.style.color = 'crimson';
        }
        break;
      case 'visible':
        if(current === 'open') {
          this.$container.style.transform = 'scale(1, 1)';
        } else {
          this.$container.style.transform = 'scale(1, 0)';
        }
    }
  }

  createElement() {
    this.$middle = document.createElement('middle');
    this.$container = document.createElement('div');
    this.$content = document.createElement('span');

  }

  setClassName() {
    this.$middle.classList.add('middle');
    this.$container.classList.add('container');
    this.$content.classList.add('content');
  }

  appendElements() {
    this.$middle.append(this.$container);
    this.$container.append(this.$content);
  }

  initStyle() {
    const $style = document.createElement('style');
    $style.textContent = `
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
        box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, .2);
        
        display: flex;
        justify-content: center;
        align-items: center;

        
      }
    `

    return $style;
  }
}

customElements.define('inte-message', Message);