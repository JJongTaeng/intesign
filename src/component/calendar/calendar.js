class Calendar extends HTMLElement {
  static get observedAttributes() {
    return ['style'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open'});

    this.createElement();
    this.setClass();

    this.shadowRoot.append(this.initStyle(), this.$container);
  }

  createElement() {
    this.$container = document.createElement('div');

  }

  setClass() {
    this.$container.className = 'container';
  }

  initStyle() {
    this.$style = document.createElement('style');
    this.$style.textContent = `
      .container {
        position: relative;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 5px;
        width: 15rem;
        height: 18rem;
        flex-shrink: 0;
      }
    `

    return this.$style;
  }

}