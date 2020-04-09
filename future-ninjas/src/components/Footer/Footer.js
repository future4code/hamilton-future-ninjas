import React, { Component } from 'react';

import {ContainerFooter, FooterOrganizer, SocialWebs, SocialIcons, Links} from './style';



export default class Header extends Component {
  render() {
    return (
        <ContainerFooter>
            <FooterOrganizer>
            <SocialWebs>
                    <SocialIcons><Links target="blank" href="www.facebook.com"><i className="fab fa-facebook"></i></Links></SocialIcons>
                    <SocialIcons><Links target="blank" href="www.instagram.com"><i className="fab fa-instagram"></i></Links></SocialIcons>
                    <SocialIcons><Links target="blank" href="#"><i className="fab fa-bitcoin"></i></Links></SocialIcons>
                    <SocialIcons><Links target="blank" href="#"><i className="fab fa-amazon-pay"></i></Links></SocialIcons>
                    <SocialIcons><Links target="blank" href="#"><i className="fab fa-apple-pay"></i></Links></SocialIcons>
            </SocialWebs>
            </FooterOrganizer>
        </ContainerFooter>
    );
  }
}
