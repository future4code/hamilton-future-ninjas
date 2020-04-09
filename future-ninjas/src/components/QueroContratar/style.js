import styled from 'styled-components'

export const ParentDiv = styled.div `
    color: white;
    
`
// export const Form = styled.form `
//     height: inherit;
//     background: #131313;
// `
export const Main = styled.main`
 background: #131313;
 height: 125vh;
 max-width: 100vw;
 /* margin: 0; */
`
export const Titulo = styled.h1 `
`
export const DivMain = styled.div`
    color: white;
    position: absolute;
    margin: 5vh 5vw;
    width: 60vw;

`
export const Input = styled.input `
    width: 70%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    :focus {
        outline: none;
    }
`
export const Descricao = styled.textarea `
    width: 70%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    :focus {
        outline: none;
    }
`
export const FormDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
`
export const Button = styled.button `
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
    width: 70%;
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