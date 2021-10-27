export default class Modal extends HTMLElement {
  $container;
  $content;
  $header;
  $body;
  $footer;
  constructor() {
    super();
    { // 초기화
      this.attachShadow({ mode: 'open'});
      this.createElement();
      this.addClassName();
      this.appendDomElem();
    }

    this.shadowRoot.append(this.initStyle(), this.$container);
  }
  initStyle() {
    const $style = document.createElement('style');
    $style.textContent = `
      .container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      .content {
        width: 50vw;
        height: 50vh;
        background: white;
        border: 1px solid #eee;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
      }
      .header {
        height: 60px;
        border-bottom: 1px solid #eee;
        padding: 10px;
      }
      .body {
        padding: 16px;
        height: 100%;
      }
      .footer {
        position: relative;
        height: 60px;
        border-top: 1px solid #eee;
        padding: 10px;
      }
      
    `;

    return $style;
  }
  createElement() {
    this.$container = document.createElement('div');
    this.$content = document.createElement('div');
    this.$header = document.createElement('div');
    this.$body = document.createElement('div');
    this.$footer = document.createElement('div');
  }

  addClassName() {
    this.$container.classList.add('container');
    this.$content.classList.add('content');
    this.$header.classList.add('header');
    this.$body.classList.add('body');
    this.$footer.classList.add('footer');
  }

  appendDomElem() {
    this.$content.append(this.$header, this.$body, this.$footer);
    this.$container.appendChild(this.$content);
  }

}

customElements.define('inte-modal', Modal);