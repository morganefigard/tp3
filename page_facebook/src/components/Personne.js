import React, { Component } from 'react'
import './Personne.css'

export default class Personne extends Component {
  render() {
    return (
      <div className="Personne">
        <img className="ProfileImg" src={this.props.pers.image}/>
        <p>{this.props.pers.prenom} {this.props.pers.nom}</p>
        <p>{this.props.pers.date_naissance}</p>
      </div>
    )
  }
}
