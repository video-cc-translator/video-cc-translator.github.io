import React from 'react';

import Limit from '../Limit';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 4em 0;
  text-align: center;
`;

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  return (
    <StyledFooter {...props}>
      <Limit>
        <small>&#169; Video CC Translator {new Date().getFullYear()}.</small>
      </Limit>
    </StyledFooter>
  );
};

export default Footer;
