import styled from 'styled-components'
import Background from '../../imgs/PurpleAbstractBackground.jpg'

export const Container = styled.div``


export const Main = styled.main`
 background-image: url(${Background});
 background-repeat: no-repeat;
 background-size: cover;
 height: 95vh;
 max-width: 100vw;
 margin: 0;
`

export const DivMain = styled.div`
    color: white;
    position: absolute;
    margin: 20vh 5vw;
    width: 60vw;
`

export const Section = styled.div`
 text-align: center;
 padding: 80px 9vw 0 10vw;
`
export const SectionDetails = styled.div`
 text-align: center;
 max-width: 100vw;
 height: fit-content;
 background: #131313;
 color: #eee;
 padding: 30px 12vw 55px 12vw;
`

export const ContainerItens = styled.div`
 margin: 55px auto 150px auto;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
 grid-gap: 50px;
`

export const Item = styled.div`
    background: #7139c1;
    height: 100px;
    padding: 15px;
    width: 150px;
    border-radius: 5px;
    color: white;
    margin: auto;
`
export const Span = styled.div`
   width: 300px;
   @media screen and (max-width: 320px)  {
    width: 280px;
}
`
export const ContainerDetails = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`

export const Button = styled.button `
    margin: 10px 0px 10px 0px;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: #9159c1;
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    border-radius: 5px;
    margin-left: 20px;
  ::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 100%;
    right: 100%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #7139c1;
    transform-origin: center;
    transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  
  :hover {
    cursor: pointer;
    color: #161616;
  }
  
  :hover::before {
    transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
  }
`
export const SpanIcons = styled.span `
    font-size: 30px;
    
`