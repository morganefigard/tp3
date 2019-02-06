import React, { Component } from 'react'
import BoutonPersonne from '../components/BoutonPersonne'

export default class Amis extends Component {
  render() {
    return (
      <div>
        <p>Les amis</p>
        <BoutonPersonne />
        <BoutonPersonne />
        <BoutonPersonne />
      </div>
    )
  }
}
