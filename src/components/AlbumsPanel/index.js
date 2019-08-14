import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

import BarChart from '~/components/BarChart';
import {
  selectAlbum,
  setRangeYears,
  selectYear,
} from '~/store/modules/album/actions';

export default function AlbumsPanel() {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.album.albums);
  const year = useSelector(state => state.album.selectedYear);
  const rangeYears = useSelector(state => state.album.rangeYears);
  const selectedArtist = useSelector(state => state.album.selectedArtist);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);

  useMemo(() => {
    async function loadChart() {
      const auxX = [];
      const auxY = [];
      albums.map(album => {
        const date = album.release_date.substring(0, 4);
        const totalTracks = album.total_tracks;

        if (auxX[auxX.length - 1] === date) {
          auxY[auxY.length - 1] = auxY[auxY.length - 1] + totalTracks;
        } else {
          auxX.push(date);
          auxY.push(totalTracks);
        }
      });
      setX(auxX);
      setY(auxY);
      dispatch(setRangeYears(auxX));
      dispatch(selectYear(auxX.length - 1));
    }
    loadChart();
  }, [albums, dispatch]);

  async function handleClick(element) {
    if (element[0] && x[element[0]._index]) {
      const yearChartSelected = x[element[0]._index];
      const selected = albums.filter(album => {
        return album.release_date.substring(0, 4) === yearChartSelected;
      });
      dispatch(selectAlbum(selected));
    }
  }

  return (
    <Container>
      <BarChart
        x={x}
        y={y}
        color={selectedArtist ? selectedArtist.color : ''}
        handleClick={handleClick}
      />
    </Container>
  );
}
