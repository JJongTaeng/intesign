export default class Component {

  constructor({ elements }) {
    this.elements = elements;
  }

  attechElements(parent) {

    switch (parent.nodeName) {
      case 'IMG': case 'INPUT':
        return;
    }

    const fragment = document.createDocumentFragment();

    this.elements.forEach((element) => {
      fragment.appendChild(element);
    })

    parent.appendChild(fragment);
  }

  static createElement({type, className, content}) {
    const element = document.createElement(type)
    className && element.classList.add(className);
    element.textContent = content && content;

    return element;
  }
}