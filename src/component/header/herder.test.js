import React from 'react';
import ReactDOM from 'react-dom';
import Herder from './herder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Herder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
