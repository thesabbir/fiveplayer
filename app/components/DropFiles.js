import React, { Component } from 'react';
import Dropzone  from 'react-dropzone';


export default class DropFiles extends Component {
  constructor(props, context) {
    super(props, context);

  }


  componentDidMount() {
    window.addEventListener("dragover", this.onDragOver);
    window.addEventListener("drogenter", this.onDragEnter);
    window.addEventListener("drop", this.onDrop);
  };

  onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('enter');
  };

  onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('leave');
  };

  onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Dropped..');
    let files = Array.prototype.slice.call(e.dataTransfer.files);
    console.log(files);
  };

  style = {
    height: "100vh",
    background: "#000",
    color: "#fff"
  };

  render() {
    return (
      <div onDragover={this.onDragOver} onDragEnter={this.onDragEnter} onDrop={this.onDrop} style={this.style}>
        {this.props.children}
      </div>
    )
  }
}
