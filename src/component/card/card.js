var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super.call(this) || this;
        _this.attachShadow({ mode: "open" });
        _this.createElement();
        _this.shadowRoot;
        _this.$style = document.createElement('style');
        _this.$cardContainer = document.createElement('div');
        _this.$cardHeader = document.createElement('div');
        _this.$cardBody = document.createElement('div');
        _this.$cardHeaderContent = document.createElement('span');
        _this.$cardBodyContent = document.createElement('span');
        _this.$slotHeader = document.createElement('slot');
        _this.$slotBody = document.createElement('slot');
        return _this;
    }
    Object.defineProperty(Card, "observedAttributes", {
        get: function () {
            return ['style'];
        },
        enumerable: false,
        configurable: true
    });
    Card.prototype.connectedCallback = function () {
    };
    Card.prototype.disconnectedCallback = function () {
    };
    Card.prototype.adoptedCallback = function () {
    };
    Card.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        switch (name) {
            case 'style':
                this.updateStyle(newValue);
                break;
        }
    };
    Card.prototype.updateStyle = function (style) {
        this.$style.textContent = this.$style.textContent + style;
    };
    Card.prototype.initStyle = function () {
        this.$style.textContent = "\n\n        .card-container {\n          width: 100%;\n          border-radius: 2px;\n\n          display: flex;\n          flex-direction: column;\n          border: 1px solid #eee;\n          background: white;\n        }\n\n        .card-header {\n            padding: 8px;\n            border-bottom: 1px solid #eee;\n        }\n        .card-header-content {\n        }\n        .card-body {\n            padding: 8px;\n        }\n        .card-body-content {\n        }\n    ";
        return this.$style;
    };
    Card.prototype.createElement = function () {
        var _a;
        this.$cardContainer.setAttribute('class', 'card-container');
        this.$cardHeader.setAttribute('class', 'card-header');
        this.$cardBody.setAttribute('class', 'card-body');
        this.$cardHeaderContent.setAttribute('class', 'card-header-content');
        this.$cardBodyContent.setAttribute('class', 'card-body-content');
        this.$slotHeader.setAttribute('name', 'card-header-slot');
        this.$slotBody.setAttribute('name', 'card-body-slot');
        this.$cardHeaderContent.appendChild(this.$slotHeader);
        this.$cardBodyContent.appendChild(this.$slotBody);
        this.$cardContainer.append(this.$cardHeader, this.$cardBody);
        this.$cardHeader.appendChild(this.$cardHeaderContent);
        this.$cardBody.appendChild(this.$cardBodyContent);
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.append(this.initStyle(), this.$cardContainer);
    };
    Card.createHeader = function () {
        var node = document.createElement('div');
        node.setAttribute('slot', 'card-header-slot');
        return node;
    };
    Card.createBody = function () {
        var node = document.createElement('div');
        node.setAttribute('slot', 'card-body-slot');
        return node;
    };
    Card.create = function (head, body) {
        var $card = document.createElement('inte-card');
        var headerSlot = Card.createHeader();
        var bodySlot = Card.createBody();
        $card.append(headerSlot, bodySlot);
        headerSlot.append(head);
        bodySlot.append(body);
        return $card;
    };
    return Card;
}(HTMLElement));
export default Card;
customElements.define('inte-card', Card);
