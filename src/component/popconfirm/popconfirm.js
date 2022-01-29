import Button from "../form/button.js";

export default class PopConfirm extends HTMLElement {
  static get observedAttributes() {
    return ['oktext', 'canceltext', 'style', 'visible', 'okhandler', 'message'];
  }

  static okHandler($popconfirm, f) {
    $popconfirm.$ok.addEventListener('click', f);
  }

  mousePosition = {
    x: 0,
    y: 0,
  };
  x

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.createElement();
    this.appendElement();
    this.setClass();
    this.click();
    this.$slot = document.createElement('slot');
    this.$slot.setAttribute('name', 'popconfirm');
    this.shadowRoot.append(this.initStyle(), this.$slot, this.$container);

    document.addEventListener('mousedown', this.getClickPosition.bind(this), true);
    this.open();
    this.close();

  }

  createElement() {

    this.$container = document.createElement('div');
    this.$message = document.createElement('div');
    this.$message.textContent = 'Any Message';
    this.$form = document.createElement('div');

    this.$cancel = document.createElement('inte-button');
    Button.setName(this.$cancel, 'Cancel');

    this.$ok = document.createElement('inte-button');
    Button.setName(this.$ok, 'Ok');

  }

  setClass() {
    this.$container.className = 'container';
    this.$message.className = 'message';
    this.$form.className = 'form';
    this.$cancel.className = 'cancel';
    this.$ok.className = 'ok';
  }

  appendElement() {
    this.$form.append(this.$cancel, this.$ok);
    this.$container.append(this.$message, this.$form);
  }

  click() {
    this.$container.addEventListener('click', (e) => {
    })
  }

  open() {
    this.$slot.addEventListener('click', (e) => {
      this.setAttribute('visible', 'true');
    })
  }

  close() {
    this.$cancel.addEventListener('click', (e) => {
      this.setAttribute('visible', 'false');
    })
  }


  getClickPosition(e) {

    this.mousePosition.x = e.pageX;
    this.mousePosition.y = e.pageY;
  }

  connectedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'visible':
        if (newValue === 'true') {
          this.updateStyle`
            .container {
              left: ${this.mousePosition.x}px;
              top: ${this.mousePosition.y}px;
              transform: scale(1, 1);
              opacity: 1;
            }
          `;
        } else {
          this.updateStyle`
            .container {
              transform: scale(0, 0);
              opacity: 0;
            }
          `;
        }
        break;
      case 'oktext':
        Button.setName(this.$ok, newValue);
        break;
      case 'canceltext':
        Button.setName(this.$cancel, newValue);
        break;
      case 'message':
        this.$message.textContent = newValue;
        break;
      case 'style':
        this.updateStyle`${newValue}`;
        break;
    }
  }

  updateStyle(style, ...arg) {
    const raw = style.raw.reduce((prev, current, index) => {
      if (arg.length > 0) {
        return prev + arg[index - 1] + current
      } else {
        return prev + current;
      }
    });
    this.$style.textContent = this.$style.textContent + raw;
  }

  initStyle() {
    this.$style = document.createElement('style');
    this.$style.textContent = `
      .container {
        position: absolute;
        display: flex;
        flex-direction: column;
        position: absolute;
        background: white;
        padding: 10px;
        min-width: 160px;
        box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, .4);
        
        transform-origin: 0 0;
        transform: scale(0, 0);
        opacity: 0;
        transition: 0.2s;
      }
      .message {
        margin: 10px;
      }
      .form {
        display: flex;
        margin-left: auto;
      }
      .cancel {
        
        margin: 4px;
      }
      .ok {
        margin: 4px;
      }
    `

    return this.$style;
  }


}

customElements.define('inte-popconfirm', PopConfirm);