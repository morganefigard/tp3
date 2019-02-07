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
        image: "https://api.adorable.io/avatars/285/1.png",
        bg_col: "lightpink"
      },
      pers2: {
        prenom: "Martine",
        nom: "Michel",
        date_naissance: "07/04/1997",
        image: "https://api.adorable.io/avatars/285/2.png",
        bg_col: "lightpink"
      },
      pers3: {
        prenom: "Claude",
        nom: "Le Bon",
        date_naissance: "30/03/1968",
        image: "https://api.adorable.io/avatars/285/3.png",
        bg_col: "lightpink"
      },
      pers_select: this.props.pers
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }

  changePersonne(personne) {
    this.setState({pers_select: personne})
  }

  handleClick(personne) {
    this.changePersonne(personne);
  }

  changeBackgroundColor(personne) {
    if(personne.bg_col === "lightpink") {
      if(personne.prenom === "Jeanne") {
        this.setState({
          pers1: {
            prenom: "Jeanne",
            nom: "Dupont",
            date_naissance: "29/10/1969",
            image: "https://api.adorable.io/avatars/285/1.png",
            bg_col: "lightblue"
          }
        });
        this.setState({pers_select: {prenom: personne.prenom, nom: personne.nom, date_naissance: personne.date_naissance, image: personne.image, bg_col: "lightblue"}})
      }
      else if(personne.prenom === "Martine") {
        this.setState({
          pers2: {
            prenom: "Martine",
            nom: "Michel",
            date_naissance: "07/04/1997",
            image: "https://api.adorable.io/avatars/285/2.png",
            bg_col: "lightblue"
          }
        });
        this.setState({pers_select: {prenom: personne.prenom, nom: personne.nom, date_naissance: personne.date_naissance, image: personne.image, bg_col: "lightblue"}})
      }
      else if(personne.prenom === "Claude") {
        this.setState({
          pers3: {
            prenom: "Claude",
            nom: "Le Bon",
            date_naissance: "30/03/1968",
            image: "https://api.adorable.io/avatars/285/3.png",
            bg_col: "lightblue"
          }
        });
        this.setState({pers_select: {prenom: personne.prenom, nom: personne.nom, date_naissance: personne.date_naissance, image: personne.image, bg_col: "lightblue"}})
      }
    }
    else {
      if(personne.prenom === "Jeanne") {
        this.setState({
          pers1: {
            prenom: "Jeanne",
            nom: "Dupont",
            date_naissance: "29/10/1969",
            image: "https://api.adorable.io/avatars/285/1.png",
            bg_col: "lightpink"
          }
        });
        this.setState({pers_select: {prenom: personne.prenom, nom: personne.nom, date_naissance: personne.date_naissance, image: personne.image, bg_col: "lightpink"}})
      }
      else if(personne.prenom === "Martine") {
        this.setState({
          pers2: {
            prenom: "Martine",
            nom: "Michel",
            date_naissance: "07/04/1997",
            image: "https://api.adorable.io/avatars/285/2.png",
            bg_col: "lightpink"
          }
        });
        this.setState({pers_select: {prenom: personne.prenom, nom: personne.nom, date_naissance: personne.date_naissance, image: personne.image, bg_col: "lightpink"}})
      }
      else if(personne.prenom === "Claude") {
        this.setState({
          pers3: {
            prenom: "Claude",
            nom: "Le Bon",
            date_naissance: "30/03/1968",
            image: "https://api.adorable.io/avatars/285/3.png",
            bg_col: "lightpink"
          }
        });
        this.setState({pers_select: {prenom: personne.prenom, nom: personne.nom, date_naissance: personne.date_naissance, image: personne.image, bg_col: "lightpink"}})
      }
    }
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
          changeBackgroundColor = {this.changeBackgroundColor}
        />
      </div>
    )
  }
}
