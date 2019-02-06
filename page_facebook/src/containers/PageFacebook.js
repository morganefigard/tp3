import React, { Component } from 'react'
import Amis from './Amis'
import Profil from './Profil'
import './PageFacebook.css';

export default class PageFacebook extends Component {
  render() {
    return (
      <div className="PageFacebook">
        <p>La page facebook</p>
        <Amis />
        <Profil />
      </div>
    )
  }
}
