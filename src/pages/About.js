import React from 'react';
import styled from 'styled-components';
import { 
  FaLinkedin, FaGithub, FaFileDownload, FaEnvelope 
} from 'react-icons/fa';
import HeadlineContainer from '../components/HeadlineContainer';
import PageLayout from '../components/PageLayout';
import SkillCategories from '../components/SkillCategories';

const ContentContainer = styled.div`
  flex: 1;
  padding: 40px 20px 120px;
  padding-top: 0;
  text-align: center;
`;

const Footer = styled.footer`
  width: 100%;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.8);
  border-top: 2px solid ${(props) => props.theme.textSecondary};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  }
`;

const FooterLinksContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
  }
`;

const FooterButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(${(props) => props.theme.textPrimaryRGB}, 0.15);
  color: ${(props) => props.theme.textPrimary};
  padding: 10px 18px;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    background: rgba(${(props) => props.theme.textPrimaryRGB}, 0.25);
  }

  svg {
    font-size: 1.3rem;
  }
`;

const CTAButton = styled(FooterButton)`
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.componentBackground};
  font-weight: bold;
  padding: 12px 22px;
  margin-left: auto;

  &:hover {
    background: ${(props) => props.theme.accentDark};
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    margin-left: 0;
  }
`;

const About = () => {
  return (
    <PageLayout>
      <ContentContainer>
        <HeadlineContainer
          title="Hi, I'm Yahav Gal."
          tagline="With a keen eye for design and a deep understanding of development, I craft seamless digital solutions that make an impact."
        />
        <SkillCategories />
      </ContentContainer>

      <Footer>
        <FooterLinksContainer>
          <FooterButton href="https://github.com/yourgithub" target="_blank">
            <FaGithub />
          </FooterButton>
          <FooterButton href="https://linkedin.com/in/yourlinkedin" target="_blank">
            <FaLinkedin />
          </FooterButton>
          <FooterButton href="/resume.pdf" download>
            <FaFileDownload />
          </FooterButton>
        </FooterLinksContainer>
        <CTAButton href="/contact">
          <FaEnvelope /> Contact Me
        </CTAButton>
      </Footer>
    </PageLayout>
  );
};

export default About;
