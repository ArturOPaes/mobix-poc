import React from 'react';
import { render } from '@testing-library/react';

import BarChart from '~/components/BarChart';

jest.mock('react-redux');

describe('BarChart component', () => {
  render(
    <BarChart x={['2019']} y={[200]} color="#ccc" handleClick={jest.fn()} />
  );
});
