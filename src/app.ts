import Card from './component/card/Card';

const card = new Card();

card
  .setBody('create in JS file')
  .setHeader('this is header');

document.body.append(card);

