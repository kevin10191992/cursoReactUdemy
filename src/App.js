import React from 'react';
import logo from './logo.svg';
import './App.css';

class EjemploClase extends React.Component {

  constructor() {
    super();
    this.state = {
      cantidad: 0
    }

    this.contador = this.contador.bind(this);
  }

  contador(op) {
    switch (op) {
      case '+':
        this.setState({ cantidad: this.state.cantidad + 1 });
        break;
      case '-':
        this.setState({ cantidad: this.state.cantidad - 1 });
        break;
      default:
        this.setState({ cantidad: 0 });
        break;
    }

  }

  render() {
    return (
      <div>
        hola mundo {this.state.cantidad}
        <br />
        <button onClick={() => this.contador('+')}>+</button>
        <button onClick={() => this.contador('-')}>-</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <EjemploClase />
      </header>
    </div>
  );
}

export default App;
