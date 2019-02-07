import React, { Component } from 'react'
import Personne from '../components/Personne'
import Post from '../components/Post'
import './Profil.css';

export default class Profil extends Component {
  render() {
    return (
      <div className="Profil">
        <Personne 
          pers = {this.props.pers_select}
          changeBackgroundColor = {this.props.changeBackgroundColor}
        />
        <Post 
          post = {this.props.pers_select.post}
        />
      </div>
    )
  }
}
