import { Card } from '../src/index';

export default function makeCardExample() {
  const $cardWrapper = document.querySelector('.card-wrapper');
  const $newCardButton = document.querySelector('#newCard');
  const $setBodyButton = document.querySelector('#cardSetBody');
  const $setHeaderButton = document.querySelector('#cardSetHeader');
  const $card = new Card();

  $newCardButton.addEventListener('click', () => {
    $cardWrapper.append($card);
  });

  $setBodyButton.addEventListener('click', () => {
    $card.setBody('JavaScript (JS)는 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원합니다. 웹 페이지를 위한 스크립트 언어로 잘 알려져 있지만, Node.js, Apache CouchDB, Adobe Acrobat처럼 많은 비 브라우저 환경에서도 사용하고 있습니다.')
  })

  $setHeaderButton.addEventListener('click', () => {
    $card.setHeader('I`m Header')
  })
}
