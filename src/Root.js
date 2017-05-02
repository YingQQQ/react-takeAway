import React, {
  Component,
} from 'react';
import {
  Provider,
} from 'react-redux';

export default class Root extends Component {
  componentDidMount() {
    console.info('Log an error level message.');
  }
  render() {
    return (
      <Provider>
        <h1>1231</h1>
      </Provider>
    );
  }
}
