import '../App.css';
import logo from '../logo.svg';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-description">
          <p>
            DashRock es un aplicativo que permite a los operadores internos y externos visualizar facilmente los
            estados de los ATM, haciendo uso de mapas y gráficos interactivos.
          </p>
        </div>
        {/* <a className="App-link" href="/" target="_blank" rel="noopener noreferrer">
          About
        </a> */}
      </header>
    </div>
  );
}

export default App;
