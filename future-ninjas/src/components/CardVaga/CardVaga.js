import React, { Component } from 'react'
import styled from 'styled-components';
import { ContainerCardVaga } from './styles';
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
                        <div>
                            <h1>{vaga.title}</h1>
                            <span>{vaga.cidade}</span>
                            <br />
                            <strong>R$ {vaga.value}</strong>
                            <p>{vaga.description}</p>
                            <ul>
                                <li>{vaga.tags}</li>
                            </ul>
                            
                            {/* Criar componente formulário */}
                            <button>Demonstrar interesse!</button>
                            <br />
                            <span>Há aproximadamente 20 horas atrás.</span>
                        </div>
                    )
                })}
            </ContainerCardVaga>
        )
    }
}
