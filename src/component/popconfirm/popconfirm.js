export default class PopConfirm extends HTMLElement{
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});


  }

  createElement() {
    this.$container = document.createElement('div');


  }

  initStyle() {
    this.$style = document.createElement('style');
    this.$style.textContent = `
      
    `

    return this.$style;
  }


}