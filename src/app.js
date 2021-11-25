import { Row, Card, Modal, Input, Message, Column, PopConfirm } from './index.js';


// Column.create(Card.create('Hello', 'Intae'), {xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 24}),
const $modal = Modal.create();

const loremStr = {
  1:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Accusantium asperiores eaque error quasi. Aperiam corporis dicta fuga ipsum laborum nam provident voluptas.
Aliquid autem dolorum impedit neque optio provident sunt?
error quasi. Aperiam corporis dicta fuga ipsum laborum nam provident voluptas.
Aliquid autem dolorum impedit neque optio provident sunt?`,
  2: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolor sit amet, consectetur adipisicing elit.
Accusantium asperiores eaque error quasi. Aperiam corporis dicta fuga ipsum laborum nam provident voluptas.
Aliquid autem dolorum impedit neque optio provident sunt?`,
  3:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Accusantium asperiores eaque error quasi. Aperiam corporis dicta fuga ipsum laborum nam provident voluptas.
Aliquid autem dolorum impedit neque optio provident sunt?`,
  4:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Accusantium asperiores eaque error quasi. Aperiam corporis dicta fuga ipsum laborum nam provident voluptas.
Aliquid autem dolorum impedit neque optio provident sunt? 
olor sit amet, consectetur adipisicing elit.
Accusantium asperiores eaque error quasi. Aperiam corporis dicta fuga ipsum laborum nam provident voluptas.
Aliquid autem dolorum impedit neque optio provident sunt?
`,
  5:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
}

const $Row = Row.create(
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('Title', loremStr[parseInt(Math.random() * 5) + 1]), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
  );

document.body.append(
  $Row,
  $modal,
);


Modal.appendTitle($modal, 'Title');
Modal.appendBody($modal, Row.create(
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
  Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 4, lg: 8, md: 8, sm: 12, xs: 24 }),
))

document.querySelector('.modal').addEventListener('click', (e) => {
  Modal.open($modal);
})

const $message = document.createElement('inte-message');
Message.setMessage($message, '데이터를 받아오지 못했습니다.');

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

const $popconfirm = document.querySelector('.popconfirm');

$popconfirm.setAttribute('message', '데이터를 삭제하겠습니까?')

PopConfirm.okHandler($popconfirm, (e) => {
  Message.setMessage($message, '데이터 삭제 중..');
  Message.setType($message, 'info');
  $message.setAttribute('visible', 'open');
  $popconfirm.setAttribute('visible', 'close')

  setTimeout(() => {
    $message.setAttribute('visible', 'close');
  }, 3000)
})

