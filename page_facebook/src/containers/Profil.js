import React, { Component } from 'react'
import Personne from '../components/Personne'
import Post from '../components/Post'
import './Profil.css';

export default class Profil extends Component {
  render() {
    return (
      <div className="Profil">
        <p>Le profil</p>
        <Personne />
        <Post />
      </div>
    )
  }
}
