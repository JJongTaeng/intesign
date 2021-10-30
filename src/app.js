import { Card, Column, Message, Modal, Row } from './index.js';


// Column.create(Card.create('Hello', 'Intae'), {xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 24}),
const $modal = Modal.create();

const loremStr = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Accusantium asperiores eaque error quasi. Aperiam corporis dicta fuga ipsum laborum nam provident voluptas.
Aliquid autem dolorum impedit neque optio provident sunt?`

document.body.append(
  Row.create(
    Column.create(Card.create('Title', loremStr), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
  ),
  $modal,
);


Modal.appendBody($modal, Row.create(
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
))

document.querySelector('.modal').addEventListener('click', (e) => {
  Modal.open($modal);
})

const $message = document.createElement('inte-message');
Message.setMessage($message, '데이터를 받아오지 못했습니다.');
Message.setType($message, 'error');
document.body.append($message);

document.querySelector('.message').addEventListener('click', (e) => {
  $message.setAttribute('visible', 'open');
  setTimeout(() => {
    $message.setAttribute('visible', 'close');
  }, 3000)
})

Modal.onOk($modal, (e) => {
  Modal.close($modal);
});

Modal.onCancel($modal, (e) => {
  Modal.close($modal);
})