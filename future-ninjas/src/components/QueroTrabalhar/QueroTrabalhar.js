import React from 'react';
import styled from 'styled-components'
import {ContainerHeader, Header, Logo, Main, Search} from './styles'
import CardVaga from '../CardVaga/CardVaga';

class QueroTrabalhar extends React.Component  {
    render() {
        return (
            <Container >
                <ContainerHeader >
                    <Header>
                    {/* <Logo>Imagem</Logo> */}
                    <h1>Vagas para Desenvolvedores</h1>
                    <Search placeholder="Pesquisar vagas por tecnologia desejada.."></Search>
                    </Header>
                </ContainerHeader >
                
                <Main>
                    <div></div>
                    <CardVaga />
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