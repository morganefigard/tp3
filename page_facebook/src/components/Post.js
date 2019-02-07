import React, { Component } from 'react'
import './Post.css'

export default class Post extends Component {
  render() {
    return (
      <div className="Post">
        <p>"{this.props.post}"<small> - Hier à 13:47</small></p>
        <button className="LikeButton">👍 C'est super !</button>
      </div>
    )
  }
}
