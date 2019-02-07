import React, { Component } from 'react'
import Amis from './Amis'
import Profil from './Profil'
import './PageFacebook.css';

export default class PageFacebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pers1: {
        prenom: "Jeanne",
        nom: "Dupont",
        date_naissance: "29/10/1969",
        image: "https://api.adorable.io/avatars/285/6.png",
        post: "Salut les amis !"
      },
      pers2: {
        prenom: "Martine",
        nom: "Michel",
        date_naissance: "07/04/1997",
        image: "https://api.adorable.io/avatars/285/2.png",
        post: "Hâte d'aller jouer au Scrabble."
      },
      pers3: {
        prenom: "Claude",
        nom: "Le Bon",
        date_naissance: "30/03/1968",
        image: "https://api.adorable.io/avatars/285/3.png",
        post: "Qui veut venir diner demain soir ?"
      },
      pers_select: this.props.pers
    };
    this.handleClick = this.handleClick.bind(this);
  }

  changePersonne(personne) {
    this.setState({pers_select: personne})
  }

  handleClick(personne) {
    this.changePersonne(personne);
  }

  render() {
    return (
      <div className="PageFacebook">
        <Amis 
          pers1 = {this.state.pers1}
          pers2 = {this.state.pers2}
          pers3 = {this.state.pers3}
          handleClick = {this.handleClick}
        />
        <Profil 
          pers_select = {this.state.pers_select}
        />
      </div>
    )
  }
}
