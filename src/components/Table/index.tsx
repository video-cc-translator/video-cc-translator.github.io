import React from 'react';

import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  border: 0;

  th,
  td {
    font-size: 14px;
    line-height: 1.6;
  }
`;

const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({
  ...props
}) => {
  return <StyledTable {...props} />;
};

export default Table;
