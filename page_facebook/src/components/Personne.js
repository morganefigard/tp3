import React, { Component } from 'react'
import './Personne.css'

export default class Personne extends Component {
  render() {
    return (
      <div className="Personne" style={{backgroundColor: this.props.pers.bg_col}}>
        <img className="ProfileImg" src={this.props.pers.image} alt="Avatar"/>
        <h2>{this.props.pers.prenom} {this.props.pers.nom}</h2>
        <p>Né(e) le <b>{this.props.pers.date_naissance}</b></p>
        <p className="BgButtonContainer">
          <button className="BgButton" onClick={() => this.props.changeBackgroundColor(this.props.pers)} >Changer la couleur de fond</button>
        </p>
      </div>
    )
  }
}
