import React, { Component } from 'react'
import { ContainerCardVaga, ContainerItem, City, Techs, Tech, H1 } from './styles';
import axios from 'axios';

export default class CardVaga extends Component {

    state = {
        listaDeVagas: []
    }

    componentDidMount() {
        axios.get('https://us-central1-future-apis.cloudfunctions.net/futureNinjas/jobs', {
            headers: {
                'Content-Type': 'application/json',
                'api-token': 'futureninjas'
            }
        }).then((response) => {
            this.setState({
                listaDeVagas: response.data.jobs
            })
            console.log(this.state.listaDeVagas)
        }).catch((error) => {
            window.alert("Erroooouuuwwww");
        })
    }

    render() {
        return (
            <ContainerCardVaga>
                {this.state.listaDeVagas.map((vaga, index) => {
                    return (
                        <ContainerItem>
                            <H1>{vaga.title}</H1>
                            <City>{vaga.cidade}</City>
    
                            <strong>R$ {vaga.value}</strong>
                            <p>{vaga.description}</p>
                            <Techs>
                                <Tech>{vaga.tags}</Tech>
                            </Techs>
                            
                            {/* Criar componente formulário */}
                            <button>Demonstrar interesse!</button>
                            <br />
                            <span>Há aproximadamente 20 horas atrás.</span>
                        </ContainerItem>
                    )
                })}
            </ContainerCardVaga>
        )
    }
}
