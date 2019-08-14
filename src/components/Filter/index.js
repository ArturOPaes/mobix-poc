import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  selectYear,
  selectArtist,
  searchRequest,
  selectAlbum,
} from '~/store/modules/album/actions';

import { Container, YearFilter } from './styles';

import Dropdown from '~/components/Dropdown';

export default function Filter() {
  const dispatch = useDispatch();
  const artists = useSelector(state => state.album.artists);
  const selectedArtist = useSelector(state => state.album.selectedArtist);
  const year = useSelector(state => state.album.selectedYear);
  const rangeYears = useSelector(state => state.album.rangeYears);

  function handlePrevYear() {
    if (year <= 0) {
      dispatch(selectYear(rangeYears.length - 1));
    } else {
      dispatch(selectYear(Number(year) - 1));
    }
  }

  function handleNextYear() {
    if (year >= rangeYears.length - 1) {
      dispatch(selectYear(0));
    } else {
      dispatch(selectYear(Number(year) + 1));
    }
  }

  function handleSelection(value) {
    const selected = artists.filter(artist => {
      return artist.name === value;
    });
    dispatch(selectArtist(selected[0]));
    dispatch(selectAlbum(''));
    dispatch(searchRequest(selected[0].value));
  }

  return (
    <Container>
      <Dropdown
        list={
          artists
            ? artists.map((artist, index) => {
                return { value: index, label: artist.name };
              })
            : []
        }
        handleSelection={handleSelection}
        selectedArtist={selectedArtist ? selectedArtist.name : selectedArtist}
      />

      <YearFilter>
        <button type="button" onClick={handlePrevYear}>
          <MdChevronLeft size={36} />
        </button>
        <strong>{rangeYears[year]}</strong>
        <button type="button" onClick={handleNextYear}>
          <MdChevronRight size={36} />
        </button>
      </YearFilter>
    </Container>
  );
}
