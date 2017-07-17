import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    var NextRoot = require('./containers/Root').default;
    ReactDOM.render(
      <NextRoot />,
      document.getElementById('root')
    );
  });
}