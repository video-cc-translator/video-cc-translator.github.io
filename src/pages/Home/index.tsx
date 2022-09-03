import PageLayout from '../../layouts/PageLayout';

import Limit from '../../components/Limit';
import Button from '../../components/Button';

import ChromeLogo from './images/chrome_logo.svg';
import NwhaleLogo from './images/n_whale_logo.png';

import styled from 'styled-components';

const InstallBtn = styled(Button)`
  display: block;
  width: 80%;
  font-size: 1rem;
  margin: 0 auto;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 25px;
      margin-right: 10px;
    }
  }
`;

const BtnGroup = styled.div`
  ${InstallBtn} + ${InstallBtn} {
    margin-top: 25px;
  }

  @media all and (min-width: 640px) {
    ${InstallBtn} {
      display: inline-block;
      width: auto;
      margin: 0 0 0 30px;
    }
  }
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

          <BtnGroup>
            <InstallBtn
              href='https://chrome.google.com/webstore/detail/fhbpmacbgklobobcieiaoibpjhdnmcfn'
              target='_blank'
              rel='noreferrer'
            >
              <span>
                <img src={ChromeLogo} alt='Chrome logo' />
                Install Chrome Extension
              </span>
            </InstallBtn>
            <InstallBtn
              href='https://store.whale.naver.com/detail/gbjejllambdbefgogchbnbmhjbnplgne'
              target='_blank'
              rel='noreferrer'
            >
              <span>
                <img src={NwhaleLogo} alt='Naver whale logo' />
                Install Whale Extension
              </span>
            </InstallBtn>
          </BtnGroup>
        </Limit>
      </Section>
    </PageLayout>
  );
};

export default Home;
