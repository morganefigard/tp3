import React, { Component } from 'react'
import BoutonPersonne from '../components/BoutonPersonne'
import './Amis.css';

export default class Amis extends Component {
  render() {
    return (
      <div className="Amis">
        <p>Les amis</p>
        <BoutonPersonne />
        <BoutonPersonne />
        <BoutonPersonne />
      </div>
    )
  }
}
