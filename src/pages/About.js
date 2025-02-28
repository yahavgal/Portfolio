import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FaLinkedin, FaGithub, FaFileDownload, FaEnvelope, FaPlus, FaTimes
} from 'react-icons/fa';
import HeadlineContainer from '../components/HeadlineContainer';
import PageLayout from '../components/PageLayout';
import SkillCategories from '../components/SkillCategories';

/* Styled Components */
const FloatingBubble = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.3);
  backdrop-filter: blur(10px);
  padding: ${(props) => (props.expanded ? "12px 18px" : "12px")};
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    padding: ${(props) => (props.expanded ? "10px 14px" : "10px")};
  }
`;

const BubbleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(${(props) => props.theme.textPrimaryRGB}, 0.2);
  color: ${(props) => props.theme.textPrimary};
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.15);
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.background};
  }

  svg {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    svg {
      font-size: 1.1rem;
    }
  }
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.componentBackground};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.15);
    background: ${(props) => props.theme.accentDark};
  }

  svg {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    svg {
      font-size: 1.1rem;
    }
  }
`;

/* About Page */
const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <PageLayout>
      <HeadlineContainer
        title="Hi, I'm Yahav Gal."
        tagline="With a keen eye for design and a deep understanding of development, I craft seamless digital solutions that make an impact."
      />
      <SkillCategories />

      {/* Floating Expandable Bubble */}
      <FloatingBubble expanded={expanded} onClick={() => setExpanded(!expanded)}>
        {expanded && (
          <>
            <BubbleButton href="https://github.com/yahavgal" target="_blank">
              <FaGithub />
            </BubbleButton>
            <BubbleButton href="https://www.linkedin.com/in/yahav-gal-727502203/" target="_blank">
              <FaLinkedin />
            </BubbleButton>
            <BubbleButton href="/resume.pdf" download>
              <FaFileDownload />
            </BubbleButton>
            <BubbleButton href="/contact">
              <FaEnvelope />
            </BubbleButton>
          </>
        )}
        <ExpandButton>
          {expanded ? <FaTimes /> : <FaPlus />}
        </ExpandButton>
      </FloatingBubble>
    </PageLayout>
  );
};

export default About;
