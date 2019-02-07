import React, { Component } from 'react';
import './App.css';
import PageFacebook from './containers/PageFacebook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageFacebook
          pers1 = {{
            prenom: "Jeanne",
            nom: "Dupont"
          }}
          pers2 = {{
            prenom: "Martine",
            nom: "Michel"
          }}
          pers3 = {{
            prenom: "Claude",
            nom: "Le Bon"
          }}
        />
      </div>
    );
  }
}

export default App;
