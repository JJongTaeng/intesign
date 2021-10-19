import Component from "../component.js";

export default class Card extends HTMLElement {


  constructor() {
    super();

  }



  style() {
    this.$wrapper.style.width = '100%';
    this.$wrapper.style.height = '200px';
    this.$wrapper.style.display = 'flex';
    this.$wrapper.style.flexDirection = 'column';
    this.$wrapper.style.borderRadius = '4px';
    this.$wrapper.style.border = '1px solid #ddd';

    this.$head.style.height = '10%';
    this.$head.style.fontSize = '16px';
    this.$head.style.padding = '16px';
    this.$head.style.borderBottom = '1px solid #ddd'

    this.$body.style.height = '90%'
    this.$body.style.padding = '16px';

  }

};
