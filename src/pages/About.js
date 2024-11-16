import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaJava, FaDatabase, FaGit } from 'react-icons/fa'; // Adjusted verified icons

// Styled Components for About Section
const AboutContainer = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures footer sticks to the bottom */
  padding: 18px 0 20px 20px;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.textPrimary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust for mobile */
  }
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for mobile */
  }
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
  background-color: ${(props) => props.theme.contrast};
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 5px;
  padding: 20px;
  display: inline-flex; /* Ensures each skill behaves independently */
  flex-direction: column;
  align-items: center;
  width: 100px; /* Set a consistent width */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);

    svg {
      transform: translateY(-10px) scale(0.9); /* Moves icon up and shrinks */
    }

    span {
      display: block; /* Show skill name */
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
    display: none; /* Initially hidden */
  }
`;

const Footer = styled.footer`
  background-color: ${(props) => props.theme.contrast};
  border-top: 2px solid ${(props) => props.theme.textSecondary};
  padding: 20px;
  text-align: center; /* Placeholder styling for now */
`;

const About = () => {
  return (
    <AboutContainer>
      <ContentContainer>
        <Headline>Hi, I'm Yahav Gal.</Headline>
        <Tagline>
          With a keen eye for design and a deep understanding of development, I enjoy crafting seamless digital solutions that make a meaningful impact.
        </Tagline>
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
      <Footer>
        {/* Footer content will be added here later */}
        Footer placeholder content
      </Footer>
    </AboutContainer>
  );
};

export default About;
