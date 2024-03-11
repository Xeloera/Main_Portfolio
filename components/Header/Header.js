import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container className=" w-full place-content-center justify-center padding-2rem">
    
    <Div1>
      <Link legacyBehavior href="/" passHref>
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCssdeck size="7rem" /> <span className='center'> Xeloera </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
      <li>
        <Link legacyBehavior href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
