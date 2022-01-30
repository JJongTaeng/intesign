import { HTMLInteButtonElement } from "../form/Button";
import IElement from "../../utils/IElement";

export default class PopConfirm extends HTMLElement {
  static get observedAttributes() {
    return ['oktext', 'canceltext', 'style', 'visible', 'okhandler', 'message'];
  }

  $container: HTMLDivElement;
  $message: HTMLDivElement;
  $form: HTMLDivElement;
  $cancel: HTMLInteButtonElement;
  $ok: HTMLInteButtonElement;
  $slot: HTMLSlotElement;
  $style: HTMLStyleElement;

  mousePosition = {
    x: 0,
    y: 0,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.$cancel = new IElement<HTMLInteButtonElement>('inte-button')
      .setAttribute('class', 'cancel')
      .getElement();
    this.$cancel.setName('Cancel');

    this.$ok = new IElement<HTMLInteButtonElement>('inte-button')
      .setAttribute('class', 'ok')
      .getElement();
    this.$ok.setName('Ok');

    this.$message = new IElement<HTMLDivElement>('div')
      .setTextContent('Any Message')
      .setAttribute('class', 'message')
      .getElement()

    this.$form = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'form')
      .append(this.$cancel, this.$ok)
      .getElement();

    this.$container = new IElement<HTMLDivElement>('div')
      .setAttribute('class', 'container')
      .append(this.$message, this.$form)
      .getElement();

    this.$slot = new IElement<HTMLSlotElement>('slot')
      .setAttribute('name', 'popconfirm')
      .getElement();

    this.$style = new IElement<HTMLStyleElement>('style')
      .setTextContent(
        `
          .container {
            position: absolute;
            display: flex;
            flex-direction: column;
            position: absolute;
            background: white;
            padding: 10px;
            min-width: 160px;
            box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, .4);
            
            transform-origin: 0 0;
            transform: scale(0, 0);
            opacity: 0;
            transition: 0.2s;
          }
          .message {
            margin: 10px;
          }
          .form {
            display: flex;
            margin-left: auto;
          }
          .cancel {
            
            margin: 4px;
          }
          .ok {
            margin: 4px;
          }
        `
      )
      .getElement();

    this.shadowRoot.append(this.$style, this.$slot, this.$container);

    document.addEventListener('mousedown', this.getClickPosition.bind(this), true);

    this.open();
    this.close();

  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch(name) {
      case 'visible':
        if(newValue === 'true') {
          this.updateStyle`
            .container {
              left: ${this.mousePosition.x}px;
              top: ${this.mousePosition.y}px;
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
      case 'oktext':
        this.$ok.setName(newValue);
        break;
      case 'canceltext':
        this.$cancel.setName(newValue);
        break;
      case 'message':
        this.$message.textContent = newValue;
        break;
      case 'style':
        this.updateStyle`${newValue}`;
        break;
    }
  }

  okHandler(f) {
    this.$ok.addEventListener('click', f);
  }

  open() {
    this.$slot.addEventListener('click', (e) => {
      this.setAttribute('visible', 'true');
    })
  }

  close() {
    this.$cancel.addEventListener('click', (e) => {
      this.setAttribute('visible', 'false');
    })
  }

  getClickPosition(e) {
    this.mousePosition.x = e.pageX;
    this.mousePosition.y = e.pageY;
  }

  updateStyle(style, ...arg) {
    const raw = style.raw.reduce((prev, current, index) => {
      if(arg.length > 0) {
        return prev + arg[index - 1] + current
      } else {
        return prev + current;
      }
    });
    this.$style.textContent = this.$style.textContent + raw;
  }
}

customElements.define('inte-popconfirm', PopConfirm);