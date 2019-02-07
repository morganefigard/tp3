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
            nom: "Dupont",
            date_naissance: "29/10/1969",
            image: "https://api.adorable.io/avatars/285/1.png"
          }}
          pers2 = {{
            prenom: "Martine",
            nom: "Michel",
            date_naissance: "07/04/1997",
            image: "https://api.adorable.io/avatars/285/2.png"
          }}
          pers3 = {{
            prenom: "Claude",
            nom: "Le Bon",
            date_naissance: "30/03/1968",
            image: "https://api.adorable.io/avatars/285/3.png"
          }}
        />
      </div>
    );
  }
}

export default App;
