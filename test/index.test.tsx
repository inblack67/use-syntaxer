import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RenderMarkdown } from '../src/index';

/*
```js
console.log('hello hell');
```
*/

const code = "```js console.log('hello hell');```";

const App = () => {
  return <RenderMarkdown code={code} />;
};

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RenderMarkdown code={code} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
