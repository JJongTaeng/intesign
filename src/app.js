import './index.js';
import Card from "./component/card/card.js";

let $card = document.createElement('inte-card');

const headerSlot = Card.createHeader();
const bodySlot = Card.createBody();

$card.append(headerSlot, bodySlot);

headerSlot.textContent = 'hello';
bodySlot.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet architecto cumque dolorem eaque eligendi eos expedita natus necessitatibus nulla odit, porro quia repellat saepe sit sunt tempora veniam voluptatibus?';

document.body.appendChild($card);

