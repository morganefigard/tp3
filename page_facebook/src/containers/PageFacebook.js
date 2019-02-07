import React, { Component } from 'react'
import Amis from './Amis'
import Profil from './Profil'
import './PageFacebook.css';

export default class PageFacebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pers1: this.props.pers1, 
      pers2: this.props.pers2, 
      pers3: this.props.pers3, 
      pers_select: this.props.pers1
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
