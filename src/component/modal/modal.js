import Button from "../form/button.js";

export default class Modal extends HTMLElement {
  static get observedAttributes() {
    return ['visible', 'width', 'height', 'style'];
  }

  static open($modal) {
    $modal.setAttribute('visible', true);
  }

  static close($modal) {
    $modal.setAttribute('visible', false);
  }

  static onOk($modal, f) {
    $modal.$okButton.addEventListener('click', f);
  }

  static onCancel($modal, f) {
    $modal.$cancelButton.addEventListener('click', f);
  }

  static setWidth($modal, num) {
    $modal.setAttribute('width', num);
  }

  static setHeight($modal, num) {
    $modal.setAttribute('height', num);
  }

  static create() {
    return document.createElement('inte-modal');
  }

  static appendBody($modal, body) {
    $modal.$body.append(body);
  }

  static appendTitle($modal, title) {
    $modal.$header.append(title);
  }

  static clearBody($modal) {
    $modal.$body.replaceChildren();
  }

  static clearHeader($modal) {
    $modal.$header.replaceChildren();
  }

  onclose() {

  }

  getClickPosition(e) {
    this.mousePosition.x = e.pageX;
    this.mousePosition.y = e.pageY;
  }

  $container;
  $content;
  $header;
  $body;
  $footer;

  mousePosition = {
    x: 0,
    y: 0,
  };

  constructor() {
    super();
    { // 초기화
      this.attachShadow({ mode: 'open' });
      this.createElement();
      this.addClassName();
      this.appendDomElem();
      this.clickHandler();
    }
    document.addEventListener('mousedown', this.getClickPosition.bind(this), true);
    this.shadowRoot.append(this.initStyle(), this.$container);
  }

  connectedCallback() {
    this.changeVisible(false);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'visible':
        if (newValue === 'true') {
          this.updateStyle`
            .container {
              transform-origin: ${this.mousePosition.x}px ${this.mousePosition.y}px;
              transform: scale(1, 1);
              opacity: 1;
            }
          `;
        } else {
          this.updateStyle`
            .container {
              transform: scale(0, 0);
              opacity: 0;
            }
          `;
        }
        break;
      case 'width':
        this.$content.style.width = `${newValue}vw`;
        break;
      case 'height':
        this.$content.style.height = `${newValue}vh`;
        break;
      case 'style':
        this.updateStyle`${newValue}`;
        break;
    }
  }

  clickHandler() {
    this.$container.addEventListener('click', (e) => {
      let element = e.target;

      if (element.classList.contains('container')) {
        Modal.close(this);
      }
    })
  }

  changeVisible(visible) {
    this.setAttribute('visible', visible);
  }

  updateStyle(style, ...arg) {
    const raw = style.raw.reduce((prev, current, index) => {
      if (arg.length > 0) {
        return prev + arg[index - 1] + current
      } else {
        return prev + current;
      }
    });
    this.$style.textContent = this.$style.textContent + raw;
  }

  initStyle() {
    this.$style = document.createElement('style');
    this.$style.textContent = `
      .container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
      }
      .content {
        width: 50vw;
        background: white;
        border: 1px solid #eee;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        
      }
      .header {
        height: 40px;
        border-bottom: 1px solid #eee;
        padding: 10px;
        display: flex;
        align-items: center;
        
      }
      .body {
        padding: 16px;
        height: 100%;
      }
      .footer {
        position: relative;
        height: 40px;
        border-top: 1px solid #eee;
        padding: 10px;
        
        display: flex;
        align-items: center;
      }
      .ok {
      }
      .cancel {
        margin-left: 8px;
       }
      .button-wrapper {
        margin-left: auto;
      }
    `;

    return this.$style;
  }

  createElement() {
    { // create modal structure
      this.$container = document.createElement('div');
      this.$content = document.createElement('div');
      this.$header = document.createElement('div');
      this.$body = document.createElement('div');
      this.$footer = document.createElement('div');
    }

    { // create button
      this.$buttonWrapper = document.createElement('div');
      this.$okButton = document.createElement('inte-button');
      Button.setName(this.$okButton, 'OK')
      this.$cancelButton = document.createElement('inte-button');
      Button.setName(this.$cancelButton, 'CANCEL')
    }
  }

  addClassName() {
    this.$container.classList.add('container');
    this.$content.classList.add('content');
    this.$header.classList.add('header');
    this.$body.classList.add('body');
    this.$footer.classList.add('footer');

    this.$buttonWrapper.classList.add('button-wrapper');
    this.$okButton.classList.add('ok');
    this.$cancelButton.classList.add('cancel');
  }

  appendDomElem() {
    this.$content.append(this.$header, this.$body, this.$footer);
    this.$container.appendChild(this.$content);
    this.$buttonWrapper.append(this.$okButton, this.$cancelButton)
    this.$footer.append(this.$buttonWrapper);
  }
}

customElements.define('inte-modal', Modal);