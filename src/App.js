import React, {Component} from "react";
import './estilo.css';

import biscoito from './assets/biscoito.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.frase = [
      'siga os bons e aprenda com eles',
      'O bom senso vale mais que muito conhecimento',
      'O riso é a menor distância entre duas pessoas',
      'Deixe de lado as preocupações e seja feliz',
      'Realize o óbvio, pense no improvável e conquiste o impossível',
      'Acredite em milagres mas não dependa deles',
      'A maior barreira para o sucesso é o medo do fracasso'
    ];
  }

  quebrarBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length);
    state.textoFrase = this.frase[numeroAleatorio];
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={biscoito} className="img" alt="biscoito"/>
        <Botao nome='Abrir biscoito' acao={this.quebrarBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acao}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
