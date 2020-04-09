import React from 'react';
import styled from 'styled-components'
import {ContainerHeader, HeaderFl, Logo, Main, Search} from './styles'
import CardVaga from '../CardVaga/CardVaga';
import FiltroVaga from '../FiltroVaga/FiltroVaga';

import Header from '../Header/Header'

class QueroTrabalhar extends React.Component  {
    render() {
        return (
            <Container >
                <Header />
                <ContainerHeader >
                    <HeaderFl>
                    {/* <Logo>Imagem</Logo> */}
                    <h1>Vagas para Desenvolvedores</h1>
                <Search placeholder="Pesquisar vagas por tecnologia desejada.."></Search>
                    </HeaderFl>
                </ContainerHeader >
                
                <Main>
                    <FiltroVaga filtroValor={this.props.filtroValor}                    
                    />
                    <CardVaga 

                    valorMax={this.props.valorMax}
                    valorMin={this.props.valorMin}
                    
                    />
                </Main>    
            
            </Container >
        );
    }
}


const Container = styled.div`
max-width: 100vw;
height: 100vh;
`

export default QueroTrabalhar;