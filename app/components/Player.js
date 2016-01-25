import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styles from './Playlist.module.css';

console.log(styles);

export default class Player extends Component {

  constructor() {
    super();
  }

  state = {
    playing: false
  };


  componentDidMount() {
    this.$video = findDOMNode(this.refs.video);
  }

  playVideo = () => {
    if (this.state.playing) {
      this.$video.pause();
      this.state.playing = false;

    } else {
      this.$video.play();
      this.state.playing = true;
    }
  };


  render() {
    let { source, ...others} = this.props;

    return (
      <div className={styles.player} onClick={this.playVideo}>
        <video ref='video' src={source} height={window.innerHeight} width={window.innerWidth}>
        </video>
      </div>

    )
  }
}
