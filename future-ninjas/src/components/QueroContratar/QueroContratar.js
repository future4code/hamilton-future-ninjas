import React from 'react';
import axios from 'axios';
import {Main, Titulo, ParentDiv, DivMain, Input, Descricao, FormDiv,Button} from './style';
import Header from '../Header/Header'


class QueroContratar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

         valorInputTitulo: '',
         valorInputValor: '',
         valorInputDescricao: '',
         valorSelectPagamento: '',
         valorInputDataVencimento: '',
         valorInputCidade: '',
         valorInputTecnologia: ''
        }
    }

    onchangeCidade = e => {
         this.setState({ valorInputCidade: e.target.value })
    }

    onchangeTitulo = e => {
        this.setState({ valorInputTitulo: e.target.value })
    }

    onchangeDescricao = e => {
        this.setState({ valorInputDescricao: e.target.value })
    }

    onchangeValor = e => {
        this.setState({ valorInputValor: e.target.value })
    }

    onchageMetodoDePagamento = e => {
        this.setState({ valorSelectPagamento: e.target.value })
    }


    onchageVencimento = e => {
        this.setState({ valorInputDataVencimento: e.target.value })
    }
    

    onchageTecnologia = e => {
        this.setState({ valorInputTecnologia: e.target.value })
    }

    criarNovaVaga = (e)=> {
        e.preventDefault();

    const body = {

            "title": this.state.valorInputTitulo,
            "description": this.state.valorInputDescricao,
            "value": this.state.valorInputValor,
            "paymentMethods": [this.state.valorSelectPagamento],
            "dueDate": this.state.valorInputDataVencimento,
            "cidade": this.state.valorInputCidade,
            'tecnologia': [this.state.valorInputTecnologia]
    }

    axios.post('https://us-central1-future-apis.cloudfunctions.net/futureNinjas/jobs', body, {
        headers: {
            'api-token': 'projetoninja'
        }
    }).then(response => {
        alert('Deeeeu!')
        console.log(response.data)
    }).catch(() => {
        alert('Errrrouuu')
    })
    }

    render() {
        return (
            <div>
                <h1>Teste</h1>
                <div>
                    <label htmlFor= "título">Título: </label>
                    <input
                        value= {this.state.valorInputTitulo}
                        onChange = {this.onchangeTitulo}
                        name ="título"

                    />
                    <br/>

                    <label htmlFor= "cidade">Cidade: </label>

                    <Input
                        value= {this.state.valorInputCidade}
                        onChange = {this.onchangeCidade}
                        name ="cidade"
                    />

                    <br/> 

                    <label>Método de pagamento: </label>
                    <select value={this.state.valorSelectPagamento} onChange={this.onchageMetodoDePagamento}>
                        <option>Cartão de crédito</option>
                        <option>BitCoin</option>
                        <option>Dinheiro</option>

                    </select>
                    <br/>

                    <label htmlFor= "vencimento">Data de vencimento: </label>
                    <input
                        value= {this.state.valorInputDataVencimento}
                        onChange = {this.onchageVencimento}
                        name ="vencimeto"
                        
                    />
                    <br/>
                    <label htmlFor= "valor">Valor: </label>

                    <Input
                        value= {this.state.valorInputValor}
                        onChange = {this.onchangeValor}
                        name ="valor"
                        
                        />
                    <br/>
                    <label htmlFor= "descricao">Descrição: </label>

                    <Descricao

  
                        value ={this.state.valorInputDescricao}
                        onChange={this.onchangeDescricao}
                        name ="descricao"
                        
                    >
                    </Descricao>
                    <br/>
                     <label htmlFor= "tecnologia">Tecnologias: </label>
                    <input 
                        value= {this.state.valorInputTecnologia}
                        onChange = {this.onchageTecnologia}
                        name ="tecnologia"

                        
                    /> */}
                    <Button onClick={this.criarNovaVaga}>Anunciar vaga</Button>
                </FormDiv></form>
                </DivMain>
                </Main>
                
            </ParentDiv>

        )
    }
}

export default QueroContratar;