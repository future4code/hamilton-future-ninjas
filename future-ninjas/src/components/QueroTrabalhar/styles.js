import styled from 'styled-components'

export const HeaderFl = styled.div`
    width: 30vw;
    display: flex;
    justify-content: space-between; 
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
`
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  height: 270px;
  background: #9159c1;
`
export const Logo = styled.div`

`

export const Main = styled.main`
    height: 85vh;
    max-width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    
`
export const Search = styled.input`
    border: none;
    border-bottom: 1px solid lightgrey; 
    background: transparent;
    margin: 15px auto;
    padding: 5px;
    width: 20vw;
    outline: none;

    ::placeholder {
        color: white;
    }
`
