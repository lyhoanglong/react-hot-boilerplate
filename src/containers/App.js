import React from 'react';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

import { Map } from 'immutable';

// require('../styles/base.scss');
require('./App.scss');

let store = createStore(() => Map());

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <h1>Hello, world.</h1>
        </Provider>
      </div>
    );
  }
}
