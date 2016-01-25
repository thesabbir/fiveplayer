import React, { Component } from 'react';
import styles from './Playlist.module.css';

export default class Player extends Component {
  render() {
    return (
      <video src="file:///Volumes/Data/Damien%20Rice%20-%20Volcano%20-%20Official%20Video-ZduDvIBu3EU.mp4" autoplay controls="false" className={styles.player}>
      </video>
    )
  }
}
