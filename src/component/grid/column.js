
export default class Column extends HTMLElement{
  $container
  span = {

  }


  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
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
    console.log(current);
    if (prev !== current) {
      switch(name) {
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
      .container {
      }
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
      @media(max-width: 576px) {
        .container {
            width: ${xs * 4.166666}%;
        }
      }
      @media(min-width: 576px) and (max-width: 768px) {
        .container {
            width: ${sm * 4.166666}%;
        }
      }
      @media(min-width: 768px) and (max-width: 992px) {
        .container {
            width: ${md * 4.166666}%;
        }
      }
      @media(min-width: 992px) and (max-width: 1200px) {
        .container {
            width: ${lg * 4.166666}%;
        }
      }
      @media(min-width: 1200px) and (max-width: 1600px) {
        .container {
            width: ${xl * 4.166666}%;
        }
      }
      @media(min-width: 1600px) {
        .container {
            width: ${xxl * 4.166666}%;
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