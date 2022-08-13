import React from 'react';
import styled, { css } from 'styled-components';

type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const SIZE: {
  [key in SizeType]: number;
} = {
  xs: 320,
  sm: 640,
  md: 1024,
  lg: 1280,
  xl: 1600,
};

export type LimitProps = {
  maxWidth?: SizeType;
};

const StyledLimit = styled.div<{ maxWidth?: SizeType }>`
  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${`${SIZE[props.maxWidth]}px`};
    `};
  margin: 0 auto;
`;

const Limit: React.FC<LimitProps & React.HTMLAttributes<HTMLDivElement>> = ({
  maxWidth,
  ...props
}) => {
  return <StyledLimit maxWidth={maxWidth} {...props} />;
};

export default Limit;
