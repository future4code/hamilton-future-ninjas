import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
width: 20vw;
display: flex;
justify-content: space-between; 
`
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  height: 10vh;
  background: #9159c1;
`
export const Logo = styled.div`
 
`
export const Main = styled.main`
 background: #131313;
 height: 85vh;
 max-width: 100vw;
 margin: 0;
`
export const DivMain = styled.div`
    color: white;
    position: absolute;
    margin: 25vh 5vw;
    width: 38vw;
`

export const Section = styled.div`
 text-align: center;
 padding: 80px 9vw 0 10vw;
`
export const SectionDetails = styled.div`
 text-align: center;
 max-width: 100vw;
 height: 40vh;
 background: #131313;
 color: #eee;
 padding: 30px 12vw 55px 12vw;
`

export const ContainerItens = styled.div`
 margin: 55px auto 150px auto;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`

export const Item = styled.div`
    background: #7139c1;
    height: 100px;
    width: 150px;
`
export const Span = styled.div`
   width: 300px;
`
export const ContainerDetails = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`

export const Footer = styled.footer`
    margin: 55px 0 0 0;
    height: 20vh;
    background: #7139c1;
`