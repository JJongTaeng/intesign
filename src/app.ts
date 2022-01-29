import Card from './component/card/Card';
const card = new Card();

card
  .setBody('create in JS file')
  .setHeader('this is header');

console.log(card.body.querySelector('div'))
document.body.append(card);