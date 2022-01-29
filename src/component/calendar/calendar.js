class Calendar extends HTMLElement {
  static get observedAttributes() {
    return ['style'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.createElement();
    this.setClass();

    this.shadowRoot.append(this.initStyle(), this.$container);
  }

  createElement() {
    this.$container = document.createElement('div');
    this.$title = document.createElement('div');
    this.$dayRow = document.createElement('div');
    this.$divider = document.createElement('div');
    this.$switch = document.createElement('div');

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
      .title {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
      }
      .dayRow {
        font-weight: bold;
      }
      .divider {
        border-bottom: 1px solid #ddd;
        margin: 10px 0 0;
      }
      .switch {
        font-size: 2rem;
        position: absolute;
        top: -13px;
        cursor: pointer;
      }
      
      .switch:hover {
        color: #5959ff;
      }
      .switch.switch-left {
        left: 1rem;
      }
      .switch.switch-right {
        right: 1rem;
      }
      
    `

    return this.$style;
  }

}

customElements.define('inte-calendar', Calendar);