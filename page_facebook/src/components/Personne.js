import React, { Component } from 'react'
import './Personne.css'

export default class Personne extends Component {
  render() {
    return (
      <div className="Personne" style={{backgroundColor: this.props.pers.bg_col}}>
        <img className="ProfileImg" src={this.props.pers.image} alt="Avatar"/>
        <p>{this.props.pers.prenom} {this.props.pers.nom}</p>
        <p>{this.props.pers.date_naissance}</p>
        <button onClick={() => this.props.changeBackgroundColor(this.props.pers)}>Changer la couleur de fond</button>
      </div>
    )
  }
}
