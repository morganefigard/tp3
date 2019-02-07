import React, { Component } from 'react'
import './Personne.css'

export default class Personne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg_col: "lightpink",
      change: true
    }
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }

  changeBackgroundColor() {
    if(this.state.change) {
      this.setState({bg_col: "aquamarine"});
    }
    else {
      this.setState({bg_col: "lightpink"});
    }
    this.setState({change: !this.state.change});
  }

  render() {
    return (
      <div className="Personne" style={{backgroundColor: this.state.bg_col}}>
        <img className="ProfileImg" src={this.props.pers.image} alt="Avatar"/>
        <h2>{this.props.pers.prenom} {this.props.pers.nom}</h2>
        <p>Né(e) le <b>{this.props.pers.date_naissance}</b></p>
        <p className="BgButtonContainer">
          <button className="BgButton" onClick={() => this.changeBackgroundColor()} >Changer la couleur de fond</button>
        </p>
      </div>
    )
  }
}
