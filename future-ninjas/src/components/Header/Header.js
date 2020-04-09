import React, { Component } from 'react';

import { Container, ContainerHeader, Logo, HeaderFl, Button, Img } from './style';

// import Button from '@material-ui/core/Button';

export default class Header extends Component {
  render() {
    return (
        <Container>
          <ContainerHeader >
            <Logo><Img src={require("../../imgs/logo.png")} /> {/* botar um onClick para renderizar a home quando a logo for clicada */} </Logo> 
              <HeaderFl>
                  <Button onClick={this.props.onChangeQueroTrabalhar}>Ver Vagas</Button>            
                  <Button onClick={this.props.onChangeQueroTrabalhar}>Sou Empresa</Button>            
                  <Button onClick={this.props.onChangeQueroTrabalhar}>Sou Profissional</Button>                       
              </HeaderFl>
          </ContainerHeader >
        </Container>
    );
  }
}
