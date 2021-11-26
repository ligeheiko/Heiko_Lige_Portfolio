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
      <SocialIcons href="https://github.com">
        <AiFillAmazonSquare size="3rem"/>
      </SocialIcons>
      <SocialIcons onClick={onClickUrl("https://www.google.com")}>
        <AiFillInstagram size="3rem"/>
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
