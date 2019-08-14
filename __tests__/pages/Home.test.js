import React from 'react';
import { render } from '@testing-library/react';
import Home from '~/pages/Home';
import 'jest-canvas-mock';

test('renders without crashing', () => {
  render(<Home />);
});
