import React, { Component } from 'react';
import Player from '../components/Player';
import { Link } from 'react-router';
import DropFiles from '../components/DropFiles'

export default class NowPlayingPage extends Component {
  render() {
    return (
      <div>
        <DropFiles>
          <Player source="file:///Volumes/Data/Damien%20Rice%20-%20Volcano%20-%20Official%20Video-ZduDvIBu3EU.mp4"/>
        </DropFiles>
      </div>
    )
  }
}
