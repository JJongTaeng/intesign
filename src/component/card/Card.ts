export default class Card extends HTMLElement {
  static get observedAttributes() {
    return ['style'];
  }

  $cardContainer:  HTMLDivElement;
  $cardHeader: HTMLDivElement;
  $cardBody: HTMLDivElement;
  $cardHeaderContent: HTMLSpanElement;
  $cardBodyContent: HTMLSpanElement;
  $slotHeader: HTMLSlotElement;
  $slotBody: HTMLSlotElement;
  $style: HTMLStyleElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.$style = document.createElement('style');
    this.$cardContainer = document.createElement('div');
    this.$cardHeader = document.createElement('div');
    this.$cardBody = document.createElement('div');
    this.$cardHeaderContent = document.createElement('span');
    this.$cardBodyContent = document.createElement('span');
    this.$slotHeader = document.createElement('slot');
    this.$slotBody = document.createElement('slot');

    this.$cardHeaderContent.appendChild(this.$slotHeader);
    this.$cardBodyContent.appendChild(this.$slotBody);
    this.$cardContainer.append(this.$cardHeader, this.$cardBody);
    this.$cardHeader.appendChild(this.$cardHeaderContent);
    this.$cardBody.appendChild(this.$cardBodyContent);


    this.$cardContainer.setAttribute('class', 'card-container');
    this.$cardHeader.setAttribute('class', 'card-header');
    this.$cardBody.setAttribute('class', 'card-body');
    this.$cardHeaderContent.setAttribute('class', 'card-header-content');
    this.$cardBodyContent.setAttribute('class', 'card-body-content');
    this.$slotHeader.setAttribute('name', 'card-header-slot');
    this.$slotBody.setAttribute('name', 'card-body-slot');


    this.shadowRoot?.append(this.initStyle(), this.$cardContainer);

  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }

  adoptedCallback() {
  }

  attributeChangedCallback(name: string , oldValue: string, newValue: string): void {
    switch (name) {
      case 'style':
        this.updateStyle(newValue);
        break;
    }
  }

  updateStyle(style: string): void {
    this.$style.textContent = this.$style.textContent + style;
  }

  initStyle() {

    this.$style.textContent = `

        .card-container {
          width: 100%;
          border-radius: 2px;

          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
          background: white;
        }

        .card-header {
            padding: 8px;
            border-bottom: 1px solid #eee;
        }
        .card-header-content {
        }
        .card-body {
            padding: 8px;
        }
        .card-body-content {
        }
    `

    return this.$style;
  }

  set body(element: HTMLElement | string) {
    this.clearChildren(this.$slotBody);

    const node = document.createElement('div');
    node.setAttribute('slot', 'card-body-slot');
    node.append(element);
    this.$slotBody.append(node);
  }

  setBody(element: HTMLElement | string) {
    this.clearChildren(this.$slotBody);

    const node = document.createElement('div');
    node.setAttribute('slot', 'card-body-slot');
    node.append(element);
    this.$slotBody.append(node);
    return this;
  }

  set header(element: HTMLElement | string) {
    this.clearChildren(this.$slotHeader);

    const node = document.createElement('div');
    node.setAttribute('slot', 'card-header-slot');
    node.append(element);
    this.$slotHeader.append(node);
  }

  setHeader(element: HTMLElement | string) {
    this.clearChildren(this.$slotHeader);

    const node = document.createElement('div');
    node.setAttribute('slot', 'card-header-slot');
    node.append(element);
    this.$slotHeader.append(node);
    return this;
  }

  clearChildren(element: HTMLElement) {
    element.replaceChildren();
  }
}

customElements.define('inte-card', Card);
