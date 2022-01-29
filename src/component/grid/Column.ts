import IElement from "../../utils/IElement";

interface ColumnInterface {
  get observedAttributes(): ColumnAttributeType[];
  attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
  connectedCallback(): void;
  updateStyleBySpan(span: SpanType): void;
}

type ColumnAttributeType = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'style'

interface SpanType {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

export default class Column extends HTMLElement implements ColumnInterface {
  get observedAttributes(): ColumnAttributeType[] {
    return ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'style']
  }

  private readonly $container: HTMLDivElement;
  private readonly $slot: HTMLSlotElement;
  private readonly $style: HTMLStyleElement;

  span: SpanType = {
    xxl: '',
    xl: '',
    lg: '',
    md: '',
    sm: '',
    xs: '',
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.$container = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'container')
      .appendChild(this.$slot)
      .getElement();

    this.$slot = new IElement<HTMLSlotElement>('slot')
      .setAttribute('name', 'column-slot')
      .getElement();

    this.$style = document.createElement('style');

    this.shadowRoot.append(this.$style, this.$container);
  }

  connectedCallback() {
    this.span.xxl = this.getAttribute('xxl')
    this.span.xl = this.getAttribute('xl')
    this.span.lg = this.getAttribute('lg')
    this.span.md = this.getAttribute('md')
    this.span.sm = this.getAttribute('sm')
    this.span.xs = this.getAttribute('xs')

    this.updateStyleBySpan({
      ...this.span,
    })
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case 'xxl':
          this.span = {
            ...this.span,
            xxl: newValue,
          }
          break;
        case 'xl':
          this.span = {
            ...this.span,
            xl: newValue,
          }
          break;
        case 'lg':
          this.span = {
            ...this.span,
            lg: newValue,
          }
          break;
        case 'md':
          this.span = {
            ...this.span,
            md: newValue,
          }
          break;
        case 'sm':
          this.span = {
            ...this.span,
            sm: newValue,
          }
          break;
        case 'xs':
          this.span = {
            ...this.span,
            xs: newValue,
          }
          break;
      }

      this.updateStyleBySpan({ ...this.span });
    }
  }

  updateStyleBySpan({ xxl, xl, lg, md, sm, xs }) {
    this.$style.textContent = `
      :host {
        margin: 10px;
      }
      @media(max-width: 576px) {
        :host {
            width: calc(${xs * 4.166666}% - 20px);
        }
      }
      @media(min-width: 576px) and (max-width: 768px) {
        :host {
            width: calc(${sm * 4.166666}% - 20px);
        }
      }
      @media(min-width: 768px) and (max-width: 992px) {
        :host {
            width: calc(${md * 4.166666}% - 20px);
        }
      }
      @media(min-width: 992px) and (max-width: 1200px) {
        :host {
            width: calc(${lg * 4.166666}% - 20px);
        }
      }
      @media(min-width: 1200px) and (max-width: 1600px) {
        :host {
            width: calc(${xl * 4.166666}% - 20px);
        }
      }
      @media(min-width: 1600px) {
        :host {
            width: calc(${xxl * 4.166666}% - 20px);
        }
      }
    `
  }

  setSpan(span: SpanType) {
    this.setAttribute('xxl', span.xxl);
    this.setAttribute('xl', span.xl);
    this.setAttribute('lg', span.lg);
    this.setAttribute('md', span.md);
    this.setAttribute('sm', span.sm);
    this.setAttribute('xs', span.xs);

    return this;
  }

  setContent(content: HTMLElement | string) {
    this.$slot.replaceChildren();

    const $slotChild = new IElement<HTMLDivElement>('div')
      .setAttribute('slot', 'column-slot')
      .append(content)
      .getElement();

    this.$slot.append($slotChild);
    return this;
  }
}

customElements.define('inte-column', Column);