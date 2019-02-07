import React, { Component } from 'react'
import './BoutonPersonne.css'

export default class BoutonPersonne extends Component {
  render() {
    let p = this.props.pers;
    return (
      <button className="BoutonPersonne" onClick={() => this.props.handleClick(p)}>
        <p>{p.prenom}</p>
      </button>
    )
  }
}