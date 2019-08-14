import React from 'react';
import { useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import Filter from '~/components/Filter';

jest.mock('react-redux');

describe('Filter component', () => {
  it('should render artists list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        album: {
          artists: [
            {
              value: '1vCWHaC5f2uS3yhpwWbIA6',
              name: 'Avicii',
              color: '#7159c1',
            },
            {
              value: '0TnOYISbd1XYRBk9myaseg',
              name: 'Pitbull',
              color: '#ABCBCA',
            },
            {
              value: '12Chz98pHFMPJEknJQMWvI',
              name: 'Muse',
              color: '#a7f88f',
            },
            {
              value: '4C4kpaAdp6aKSkguw40SsU',
              name: 'Skank',
              color: '#F8CF8F',
            },
            {
              value: '4bOZtegYNmYOe3gMgPtt0H',
              name: 'Kid Abelha',
              color: '#ff6161',
            },
          ],
          year: 0,
          rangeYears: [2019],
        },
      })
    );

    const { getByTestId, getByText } = render(<Filter />);

    fireEvent.click(getByText('Artistas'));

    expect(getByTestId('ul-dropdown-artists')).toContainElement(
      getByText('Avicii')
    );
    expect(getByTestId('ul-dropdown-artists')).toContainElement(
      getByText('Kid Abelha')
    );
  });
});
