import React from 'react';

import Limit from '../Limit';
import Nav from '../Nav';
import styled from 'styled-components';
import LogoIcon from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 48px;
    height: 48px;
  }

  span {
    display: none;
    margin-left: 12px;
    font-weight: bold;
    color: #000;
  }

  @media screen and (min-width: 640px) {
    & > span {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1024px) {
    & > span {
      font-size: 24px;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeader = styled.header`
  padding: 24px 36px;

  @media screen and (min-width: 640px) {
    ${Logo} > span {
      display: block;
    }
  }
`;
const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  return (
    <StyledHeader {...props}>
      <Limit maxWidth='lg'>
        <Inner>
          <Logo to='/'>
            <img src={LogoIcon} alt='logo' />
            <span>Video CC Translator</span>
          </Logo>

          <Nav />
        </Inner>
      </Limit>
    </StyledHeader>
  );
};

export default Header;
