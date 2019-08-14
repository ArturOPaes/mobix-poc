import React from 'react';
import { render } from '@testing-library/react';
import App from '~/App';
import 'jest-canvas-mock';

test('renders without crashing', () => {
  render(<App />);
});
