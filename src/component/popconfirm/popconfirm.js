export default class PopConfirm extends HTMLElement{
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
    }
  }

  initStyle() {
    this.$style = document.createElement('style');
    this.$style.textContent = `
      
    `

    return this.$style;
  }


}