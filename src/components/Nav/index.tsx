import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledNav = styled.nav`
  a {
    color: #000;
    font-size: 18px;
    text-decoration: underline;

    & + a {
      margin-left: 24px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Nav: React.FC<React.HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  return (
    <StyledNav {...props}>
      {/* <Link to='/'>Home</Link> */}
      <Link to='/changelog'>Changelog</Link>
    </StyledNav>
  );
};

export default Nav;
