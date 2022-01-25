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
    this.createElement();

    this.shadowRoot

    this.$style = document.createElement('style');
    this.$cardContainer = document.createElement('div');
    this.$cardHeader = document.createElement('div');
    this.$cardBody = document.createElement('div');
    this.$cardHeaderContent = document.createElement('span');
    this.$cardBodyContent = document.createElement('span');
    this.$slotHeader = document.createElement('slot');
    this.$slotBody = document.createElement('slot');
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

  createElement() {

    this.$cardContainer.setAttribute('class', 'card-container');
    this.$cardHeader.setAttribute('class', 'card-header');
    this.$cardBody.setAttribute('class', 'card-body');
    this.$cardHeaderContent.setAttribute('class', 'card-header-content');
    this.$cardBodyContent.setAttribute('class', 'card-body-content');
    this.$slotHeader.setAttribute('name', 'card-header-slot');
    this.$slotBody.setAttribute('name', 'card-body-slot');

    this.$cardHeaderContent.appendChild(this.$slotHeader);
    this.$cardBodyContent.appendChild(this.$slotBody);
    this.$cardContainer.append(this.$cardHeader, this.$cardBody);
    this.$cardHeader.appendChild(this.$cardHeaderContent);
    this.$cardBody.appendChild(this.$cardBodyContent);

    this.shadowRoot?.append(this.initStyle(), this.$cardContainer);
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

  static create(head: HTMLElement, body: HTMLElement) {
    const $card = document.createElement('inte-card');

    const headerSlot = Card.createHeader();
    const bodySlot = Card.createBody();

    $card.append(headerSlot, bodySlot);

    headerSlot.append(head);
    bodySlot.append(body);

    return $card;
  }

}

customElements.define('inte-card', Card);

