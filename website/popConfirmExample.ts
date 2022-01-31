import { Card, PopConfirm } from "../src/index";
import { IElement, IStyle } from 'common-iutils';
import { HTMLInteButtonElement } from "common-iform";


const code = `const $wrapper = document.querySelector('#popconfirmButton');
const $button = document.createElement('inte-button') as HTMLInteButtonElement;
$button.setName('Generate');

let popConfirm = new PopConfirm();
popConfirm.triggerElement($button);

$wrapper.appendChild(popConfirm);
popConfirm.okHandler(() => {
  console.log('Hello! Intesign');
  popConfirm.close();
})
`

export default function makePopConfirmExample() {
  const $pre = document.createElement('pre');
  const $descriptionCard = new Card();
  const wrapper = document.querySelector('.popconfirm-example-wrapper');
  $descriptionCard.setHeader('Example Code').setBody(
    new IStyle(
      new IElement('code')
        .setTextContent(code)
        .setParent($pre)
        .getElement()
    )
      .whiteSpace('pre')
      .getElement()
  );

  new IStyle($descriptionCard.body)
    .whiteSpace('pre-line');

  wrapper.append($descriptionCard);

  const $wrapper = document.querySelector('#popconfirmButton');
  const $button = document.createElement('inte-button') as HTMLInteButtonElement;
  $button.setName('Generate');

  let popConfirm = new PopConfirm();
  popConfirm.triggerElement($button);

  $wrapper.appendChild(popConfirm);
  popConfirm.okHandler(() => {
    console.log('Hello! Intesign');
    popConfirm.close();
  })
}