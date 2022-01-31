import { Alert } from "common-ialert";

export default function makeMessageExample() {
  const $setMessageButton = document.querySelector('#messageSetMessage');
  const $visibleTrueButton = document.querySelector('#messageVisibleTrue');
  const $visibleFalseButton = document.querySelector('#messageVisibleFalse');
  const $messageTypeInfo = document.querySelector('#messageTypeInfo');
  const $messageTypeError = document.querySelector('#messageTypeError');

  const alert = new Alert();

  $setMessageButton.addEventListener('click', () => {
    alert.setMessage('This is message');
  });

  $visibleTrueButton.addEventListener('click', () => {
    alert.visible(true);
  });

  $visibleFalseButton.addEventListener('click', () => {
    alert.visible(false)
  });
  $messageTypeInfo.addEventListener('click', () => {
    alert.type('info');
  })
  $messageTypeError.addEventListener('click', () => {
    alert.type('error');
  })
};
