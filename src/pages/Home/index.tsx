import PageLayout from '../../layouts/PageLayout';

import Limit from '../../components/Limit';
import Button from '../../components/Button';

import styled from 'styled-components';

const InstallBtn = styled(Button)`
  display: inline-block;
  font-size: 1rem;
`;
const Paragraphy = styled.p`
  margin: 48px 0;
  font-size: ${24 / 16}rem;
  line-height: 1.6;
`;
const Title = styled.h1`
  font-size: ${56 / 16}rem;
`;
const Section = styled.section`
  padding: 36px 0;
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Limit maxWidth='md'>
          <Title>Udemy, Udacity 비디오 자막 번역기</Title>
          <Paragraphy>
            영상에서 제공하는 폐쇄 자막을 번역하여 제공합니다.
          </Paragraphy>
          <InstallBtn
            href='https://chrome.google.com/webstore/detail/fhbpmacbgklobobcieiaoibpjhdnmcfn'
            target='_blank'
            rel='noreferrer'
          >
            Install Chrome Extension
          </InstallBtn>
        </Limit>
      </Section>
    </PageLayout>
  );
};

export default Home;
