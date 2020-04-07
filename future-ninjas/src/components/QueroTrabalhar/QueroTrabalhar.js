import React from 'react';
import styled from 'styled-components'
import {ContainerHeader, Header, Logo, Main} from './styles'
import CardVaga from '../CardVaga/CardVaga';

class QueroTrabalhar extends React.Component  {
    render() {
        return (
            <Container >
                <ContainerHeader >
                    <Logo>Imagem</Logo>
                    <Header></Header>
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