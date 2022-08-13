import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import styled from 'styled-components';

const StyledLayout = styled.div`
  h1 {
    text-align: center;
  }
  & > main {
    padding: 0 16px;
  }
`;

export type PageLayoutProps = {
  pageTitle?: string;
};
const PageLayout: React.FC<
  PageLayoutProps & React.HTMLAttributes<HTMLDivElement>
> = ({ pageTitle, children, ...props }) => {
  return (
    <StyledLayout {...props}>
      <Header />
      <main>
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
      <Footer />
    </StyledLayout>
  );
};

export default PageLayout;
