import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';

const rootEl = window
  .document
  .getElementById('app');

const renderComponent = Component => render(
  <AppContainer>
    <Component />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module
    .hot
    .accept('./containers/App', () => {
      renderComponent(App);
    });
}
