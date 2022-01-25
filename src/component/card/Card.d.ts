export default class Card extends HTMLElement {
    static get observedAttributes(): string[];
    $cardContainer: HTMLDivElement;
    $cardHeader: HTMLDivElement;
    $cardBody: HTMLDivElement;
    $cardHeaderContent: HTMLSpanElement;
    $cardBodyContent: HTMLSpanElement;
    $slotHeader: HTMLSlotElement;
    $slotBody: HTMLSlotElement;
    $style: HTMLStyleElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    updateStyle(style: string): void;
    initStyle(): HTMLStyleElement;
    createElement(): void;
    static createHeader(): HTMLDivElement;
    static createBody(): HTMLDivElement;
    static create(head: HTMLElement, body: HTMLElement): HTMLElement;
}
