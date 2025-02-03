import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaJava, FaDatabase, FaGit } from 'react-icons/fa';
import HeadlineContainer from '../components/HeadlineContainer';
import Section from '../components/SectionContainer'; // Import custom components


// Styled Components for About Section

const ContentContainer = styled.div`
  flex: 1;
`;

const SkillsSection = styled.div`
  margin: 40px 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Skill = styled.div`
  background-color: ${(props) => props.theme.componentBackground};
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 5px;
  padding: 20px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);

    svg {
      transform: translateY(-10px) scale(0.9);
    }

    span {
      display: block;
    }
  }

  svg {
    font-size: 2rem;
    color: ${(props) => props.theme.accent};
    transition: transform 0.3s;
  }

  span {
    margin-top: 10px;
    font-size: 1rem;
    color: ${(props) => props.theme.textPrimary};
    display: none;
  }
`;

const Footer = styled.footer`
  background-color: ${(props) => props.theme.componentBackground};
  border-top: 2px solid ${(props) => props.theme.textSecondary};
  padding: 20px;
  text-align: center;
`;

const About = () => {
  return (
    <Section>
      <ContentContainer>
        <HeadlineContainer
          title="Hi, I'm Yahav Gal."
          tagline="With a keen eye for design and a deep understanding of development, I enjoy crafting seamless digital solutions that make a meaningful impact."
        />
        <SkillsSection>
          <h2>My Skills</h2>
          <SkillsContainer>
            <Skill>
              <FaHtml5 />
              <span>HTML</span>
            </Skill>
            <Skill>
              <FaCss3Alt />
              <span>CSS</span>
            </Skill>
            <Skill>
              <FaJsSquare />
              <span>JavaScript</span>
            </Skill>
            <Skill>
              <FaReact />
              <span>React</span>
            </Skill>
            <Skill>
              <FaNodeJs />
              <span>Node.js</span>
            </Skill>
            <Skill>
              <FaFigma />
              <span>Figma</span>
            </Skill>
            <Skill>
              <FaJava />
              <span>Java</span>
            </Skill>
            <Skill>
              <FaDatabase />
              <span>SQL</span>
            </Skill>
            <Skill>
              <FaGit />
              <span>Git</span>
            </Skill>
          </SkillsContainer>
        </SkillsSection>
      </ContentContainer>
      <Footer>Footer placeholder content</Footer>
    </Section>
  );
};

export default About;
