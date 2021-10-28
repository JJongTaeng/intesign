import { Row, Card, Column, Modal } from './index.js';


// Column.create(Card.create('Hello', 'Intae'), {xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 24}),
const $modal = Modal.create();

document.body.append(
  Row.create(
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
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

document.querySelector('button').addEventListener('click', (e) => {
  Modal.open($modal);
})

Modal.onOk($modal, (e) => {
  Modal.close($modal);
});