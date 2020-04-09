import styled from 'styled-components'

export const HeaderFl = styled.div`
    width: 30vw;
    margin-top: 30px;
    display: flex;
    justify-content: space-between; 
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
`
export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  height: 350px;
  background-image: linear-gradient( #3d2d9f, #632eae, #872dbb);
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
