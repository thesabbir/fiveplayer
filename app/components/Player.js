import React, { Component } from 'react';
import styles from './Playlist.module.css';

console.log(styles);

export default class Player extends Component {
  render() {
    let source = 'file:///Volumes/Data/Damien%20Rice%20-%20Volcano%20-%20Official%20Video-ZduDvIBu3EU.mp4';
    return (
      <div className={styles.player}>
        <video src={source} autoPlay controls height={window.innerHeight} width={window.innerWidth}>
        </video>
      </div>

    )
  }
}
