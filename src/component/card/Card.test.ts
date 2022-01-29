import '@testing-library/jest-dom'
import Card from './Card';
import { getByText } from "@testing-library/dom";

describe('Card 컴포넌트', () => {
  test('Body 내용(텍스트) 설정', () => {
    let $card = new Card();

    $card.setBody('Hello');

    let $body = getByText($card.body, 'Hello');
    expect($body).toHaveTextContent('Hello');
  });

  test('Header 내용(텍스트) 설정', () => {
    let $card = new Card();

    $card.setHeader('Hello');

    let $header = getByText($card.header, 'Hello');
    expect($header).toHaveTextContent('Hello');
  });
})
