import React from 'react';

import Filter from '~/components/Filter';
import AlbumsPanel from '~/components/AlbumsPanel';
import ArtistSongs from '~/components/ArtistSongs';

import { Container } from './styles';

import { Card, CardHeader, CardBody } from '~/styles/styles';

export default function Home() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <strong>FILTRO DOS ARTISTAS</strong>
        </CardHeader>
        <CardBody>
          <Filter />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <strong>PAINEL DE ÁLBUNS</strong>
        </CardHeader>
        <CardBody>
          <AlbumsPanel />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <strong>TODAS AS MÚSICAS DO ARTISTA</strong>
        </CardHeader>
        <CardBody>
          <ArtistSongs />
        </CardBody>
      </Card>
    </Container>
  );
}
