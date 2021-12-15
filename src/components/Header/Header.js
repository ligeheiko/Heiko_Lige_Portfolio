import Link from 'next/link';
import React from 'react';
import { AiFillBank, AiFillCreditCard, AiFillFilePdf, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const openInNewTab = (url) =>{
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if(newWindow)newWindow=null
}

const onClickUrl = (url) => {
  return () => openInNewTab(url)
}

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color:"white",marginBottom: 20}}>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Techonologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
    <SocialIcons onClick={onClickUrl("https://github.com/ligeheiko")}>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons onClick={onClickUrl("https://www.linkedin.com/in/heiko-lige-3710591b8/")}>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="/pdf/Heiko_Lige_CV.pdf" download="HeikoLigeCV">
        <AiFillFilePdf size="3rem"/>
      </SocialIcons>
    </Div3>
    </Container>
);

export default Header;
