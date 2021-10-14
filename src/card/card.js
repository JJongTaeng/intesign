import Component from "../component.js";

export default class Card{


  constructor({ title, content }) {
    this.title = title;
    this.content = content;

    this.$wrapper = Component.createElement({ type: 'div', className: 'card-wrapper' });
    this.$head = Component.createElement({ type: 'div', className: 'card-head', content: this.title });
    this.$body = Component.createElement({ type: 'div', className: 'card-body', content: this.title });

    this.style();
    this.init();

  }

  init() {

    if (typeof this.content === 'object') {
      this.$body.appendChild(this.content);
    } else if (typeof this.content === 'string') {
      this.$body.textContent = this.content;
    }

    this.$wrapper.appendChild(this.$head);
    this.$wrapper.appendChild(this.$body);
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

  get getElement() {
    return this.$wrapper;
  }
};