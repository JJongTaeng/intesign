import Button from "../form/button.js";

export default class PopConfirm extends HTMLElement{
  static get observedAttributes() {
    return ['okText', 'cancelText', 'style'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open'});

    this.createElement();
    this.appendElement();
    this.setClass();
    this.click();
    this.$slot = document.createElement('slot');
    this.$slot.setAttribute('name', 'popconfirm');
    this.shadowRoot.append(this.initStyle(), this.$slot ,this.$container);
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
      console.log(e)
    })
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'okText':
        Button.setName(this.$ok, newValue);
        break;
      case 'cancelText':
        Button.setName(this.$cancel, newValue);
        break;
      case 'style':
        this.updateStyle`${newValue}`;
        break;
    }
  }

  updateStyle(style, ...arg) {
    const raw = style.raw.reduce((prev, current, index) => {
      if(arg.length > 0) {
        return prev + arg[index-1] + current
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
        
        transform: scale(0, 0);
        
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