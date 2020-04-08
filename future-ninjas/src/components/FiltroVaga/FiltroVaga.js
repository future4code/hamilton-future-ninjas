import React, { Component} from 'react';

import { Container, Input  } from './style';

export default class FiltroVaga extends Component {
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
            <Input type="text" placeholder="Min"/> <span> - </span> <Input type="text" placeholder="Máx"/>
            
        </Container>
    )
  }
}
