import React, { Component } from 'react'
import './Personne.css'

export default class Personne extends Component {
  render() {
    return (
      <div className="Personne">
        <p>{this.props.pers.prenom} {this.props.pers.nom}</p>
      </div>
    )
  }
}
