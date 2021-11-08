import Button from "../form/button";

export default class PopConfirm extends HTMLElement{
  static get observedAttributes() {
    return ['okText', 'cancelText', 'style'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open'});

    this.createElement();
    this.appendElement();

  }

  createElement() {
    this.$container = document.createElement('div');
    this.$message = document.createElement('div');
    this.$form = document.createElement('div');

    this.$cancel = document.createElement('inte-button');
    this.$ok = document.createElement('inte-button');
  }

  setClass() {
    this.$container.className = 'container';
  }

  appendElement() {
    this.$form.append(this.$cancel, this.$ok);
    this.$container.append(this.$message, this.$form);
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
        display: flex;
        flex-direction: column;
        position: absolute;
      }
      .form {
        
      }
    `

    return this.$style;
  }


}

customElements.define('inte-popconfirm', PopConfirm);