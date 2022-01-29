export default class Card extends HTMLElement {
  static get observedAttributes() {
    return ['style'];
  }

  private readonly $cardContainer:  HTMLDivElement;
  private readonly $cardHeader: HTMLDivElement;
  private readonly $cardBody: HTMLDivElement;
  private readonly $cardHeaderContent: HTMLSpanElement;
  private readonly $cardBodyContent: HTMLSpanElement;
  private readonly $slotHeader: HTMLSlotElement;
  private readonly $slotBody: HTMLSlotElement;
  private readonly $style: HTMLStyleElement;

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

  createSlot(slot: HTMLSlotElement, slotAttribute: string) {
    this.clearChildren(slot);

    const $div = document.createElement('div');
    $div.setAttribute('slot', slotAttribute);

    return $div;
  }

  get body(): HTMLElement {
    return this.$slotBody;
  }

  set body(content: HTMLElement | string) {
    const $divSlot = this.createSlot(this.$slotBody, 'card-body-slot');
    $divSlot.append(content); // div[slot] element에 내용 붙임
    this.$slotBody.append($divSlot);
  }

  setBody(content: HTMLElement | string) {
    const $divSlot = this.createSlot(this.$slotBody, 'card-body-slot');
    $divSlot.append(content);
    this.$slotBody.append($divSlot);
    return this;
  }

  get header(): HTMLElement {
    return this.$slotHeader;
  }

  set header(content: HTMLElement | string) {
    const $divSlot = this.createSlot(this.$slotHeader, 'card-header-slot');
    $divSlot.append(content);
    this.$slotHeader.append($divSlot);
  }

  setHeader(content: HTMLElement | string) {
    const $divSlot = this.createSlot(this.$slotHeader, 'card-header-slot');
    $divSlot.append(content);
    this.$slotHeader.append($divSlot);
    return this;
  }

  clearChildren(element: HTMLElement) {
    element.replaceChildren();
  }
}

customElements.define('inte-card', Card);
