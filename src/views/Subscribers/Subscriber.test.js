import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Subscriber from './Subscriber';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subscriber />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
