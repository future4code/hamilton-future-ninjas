import React from 'react';
import styled from 'styled-components'
import {ContainerHeader, HeaderFl, Logo, Main, Search} from './styles'
import CardVaga from '../CardVaga/CardVaga';
import FiltroVaga from '../FiltroVaga/FiltroVaga';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

class QueroTrabalhar extends React.Component  {
    render() {
        console.log(this.props.valorMax)
        console.log(this.props.valorMin)
        return (
            <Container >
                <ContainerHeader >
                <Header onChangeHome={this.props.onChangeHome} />

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
height: fit-content;
`

export default QueroTrabalhar;