import React from 'react';
import axios from 'axios';
import {Main, Titulo, ParentDiv, DivMain, Input, Descricao, FormDiv,Button} from './style';
import Header from '../Header/Header'


class QueroContratar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            inputTitulo:'',
            inputCidade:'',
            inputDescricao:'',
            inputTecnologia:'',
            inputValor:'',
            inputDueDate:'',
            inputMetodoDePagamento:''

        }
    }
    onchangeTitulo = e => {
        this.setState({inputTitulo:e.target.value})

    }
    onchangeCidade = e => {
        this.setState({inputCidade:e.target.value})

    }
    onchangeDescricao = e => {
        this.setState({inputDescricao:e.target.value})

    }
    onchangeTecnolgia = e => {
        this.setState({inputTecnologia:e.target.value})

    }
    onchangeValor = e => {
        this.setState({inputValor:e.target.value})

    }
    onchangeDueDate = e => {
        this.setState({inputDueDate:e.target.value})

    }
    onchageMetodoDePagamento = e => {
        this.setState({inputMetodoDePagamento:e.target.value})

    }
    
    onclickVaga = (e) => {
        e.preventDefault()
        const body = {

            title :this.state.inputTitulo,
            cidade:this.state.inputCidade,
            description:this.state.inputDescricao,
            value:this.state.inputValor,
            dueDate:this.state.inputDueDate,
            tags:this.state.inputTecnologia,
            paymentMethods:this.state.inputMetodoDePagamento
        }
        axios.post(`https://us-central1-future-apis.cloudfunctions.net/futureNinjas/jobs`, body,
        {
            headers:{

                "api-token":"futureninjas",
                'Content-Type': 'application/json'
             }

        }) .then((response) => {
            window.alert("Vaga criada");
            console.log(response)
        })
        .catch(() => {
            console.log("Errorrrrrr")
        })
        
    }

    render() {
        return (
            <ParentDiv>
                <Header/>
                <Main>
                <DivMain>
                    <Titulo>Anuncie aqui uma vaga e encontre um profissional freelancer!</Titulo>
                <form><FormDiv>
                    <label htmlFor= "título">Título: </label>
                    <Input
                        value= {this.state.inputTitulo}
                        onChange = {this.onchangeTitulo}
                        name ="título"

                    />
                    <br/>
                    <label htmlFor= "cidade">Cidade: </label>
                    <Input
                        value= {this.state.inputCidade}
                        onChange = {this.onchangeCidade}
                        name ="cidade"

                    />
        

                    {/* <label>Método de pagamento: </label>
                    <select value={this.state.inputMetodoDePagamento} onChange={this.onchageMetodoDePagamento}>
                        <option>Cartão de crédito</option>
                        <option>BitCoin</option>
                        <option>Dinheiro</option>
                    </select> */}
                    {/* <label htmlFor= "vencimento">Data de vencimento: </label>
                    <input
                        value= {this.state.inputDueDate}
                        onChange = {this.onchangeDueDate}
                        name ="vencimeto"

                    /> */}
                    <br/>
                    <label htmlFor= "valor">Valor: </label>
                    <Input
                        value= {this.state.inputValor}
                        onChange = {this.onchangeValor}
                        name ="valor"

                    />
                    <br/>
                    <label htmlFor= "descricao">Descrição: </label>
                    <Descricao

                        value ={this.state.inputDescricao}
                        onChange={this.onchangeDescricao}
                        name ="descricao"

                    >
                    </Descricao>
                    <br/>
                    {/* <label htmlFor= "tecnologias">Tecnologias: </label>
                    <input 
                        value= {this.state.inputTecnologia}
                        onChange = {this.onchangeTecnolgia}
                        name ="tecnologia"
                        
                    /> */}
                    <Button onClick={this.onclickVaga}>Anunciar vaga</Button>
                </FormDiv></form>
                </DivMain>
                </Main>
                
            </ParentDiv>
        )
    }
}

export default QueroContratar;