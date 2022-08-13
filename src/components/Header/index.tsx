import React from 'react';

import Limit from '../Limit';
import Nav from '../Nav';
import styled from 'styled-components';
import LogoIcon from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  span {
    margin-left: 12px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeader = styled.header`
  padding: 24px 36px;
`;
const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  return (
    <StyledHeader {...props}>
      <Limit maxWidth='lg'>
        <Inner>
          <Link to='/'>
            <Logo>
              <img src={LogoIcon} alt='logo' />
            </Logo>
          </Link>

          <Nav />
        </Inner>
      </Limit>
    </StyledHeader>
  );
};

export default Header;
