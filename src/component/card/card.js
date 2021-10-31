export default class Card extends HTMLElement {

  $cardContainer
  $cardHeader
  $cardBody
  $cardHeaderContent
  $cardBodyContent
  $slotHeader
  $slotBody

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.createElement();
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }

  adoptedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
  }


  initStyle() {
    const styleElement = document.createElement('style');

    styleElement.textContent = `

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

    return styleElement;
  }

  createElement() {
    this.$cardContainer = document.createElement('div');

    this.$cardHeader = document.createElement('div');
    this.$cardBody = document.createElement('div');

    this.$cardHeaderContent = document.createElement('span');
    this.$cardBodyContent = document.createElement('span');

    this.$slotHeader = document.createElement('slot');
    this.$slotBody = document.createElement('slot');

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

    this.shadowRoot.append(this.initStyle(), this.$cardContainer);
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

  static create(head, body) {
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

