interface IStyleInterface {
  width(value: string): this;
  height(value: string): this;
  color(value: string): this;
  getElement(): HTMLElement;
}

export default class IStyle implements IStyleInterface {
  private readonly $element: HTMLElement;

  constructor($element) {
    this.$element = $element;
  }

  width(value: string) {
    this.$element.style.width = value;
    return this;
  }

  height(value: string) {
    this.$element.style.height = value;
    return this;
  }

  color(value: string) {
    this.$element.style.color = value;
    return this;
  }

  left(value: string) {
    this.$element.style.left = value;
    return this;
  }

  right(value: string) {
    this.$element.style.right = value;
    return this;
  }

  top(value: string) {
    this.$element.style.top = value;
    return this;
  }

  bottom(value: string) {
    this.$element.style.bottom = value;
    return this;
  }

  transform(value: string) {
    this.$element.style.transform = value;
    return this;
  }

  opacity(value: string) {
    this.$element.style.opacity = value;
    return this;
  }

  background(value: string) {
    this.$element.style.background = value;
    return this;
  }

  display(value: string) {
    this.$element.style.display = value;
    return this;
  }

  flexDirection(value: string) {
    this.$element.style.flexDirection = value;
    return this;
  }

  justifyContent(value: string) {
    this.$element.style.justifyContent = value;
    return this;
  }

  alignItems(value: string) {
    this.$element.style.alignItems = value;
    return this;
  }

  margin(value: string) {
    this.$element.style.margin = value;
    return this;
  }

  marginTop(value: string) {
    this.$element.style.marginTop = value;
    return this;
  }

  marginBottom(value: string) {
    this.$element.style.marginBottom = value;
    return this;
  }

  marginLeft(value: string) {
    this.$element.style.marginLeft = value;
    return this;
  }

  marginRight(value: string) {
    this.$element.style.marginRight = value;
    return this;
  }

  padding(value: string) {
    this.$element.style.padding = value;
    return this;
  }

  paddingTop(value: string) {
    this.$element.style.paddingTop = value;
    return this;
  }

  paddingBottom(value: string) {
    this.$element.style.paddingBottom = value;
    return this;
  }

  paddingRight(value: string) {
    this.$element.style.paddingRight = value;
    return this;
  }

  paddingLeft(value: string) {
    this.$element.style.paddingLeft = value;
    return this;
  }

  border(value: string) {
    this.$element.style.border = value;
    return this;
  }

  borderTop(value: string) {
    this.$element.style.borderTop = value;
    return this;
  }

  borderBottom(value: string) {
    this.$element.style.borderBottom = value;
    return this;
  }

  borderRight(value: string) {
    this.$element.style.borderRight = value;
    return this;
  }

  borderLeft(value: string) {
    this.$element.style.borderLeft = value;
    return this;
  }

  borderRadius(value: string) {
    this.$element.style.borderRadius = value;
    return this;
  }

  transition(value: string) {
    this.$element.style.transition = value;
    return this;
  }

  position(value: string) {
    this.$element.style.position = value;
    return this;
  }

  minWidth(value: string) {
    this.$element.style.minWidth = value;
    return this;
  }

  minHeight(value: string) {
    this.$element.style.minHeight = value;
    return this;
  }

  boxShadow(value: string) {
    this.$element.style.boxShadow = value;
    return this;
  }

  transformOrigin(value: string) {
    this.$element.style.transformOrigin = value;
    return this;
  }

  cursor(value: string) {
    this.$element.style.cursor = value;
    return this;
  }

  whiteSpace(value: string) {
    this.$element.style.whiteSpace = value;
    return this;
  }

  setStyle(value: string) {
    this.$element.setAttribute('style', value);
    return this;
  }

  getElement() {
    return this.$element;
  }
}