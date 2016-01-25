import React, { Component } from 'react';
import Player from '../components/Player';
import { Link } from 'react-router';


export default class NowPlayingPage extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Player />
      </div>
    )
  }
}
