import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import AlbumDetail from '~/pages/AlbumDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/album/:id/" match component={AlbumDetail} />
      </Switch>
    </BrowserRouter>
  );
}
