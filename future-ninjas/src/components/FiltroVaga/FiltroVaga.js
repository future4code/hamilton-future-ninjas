import React, { Component} from 'react';
import axios from 'axios';

import { Container, Input  } from './style';

export default class FiltroVaga extends Component {

  state = {
    inputValorMaximo: '',
    inputValorMinimo: ''
  }

  onChangeInputValorMaximo = (event) => {
    this.setState({
      inputValorMaximo: event.target.value
    })
  }
  
  onChangeInputValorMinimo = (event) => {
    this.setState({
      inputValorMinimo: event.target.value
    })
  }

  onClickFiltrar = () => {
    this.props.filtroValor(this.state.inputValorMaximo, this.state.inputValorMinimo)
  }

  render() {
    return(
        <Container>
            <h3>Vagas</h3>
            <p>253 resultados</p>

            <h3>Localização</h3>
            <p>São Paulo (141)</p>
            <p>Florianópolis (43)</p>
            <p>Rio de Janeiro (14)</p>
            <p>Curitiba (8)</p>

            <h3>Tipo de trabalho</h3>
            <p>Aceita remoto (34)</p>
            <p>Apenas presencial (100)</p>

            <h3>Filtro por valor</h3>
            <Input type="text" onChange={this.onChangeInputValorMinimo} value={this.state.inputValorMinimo}  placeholder="Min"/> 
            
            <span>-</span>
            
            <Input type="text" onChange={this.onChangeInputValorMaximo} value={this.state.inputValorMaximo} placeholder="Máx"/>

            <button onClick={this.onClickFiltrar}>Filtrar</button>
            
        </Container>
    )
  }
}