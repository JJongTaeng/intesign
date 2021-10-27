export default class Column extends HTMLElement {
  get observedAttributes() {
    return ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
  }

  $container
  span = {}

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.createElement();
  }


  connectedCallback() {
    this.span.xxl = this.getAttribute('xxl')
    this.span.xl = this.getAttribute('xl')
    this.span.lg = this.getAttribute('lg')
    this.span.md = this.getAttribute('md')
    this.span.sm = this.getAttribute('sm')
    this.span.xs = this.getAttribute('xs')

    this.updateStyle({
      ...this.span,
    })
  }

  attributeChangedCallback(name, prev, current) {
    if (prev !== current) {
      switch (name) {
        case 'xxl':
          this.span = {
            ...this.span,
            xxl: current,
          }
          break;
        case 'xl':
          this.span = {
            ...this.span,
            xl: current,
          }
          break;
        case 'lg':
          this.span = {
            ...this.span,
            lg: current,
          }
          break;
        case 'md':
          this.span = {
            ...this.span,
            md: current,
          }
          break;
        case 'sm':
          this.span = {
            ...this.span,
            sm: current,
          }
          break;
        case 'xs':
          this.span = {
            ...this.span,
            xs: current,
          }
          break;
      }

      this.updateStyle({ ...this.span });
    }
  }

  initStyle() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
    `;

    return styleElement;
  }

  createElement() {

    this.$container = document.createElement('div');
    this.$slot = document.createElement('slot');

    this.$container.setAttribute('class', 'container');
    this.$slot.setAttribute('name', 'column-slot');

    this.$container.appendChild(this.$slot);

    this.shadowRoot.append(this.initStyle(), this.$container);
  }


  updateStyle({ xxl, xl, lg, md, sm, xs }) {
    this.shadowRoot.querySelector('style').textContent = `
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


  static createColumnSlot() {
    const node = document.createElement('div');
    node.setAttribute('slot', 'column-slot');

    return node;
  }

  static create(node, { xxl, xl, lg, md, sm, xs }) {
    const $col = document.createElement('inte-column');

    $col.setAttribute('xxl', xxl);
    $col.setAttribute('xl', xl);
    $col.setAttribute('lg', lg);
    $col.setAttribute('md', md);
    $col.setAttribute('sm', sm);
    $col.setAttribute('xs', xs);

    const slot = Column.createColumnSlot();

    slot.append(node);
    $col.append(slot);

    return $col;
  }
}

customElements.define('inte-column', Column);