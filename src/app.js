import './index.js';
import Card from "./component/card/card.js";
import Column from "./component/grid/column.js";
import Row from "./component/grid/row.js";
import './component/modal/modal.js';

// Column.create(Card.create('Hello', 'Intae'), {xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 24}),

document.body.append(
  Row.create(
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
    Column.create(Card.create('hello', 'intae'), { xxl: 4, xl: 8, lg: 8, md: 8, sm: 12, xs: 24 }),
  ),
);

