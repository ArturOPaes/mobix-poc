import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import { Container, Scroll, CardBodyContainer, LinkHome, Info } from './styles';

import { Card, CardHeader, CardBody } from '~/styles/styles';
import explicit from '~/assets/explicit.svg';

export default function AlbumDetail({ match }) {
  const albums = useSelector(state => state.album.albums);
  const tracksAlbums = useSelector(state => state.track.tracks);
  const [album, setAlbum] = useState({});
  const [tracks, setTracks] = useState({});

  useMemo(() => {
    async function getAlbum() {
      const { id } = match.params;
      const selectedAlbum = albums.filter(a => {
        return a.id === id;
      });

      if (selectedAlbum && selectedAlbum[0]) {
        const tracksAlbum = tracksAlbums.filter(t => {
          return t.id === id;
        });

        setAlbum(selectedAlbum[0]);
        setTracks(tracksAlbum[0].tracks);
      } else {
        const [responseAlbum, responseTracks] = await Promise.all([
          api.get(`albums/${id}`).then(response => {
            return response.data;
          }),
          api
            .get(`albums/${id}/tracks`, {
              params: {
                limit: 50,
              },
            })
            .then(response => {
              return response.data;
            }),
        ]);
        setAlbum(responseAlbum);
        setTracks(responseTracks);
      }
    }
    getAlbum();
  }, [albums, match.params, tracksAlbums]);

  function formatDurationTrack(ms) {
    const seconds = ms / 1000;
    const min = seconds / 60;
    return `${min.toFixed(0)}:${String((seconds % 60).toFixed(0)).padEnd(
      2,
      '0'
    )}`;
  }

  function formatDurationAlbum(ms) {
    const seconds = ms / 1000;
    const min = seconds / 60;
    const hour = min / 60;
    return `${hour.toFixed(0)}h ${String(min.toFixed(0)).padEnd(2, '0')} min`;
  }

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

  return (
    <Container>
      <Card>
        <CardHeader>
          <strong>DETALHE DO ÁLBUM</strong>
        </CardHeader>
        <CardBody>
          {album ? (
            <CardBodyContainer>
              <div>
                <Info>
                  {album.popularity
                    ? categoryPopularity(Number(album.popularity))
                    : ''}
                </Info>
                {album.images ? (
                  <img src={album.images[0].url} alt="Album" />
                ) : (
                  ''
                )}
                <div>
                  <strong>{album.name}</strong>
                  <div>
                    {album.artist
                      ? album.artists.map(artist => artist.name)
                      : ''}{' '}
                    {album.release_date && album.total_tracks
                      ? album.release_date.substring(0, 4)
                      : ''}{' '}
                    - {album.total_tracks} músicas{' '}
                    {album.duration_ms
                      ? formatDurationAlbum(album.duration_ms)
                      : ''}
                  </div>
                </div>
              </div>
              <div>
                <Scroll>
                  {tracks && tracks.items
                    ? tracks.items.map(track => (
                        <div key={track.id}>
                          <strong title={track.name}>
                            Nº {String(track.track_number).padStart(2, '0')} -{' '}
                            {track.name.length > 35
                              ? `${track.name.substring(0, 34)} ...`
                              : track.name}
                          </strong>
                          <div>{formatDurationTrack(track.duration_ms)}</div>
                        </div>
                      ))
                    : ''}
                </Scroll>
              </div>
            </CardBodyContainer>
          ) : (
            ''
          )}
          <LinkHome to="/">voltar</LinkHome>
        </CardBody>
      </Card>
    </Container>
  );
}
