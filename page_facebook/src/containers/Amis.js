import React, { Component } from 'react'
import BoutonPersonne from '../components/BoutonPersonne'
import './Amis.css';

export default class Amis extends Component {
  render() {
    return (
      <div className="Amis">
        <BoutonPersonne 
          pers = {this.props.pers1}
          handleClick = {this.props.handleClick}
        />
        <BoutonPersonne 
          pers = {this.props.pers2} 
          handleClick = {this.props.handleClick}
        />
        <BoutonPersonne 
          pers = {this.props.pers3} 
          handleClick = {this.props.handleClick}
        />
      </div>
    )
  }
}
