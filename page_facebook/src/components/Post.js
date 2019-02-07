import React, { Component } from 'react'
import './Post.css'

export default class Post extends Component {
  render() {
    return (
      <div className="Post">
        <p>{this.props.post}</p>
        <button>C'est super !</button>
      </div>
    )
  }
}
