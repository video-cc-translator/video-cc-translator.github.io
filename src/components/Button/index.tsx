import React from 'react';
import styled, { css } from 'styled-components';

const buttonBaseStyles = css`
  display: inline-block;

  padding: 1em 1.5em;
  border: 2px solid #000;
  border-radius: 4px;
  text-decoration: none;

  color: #000;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
`;
const StyledAnchor = styled.a`
  ${buttonBaseStyles};
`;

export type ButtonAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonAttributes> = ({ ...props }) => {
  return <StyledAnchor {...props} />;
};

export default Button;
