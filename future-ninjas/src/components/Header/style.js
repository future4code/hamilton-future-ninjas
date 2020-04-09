import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  height: 13vh;
  padding: 5px;
  background: transparent;

`

export const HeaderFl = styled.div`
width: 30vw;
display: flex;
justify-content: space-between; 
align-items: center;
@media screen and (max-width: 320px)  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2px; 
}
`
export const ContainerHeader = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between; 
  height: 100%;
  @media screen and (max-width: 320px)  {
  display: flex;
  flex-direction: column;
}
`
export const Logo = styled.div`
height: 100%;
`
export const Img = styled.img `
 height: 100%; 
 border-radius: 5px;
 cursor: pointer;
`
export const Button = styled.button `
    margin: 10px;
    border-radius: 5px;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    height: fit-content;
    min-height: 50px;
    width: fit-content;
    min-width: 100px;
    color: white;
    padding: 10px;
    outline: none;
    border: none;
    background-color: #131313;
    overflow: hidden;
    transition: color 0.4s ease-in-out;
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
  @media screen and (max-width: 320px)  {
  min-width: 100vw;
  background-color: #7139c1;
  margin: 0px;
  border-radius: 0px;
  border-top: 2px solid #131313;
}
`