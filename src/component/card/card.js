export default class Card extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = document.querySelector('.inte-card-template');
    this.shadowRoot.append(this.initStyle(), template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('Custom element added to page.');
  }

  disconnectedCallback() {
    console.log('Custom element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom element attributes changed.');
  }


  initStyle() {
    const styleElement = document.createElement('style');

    styleElement.textContent = `
        .card-container {
          width: 100%;

          border-radius: 4px;

          display: flex;
          flex-direction: column;
          border: 1px solid #eee;

        }

        .card-header {
            padding: 8px;
            border-bottom: 1px solid #eee;
        }
        .card-header-content {
          font-size: 1.2rem;
        }
        .card-body {
            padding: 8px;
        }
        .card-body-content {

        }
    `

    return styleElement;
  }

  static createHeader() {
    const node = document.createElement('div');
    node.setAttribute('slot', 'card-header-slot');
    return node;
  }

  static createBody() {
    const node = document.createElement('div');
    node.setAttribute('slot', 'card-body-slot');
    return node;
  }

}

customElements.define('inte-card', Card);

