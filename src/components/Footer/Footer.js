import React from 'react';
import { AiFillBank, AiFillFilePdf, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
       <LinkTitle>Call</LinkTitle>
       <LinkItem href="tel: +372 53040619">53040619</LinkItem>
      </LinkColumn>
      <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href="mailto:heiko.lige@gmail.com">heiko.lige@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="/pdf/cv.pdf" download="HeikoLigeCV">
        <AiFillFilePdf size="3rem"/>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
