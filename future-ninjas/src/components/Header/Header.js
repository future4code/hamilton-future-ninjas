import React, { Component } from 'react';

import { Container, ContainerHeader, Logo, HeaderFl, ButtonUi } from './style';

// import Button from '@material-ui/core/Button';

export default class Header extends Component {
  render() {
    return (
        <Container>
          <ContainerHeader >
            <Logo>Imagem</Logo>
              <HeaderFl>
                  <button onClick={this.props.onChangeQueroTrabalhar}>Ver Vagas</button>            
                  <span>Sou Empresa</span>            
                  <span>Sou Candidato</span>            
              </HeaderFl>
          </ContainerHeader >
        </Container>
    );
  }
}
