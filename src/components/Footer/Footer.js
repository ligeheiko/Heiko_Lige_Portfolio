import React from 'react';
import { AiFillAmazonSquare, AiFillBank, AiFillFilePdf, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillUpCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const openInNewTab = (url) =>{
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if(newWindow)newWindow=null
}

const onClickUrl = (url) => {
  return () => openInNewTab(url)
}

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
      <SocialIcons onClick={onClickUrl("https://github.com/ligeheiko")}>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons onClick={onClickUrl("https://www.linkedin.com/in/heiko-lige-3710591b8/")}>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="/pdf/Heiko_Lige_CV.pdf" download="HeikoLigeCV">
        <AiFillFilePdf size="3rem"/>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
