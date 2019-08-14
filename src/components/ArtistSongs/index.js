import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import filter from '~/assets/filter.svg';
import explicit from '~/assets/explicit.svg';

import {
  Container,
  ContainerSearch,
  Scroll,
  Card,
  CardHeader,
  CardBody,
  Loading,
} from './styles';

import {
  searchRequest,
  filterSearchRequest,
  cleanFilterSearch,
  setFilter,
} from '~/store/modules/track/actions';

export default function ArtistSongs() {
  const dispatch = useDispatch();
  const selectedAlbum = useSelector(state => state.album.selectedAlbum);
  const tracks = useSelector(state => state.track.tracks);
  const filterTracks = useSelector(state => state.track.filterTracks);
  const loading = useSelector(state => state.track.loading);
  const filterField = useSelector(state => state.track.filter);

  useMemo(() => {
    async function loadMusics() {
      dispatch(searchRequest(selectedAlbum));
    }
    loadMusics();
  }, [dispatch, selectedAlbum]);

  function categoryPopularity(popularity) {
    if (popularity === -1) {
      return '';
    }
    if (popularity > 0 && popularity < 35) {
      return 'Baixa popularidade';
    }
    if (popularity > 35 && popularity < 65) {
      return 'Media popularidade';
    }
    return 'Alta popularidade';
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      dispatch(filterSearchRequest(e.target.value));
      dispatch(setFilter(e.target.value));
    }
  }

  function handleClick() {
    if (filterField) {
      dispatch(filterSearchRequest(filterField));
    }
  }

  function handleChange(e) {
    dispatch(setFilter(e.target.value));
    if (e.target.value === '') {
      dispatch(cleanFilterSearch());
    }
  }

  function renderCardTrack(track, album) {
    return (
      <Card key={track.id} to={`album/${album.id}`}>
        <CardHeader>
          <div>
            <strong>Nº {String(track.track_number).padStart(2, '0')}</strong>
            <strong title={album.name}>{album.name}</strong>
          </div>
        </CardHeader>
        <CardBody>
          <div title={track.name}>
            {track.name.length > 20
              ? `${track.name.substring(0, 20)}...`
              : track.name}
          </div>
          <div>
            <strong>
              {track.popularity
                ? categoryPopularity(Number(track.popularity))
                : ''}
            </strong>
            {track.explicit ? <img src={explicit} alt="Explicito" /> : ''}
          </div>
        </CardBody>
      </Card>
    );
  }

  function renderHandler() {
    if (loading) {
      return <Loading>Carregando...</Loading>;
    }
    if (filterTracks && filterTracks.tracks) {
      return (
        <Scroll>
          {filterTracks.tracks.items.map(track =>
            renderCardTrack(track, track.album)
          )}
        </Scroll>
      );
    }
    if (tracks) {
      return (
        <Scroll>
          {tracks.map(album =>
            album.tracks.items.map(track => renderCardTrack(track, album))
          )}
        </Scroll>
      );
    }

    return '';
  }

  return (
    <Container>
      <ContainerSearch>
        <div>
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Buscar músicas"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={filterField}
          />
        </div>
        <img src={filter} alt="Filtro" onClick={handleClick} />
      </ContainerSearch>

      {renderHandler()}
    </Container>
  );
}
