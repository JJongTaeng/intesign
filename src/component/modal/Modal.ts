import { HTMLInteButtonElement } from "../form/Button";
import IElement from "../../utils/IElement";
import IStyle from "../../utils/IStyle";

export default class Modal extends HTMLElement {
  static get observedAttributes() {
    return ['visible', 'width', 'height', 'style'];
  }

  $container: HTMLDivElement;
  $content: HTMLDivElement;
  $header: HTMLDivElement;
  $body: HTMLDivElement;
  $footer: HTMLDivElement;
  $buttonWrapper: HTMLDivElement;
  $okButton: HTMLInteButtonElement;
  $cancelButton: HTMLInteButtonElement;
  $style: HTMLStyleElement;

  mousePosition = {
    x: 0,
    y: 0,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.$okButton = new IElement<HTMLInteButtonElement>('inte-button')
      .setAttribute('class', 'ok')
      .getElement();
    this.$okButton.setName('OK');

    this.$cancelButton = new IElement<HTMLInteButtonElement>('inte-button')
      .setAttribute('class', 'cancel')
      .getElement();
    this.$cancelButton.setName('CANCEL');

    this.$buttonWrapper = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'button-wrapper')
      .append(this.$okButton, this.$cancelButton)
      .getElement();

    this.$header = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'header')
      .getElement();
    this.$body = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'body')
      .getElement();
    this.$footer = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'footer')
      .append(this.$buttonWrapper)
      .getElement();

    this.$content = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'content')
      .append(this.$header, this.$body, this.$footer)
      .getElement();

    this.$container = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'container')
      .appendChild(this.$content)
      .getElement();

    this.$style = new IElement<HTMLStyleElement>('style')
      .setTextContent(`
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
      `)
      .getElement();

    document.addEventListener('mousedown', this.getClickPosition.bind(this), true);
    this.shadowRoot.append(this.$style, this.$container);
  }

  connectedCallback() {
    console.log('connected');
    this.close();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'visible':
        if(newValue === 'true') {
          new IStyle(this.$container)
            .transformOrigin(`${this.mousePosition.x}px ${this.mousePosition.y}px`)
            .transform('scale(1, 1)')
            .opacity('1')

        } else {
          new IStyle(this.$container)
            .transform('scale(0, 0)')
            .opacity('0')
        }
        break;
      case 'width':
        this.$content.style.width = `${newValue}vw`;
        break;
      case 'height':
        this.$content.style.height = `${newValue}vh`;
        break;
    }
  }

  getClickPosition(e) {
    this.mousePosition.x = e.pageX;
    this.mousePosition.y = e.pageY;
  }

  open() {
    this.setAttribute('visible', 'true');
    return this;
  }

  close() {
    this.setAttribute('visible', 'false');
    return this;
  }

  onOk(f) {
    this.$okButton.addEventListener('click', f);
    return this;
  }

  onCancel(f) {
    this.$cancelButton.addEventListener('click', f);
    return this;
  }

  width(num) {
    this.setAttribute('width', num);
    return this;
  }

  height(num) {
    this.setAttribute('height', num);
    return this;
  }

  body(body) {
    this.$body.append(body);
    return this;
  }

  header(title) {
    this.$header.append(title);
    return this;
  }

  clearBody() {
    this.$body.replaceChildren();
    return this;
  }

  clearHeader() {
    this.$header.replaceChildren();
    return this;
  }

  visible(visible) {
    this.setAttribute('visible', visible);
    return this;
  }
}

customElements.define('inte-modal', Modal);