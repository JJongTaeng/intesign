import IElement from "../../utils/IElement";

export default class Card extends HTMLElement {
  static get observedAttributes() {
    return ['style'];
  }

  private readonly $cardContainer: HTMLDivElement;
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

    this.$slotHeader = new IElement<HTMLSlotElement>('slot')
      .setAttribute('name', 'card-header-slot')
      .getElement();

    this.$slotBody = new IElement<HTMLSlotElement>('slot')
      .setAttribute('name', 'card-body-slot')
      .getElement();

    this.$cardHeaderContent = new IElement<HTMLDivElement>('div')
      .appendChild(this.$slotHeader)
      .setAttribute('class', 'card-header-content')
      .getElement();

    this.$cardBodyContent = new IElement('span')
      .appendChild(this.$slotBody)
      .setAttribute('class', 'card-body-content')
      .getElement();

    this.$cardHeader = new IElement<HTMLDivElement>('div')
      .appendChild(this.$cardHeaderContent)
      .setAttribute('class', 'card-header')
      .getElement();

    this.$cardBody = new IElement<HTMLDivElement>('div')
      .appendChild(this.$cardBodyContent)
      .setAttribute('class', 'card-body')
      .getElement();

    this.$cardContainer = new IElement<HTMLDivElement>('div')
      .append(this.$cardHeader, this.$cardBody)
      .setAttribute('class', 'card-container')
      .getElement();

    this.shadowRoot?.append(this.initStyle(), this.$cardContainer);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    switch(name) {
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

  get body(): HTMLElement {
    return this.$slotBody;
  }

  setBody(content: HTMLElement | string) {
    this.$slotBody.replaceChildren();

    new IElement<HTMLSlotElement>('div')
      .setAttribute('slot', 'card-body-slot')
      .append(content)
      .setParent(this.$slotBody)
      .getElement();

    return this;
  }

  get header(): HTMLElement {
    return this.$slotHeader;
  }

  setHeader(content: HTMLElement | string) {
    this.$slotHeader.replaceChildren();

    new IElement<HTMLSlotElement>('div')
      .setAttribute('slot', 'card-header-slot')
      .append(content)
      .setParent(this.$slotHeader)
      .getElement();

    return this;
  }
}

customElements.define('inte-card', Card);
