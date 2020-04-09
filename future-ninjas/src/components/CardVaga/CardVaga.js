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
                'api-token': 'projetoninja'
            }
        }).then((response) => {
            this.setState({
                listaDeVagas: response.data.jobs  
            })
            console.log(response)
        }).catch((error) => {
            window.alert("Erroooouuuwwww");
        })
    }

    render() {
        
        const vagasFiltradas = this.state.listaDeVagas.filter(vaga => {
            return vaga.value >= this.props.valorMin && vaga.value <= this.props.valorMax
        })
        
        return (
            <ContainerCardVaga>                            
                    {vagasFiltradas.map(vaga => {
                        return (
                            <ContainerItem>
                            <H1>{vaga.title}</H1>
                            <City>{vaga.cidade}</City>
    
                            <strong>R$ {vaga.value}</strong>
                            <p>{vaga.description}</p>
                            <Techs>
                                <Tech>{vaga.tecnologia}</Tech>
                            </Techs>
                            
                            {/* Criar componente formulário */}
                            <button>Ver Detalhes</button>
                            <br />
                            <span>Há aproximadamente 20 horas atrás.</span>
                        </ContainerItem>
                        )
                    })}                
            </ContainerCardVaga>
        )
    }
}
