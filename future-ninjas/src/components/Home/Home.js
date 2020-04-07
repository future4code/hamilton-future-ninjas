import React from 'react';
import { Container, ContainerHeader, Logo, Header, Section, Main, DivMain, ContainerItens, Item,SectionDetails, ContainerDetails, Span, Footer } from './style'

function Home() {
  return (
    <Container>
      <ContainerHeader >
        <Logo>Imagem</Logo>
        <Header>
            <span>Entrar</span>
            <span>Procuro profissionais</span>
            {/* <NavigationIcon>Sou um profissional</NavigationIcon> */}
        </Header>
      </ContainerHeader >

      <Main>
          <DivMain>
            <h1>Contrate freelancers especializados para qualquer trabalho, on-line.</h1>
            <h3>Milhões de pequenos negócios utilizam o Freelancer para transformar suas ideias em realidade.</h3>
            <button>Quero Contratar</button>
            <button>Eu quero trabalhar</button>
          </DivMain>
      </Main>

      <Section>
          <h1>Realize trabalhos de mais de 1350 categorias diferentes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum modi, culpa quas, perferendis natus, molestias amet soluta cumque beatae sapiente rerum voluptate aperiam vitae illum minus ullam error veritatis.</p>
           
            <ContainerItens>
                <Item>
                    Designer Gráfico
                </Item>

                <Item>
                    Desenvolvimento de Software
                </Item>

                <Item>
                    PHP
                </Item>

                <Item>
                    Modelagem 3D
                </Item>

                <Item>
                   Linux
                </Item>
            </ContainerItens>
      </Section>

      <SectionDetails>
          <h1>Como Funciona?</h1>
          <p>Anuncie o seu trabalho facilmente, contrate freelancers e pague com segurança.</p>
      
        <ContainerDetails>
            <Span>
                <p>IMAGEM</p>
                <h4>Publique uma vaga</h4>
                <h5>Publique a sua vaga para milhares de profissionais, você irá receber propostas de freelancers talentosos em poucos minutos.</h5>
            </Span>

            <Span>
                <p>IMAGEM</p>
                <h4>Contrate</h4>
                <h5>Reveja o histórico de trabalho, feedback de clientes e portfólio para limitar os candidatos. Então faça uma entrevista pelo chat e escolha o melhor.</h5>
            </Span>

            <Span>
                <p>IMAGEM</p>
                <h4>Pague com segurança</h4>
                <h5>Com o pagamento seguro do 99Freelas, o pagamento será repassado para o freelancer somente quando o projeto estiver concluído.</h5>
            </Span>
        </ContainerDetails>
      </SectionDetails>

        <Section>
            <h1>Navegue pelas principais categorias de trabalho</h1>
            <ul>
                <li>Teste</li>
                <li>Teste</li>
                <li>Teste</li>
                <li>Teste</li>
            </ul>
        </Section>

        <Footer>
            oi
        </Footer>

    </Container>
  );
}



export default Home;

