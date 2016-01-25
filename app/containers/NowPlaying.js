import React, { Component } from 'react';
import Player from '../components/Player';
import { Link } from 'react-router';
import DropFiles from '../components/DropFiles'

export default class NowPlayingPage extends Component {
  render() {
    return (
      <div>
        <DropFiles>
          <Player />
        </DropFiles>
      </div>
    )
  }
}
