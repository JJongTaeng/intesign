import Component from "./src/component.js";
import Card from "./src/card/card.js";

const $root = document.querySelector('.root')

const cardList = [
  {
    title: 'Card1', content: 'intesign Card입니다.',
  },{
    title: 'Card2', content: 'intesign Card입니다.',
  },{
    title: 'Card3', content: 'intesign Card입니다.',
  },{
    title: 'Card4', content: 'intesign Card입니다.',
  },{
    title: 'Card5', content: 'intesign Card입니다.',
  },{
    title: 'Card6', content: 'intesign Card입니다.',
  },{
    title: 'Card7', content: 'intesign Card입니다.',
  },{
    title: 'Card8', content: 'intesign Card입니다.',
  },{
    title: 'Card9', content: 'intesign Card입니다.',
  },{
    title: 'Card10', content: 'intesign Card입니다.',
  },
]

cardList.forEach(data => {
  const card = new Card(data);
  let component = new Component({ element: card.getElement });
  component.render($root);
})

