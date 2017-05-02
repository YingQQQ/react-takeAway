import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootEl = window.document.getElementById('app');

render(
  <AppContainer>
    <h1>hello</h1>
  </AppContainer>,
  rootEl,
);

// if (module.hot) {
//   module.accept('./Root.js')
// }
