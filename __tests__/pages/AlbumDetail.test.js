import React from 'react';
import { render } from '@testing-library/react';
import AlbumDetail from '~/pages/AlbumDetail';
import 'jest-canvas-mock';

test('renders without crashing', () => {
  render(<AlbumDetail />);
});
