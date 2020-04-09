import React from 'react';
import styled from 'styled-components'

import Home from './components/Home/Home';
import QueroContratar from './components/QueroContratar/QueroContratar';
import QueroTrabalhar from './components/QueroTrabalhar/QueroTrabalhar';
import Footer from './components/Footer/Footer'


class App extends React.Component {
 
    state = {
      tela: "inicial",
      valorMin: 0,
      valorMax: 9999999
    }

  onChangeHome = () => {
    this.setState({
      tela: "home"
    })
  }
    
  onChangeQueroContratar = () => {
    this.setState({
      tela: "queroContratar"
    })
  }

  onChangeQueroTrabalhar = () => {
    this.setState({
      tela: "queroTrabalhar"
    })
  }

  teste = (valorMin, valorMax) => {
    if(valorMin !== '' && valorMax === '') {
      this.setState({
        valorMin: valorMin,
        valorMax: 99999999

      })
    } else if(valorMin === '' && valorMax !== '') {
      this.setState({
        valorMin: 0,
        valorMax: valorMax
      })
    } else if(valorMin === '' && valorMax === '') {
      this.setState({
        valorMin: 0,
        valorMax: 99999999
      })
    } else {
      this.setState({
        valorMin: valorMin,
        valorMax: valorMax
      })
    }
  }

  render() {

    let tela;

    switch(this.state.tela) {
      case "inicial":
        tela = (<Home 
          onChangeQueroContratar={this.onChangeQueroContratar}
          onChangeQueroTrabalhar={this.onChangeQueroTrabalhar}  
        />);
        break;
      
      case "queroContratar":
        tela = (<QueroContratar />);
        break;

      case "queroTrabalhar":
        tela = (<QueroTrabalhar 
          onChangeHome={this.onChangeHome}
          filtroValor={this.teste} 
          valorMax={this.state.valorMax}
          valorMin={this.state.valorMin}
 
        />);
        break;
        case "home": 
        tela = (<Home/>)
        break;

        default: 
    }
    
    return (
      <Container >
        {tela}
        <Footer/>
      </Container >
    );
  }

}

const Container = styled.div`
max-width: 100vw;
height: 100vh;
`


export default App;