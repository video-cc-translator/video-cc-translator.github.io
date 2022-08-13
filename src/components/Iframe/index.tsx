import React from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe``;

const Iframe: React.FC<React.IframeHTMLAttributes<HTMLIFrameElement>> = ({
  ...props
}) => {
  return <StyledIframe {...props} />;
};

export default Iframe;
