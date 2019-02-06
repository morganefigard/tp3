import React, { Component } from 'react'
import Amis from './Amis'
import Profil from './Profil'

export default class PageFacebook extends Component {
  render() {
    return (
      <div>
        <p>La page facebook</p>
        <Amis />
        <Profil />
      </div>
    )
  }
}
