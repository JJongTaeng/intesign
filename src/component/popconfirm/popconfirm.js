export default class PopConfirm extends HTMLElement{
  static get observedAttributes() {
    return ['okText', 'cancelText', 'style'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open'});


  }

  createElement() {
    this.$container = document.createElement('div');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'okText':
        break;
      case 'cancelText':
        break;
      case 'style':
        this.updateStyle`${newValue}`;
        break;
    }
  }

  updateStyle(style, ...arg) {
    const raw = style.raw.reduce((prev, current, index) => {
      if(arg.length > 0) {
        console.log(index);
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
      
    `

    return this.$style;
  }


}