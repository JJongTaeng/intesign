import { Card, Row, Column, Button, PopConfirm, Message, Modal } from 'intesign';

const card = new Card()
new Row();
new Column();
new PopConfirm();
new Button();
const modal = new Modal();

const message = new Message();

message
  .setMessage('메시지 등장!!')
const popconfirm = document.querySelector('inte-popconfirm') as any;

popconfirm.okHandler(() => {
  message.setVisible(true);

  setTimeout(() => {
    message.setVisible(false);
  }, 3000)
})

modal
  .body(card.setHeader('Modal').setBody('Hello!!!'))
  .header('intesign modal')
  .width(50)
  .height(50)
  .onCancel(() => {
    modal.close();
  })
  .onOk(() => {
    modal.close();
  })



document.body.append(modal);