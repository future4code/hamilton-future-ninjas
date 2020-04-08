import React, { Component } from 'react';

import { Container, ContainerHeader, Logo, HeaderFl, ButtonUi } from './style';

import Button from '@material-ui/core/Button';

export default class Header extends Component {
  render() {
    return (
        <Container>
          <ContainerHeader >
            <Logo>Imagem</Logo>
              <HeaderFl>
                  <Button variant="outlined" onClick={this.props.onChangeQueroTrabalhar}>Ver Vagas</Button>            
                  <span>Sou Empresa</span>            
                  <span>Sou Candidato</span>            
              </HeaderFl>
          </ContainerHeader >
        </Container>
    );
  }
}
