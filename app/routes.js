import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PlayListPage from './containers/PlayListPage';
import NowPlaying from './containers/NowPlaying';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/playlist" component={PlayListPage} />
    <Route path="/nowPlaying" component={NowPlaying} />
  </Route>
);
