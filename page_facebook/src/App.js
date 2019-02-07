import React, { Component } from 'react';
import './App.css';
import PageFacebook from './containers/PageFacebook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageFacebook
          pers = {{
            prenom: "Jeanne",
            nom: "Dupont",
            date_naissance: "29/10/1969",
            image: "https://api.adorable.io/avatars/285/1.png",
            bg_col: "lightpink"
          }}
        />
      </div>
    );
  }
}

export default App;
