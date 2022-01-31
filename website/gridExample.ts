import { Card, Column, IElement, IStyle, Row } from "../src/index";

export default function makeGridExample() {
  const $pre = document.createElement('pre');
  const $descriptionCard = new Card();
  $descriptionCard.setHeader('Example Code').setBody(
    new IElement('code')
      .setTextContent(
        ` const $generateWrapper = document.querySelector('.generate-wrapper');
          const $card1 = new Card({ body: 'Some Text', header: '카드1' });
          const $card2 = new Card({ body: 'Some Text', header: '카드2' });
          const $card3 = new Card({ body: 'Some Text', header: '카드3' });
          const $card4 = new Card({ body: 'Some Text', header: '카드4' });
          
          const span = { xxl: '6', xl: '6', lg: '6', md: '12', sm: '12', xs: '24' }
          
          const $row = new Row();
          
          const $column1 = new Column({ children: $card1, span });
          const $column2 = new Column({ children: $card2, span });
          const $column3 = new Column({ children: $card3, span });
          const $column4 = new Column({ children: $card4, span });
          
          $row.setContent($column1, $column2, $column3, $column4);
        `
      )
      .setParent($pre)
      .getElement()
  );

  new IStyle($descriptionCard.body)
    .whiteSpace('pre-line');

  const wrapper = document.querySelector('.grid-wrapper');
  wrapper.append($descriptionCard);

  const $generateButton = document.querySelector('inte-button[name="Generate"]');
  const $generateWrapper = document.querySelector('.generate-wrapper');
  const $card1 = new Card({
    body: '웹 컴포넌트 표준의 주요 기능 중 하나는 HTML 페이지에 커스텀 페이지 기능을 함께 제공하는 엘리먼트의 길고 중첩된 묶음을 만드는 것보다 사용자의 기능이 캡슐화된 커스텀 엘리먼트를 생성하는 기능입니다. 이 문서는 HTML 커스텀 엘리먼트의 사용을 소개합니다.',
    header: '카드1'
  });
  const $card2 = new Card({
    body: '웹 document의 커스텀 엘리먼트의 컨트롤러는 CustomElementRegistry 오브젝트입니다. 이 오브젝트는 사용자가 페이지에서 커스텀 엘리먼트를 등록하도록 하며 등록된 커스텀 컴포넌트의 정보 등을 리턴합니다.',
    header: '카드2'
  });
  const $card3 = new Card({
    body: '페이지에 커스텀 엘리먼트를 등록하려면 CustomElementRegistry.define() (en-US) 메소드를 사용하십시오. 이 메소드는 다음과 같은 인자들을 사용합니다. ',
    header: '카드3'
  });
  const $card4 = new Card({
    body: 'DOMString 은 사용자가 엘리먼트에게 전달하려는 이름을 나타냅니다. 커스텀 엘리먼트 이름들은 dash(\'-\')가 포함된 이름을 사용하도록 주의하십시오. 이 이름들은 한 단어가 될 수 없습니다. (예 : custom-my-element)',
    header: '카드4'
  });

  const span = { xxl: '6', xl: '6', lg: '6', md: '12', sm: '12', xs: '24' }

  const $row = new Row();

  const $column1 = new Column({ children: $card1, span });
  const $column2 = new Column({ children: $card2, span });
  const $column3 = new Column({ children: $card3, span });
  const $column4 = new Column({ children: $card4, span });

  $row.setContent($column1, $column2, $column3, $column4);

  $generateButton.addEventListener('click', () => {
    $generateWrapper.append($row);
  })
};