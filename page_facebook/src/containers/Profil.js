import React, { Component } from 'react'
import Personne from '../components/Personne'
import Post from '../components/Post'

export default class Profil extends Component {
  render() {
    return (
      <div>
        <p>Le profil</p>
        <Personne />
        <Post />
      </div>
    )
  }
}
