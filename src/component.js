export default class Component {

  constructor({ element }) {
    this.element = element;
  }

  render(parent) {

    switch (parent.nodeName) {
      case 'IMG': case 'INPUT':
        throw new Error('### element img, input is not parent elemenet!');
        return;
    }

    const fragment = document.createDocumentFragment();

    if (this.element?.length > 1) {
      this.element.forEach((element) => {
        fragment.appendChild(element);
      });
    } else {
      fragment.appendChild(this.element);
    }

    parent.appendChild(fragment);
  }

  static createElement({type, className, content}) {
    const element = document.createElement(type)
    className && element.classList.add(className);
    element.textContent = content && content;

    return element;
  }
}