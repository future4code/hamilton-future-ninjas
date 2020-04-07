import React from 'react';
import styled from 'styled-components'

import Home from './components/Home/Home';
import QueroContratar from './components/QueroContratar/QueroContratar';
import QueroTrabalhar from './components/QueroTrabalhar/QueroTrabalhar';



class App extends React.Component {
    
    state = {
      tela: "inicial"
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
        tela = (<QueroTrabalhar />);
    }
    
    return (
      <Container >
        {tela}
      </Container >
    );
  }

}

const Container = styled.div`
max-width: 100vw;
height: 100vh;
`


export default App;