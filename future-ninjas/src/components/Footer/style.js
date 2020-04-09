import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    height: 15vh;
    background: #7139c1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a29bfe;
    padding: 15px;
    font-weight: bolder;
    font-size: 100%;
    min-height: 140px;
    margin-bottom: 0px;
`

export const FooterOrganizer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SocialWebs = styled.ul `
    list-style: none;
    padding-left: 0px;
`
export const SocialIcons = styled.li `
    display: inline;
    padding: 0px 30px;
`
export const Links = styled.a `
color: #131313;
text-decoration: none;
font-size: 50px;
:hover {
color: white;
}
`