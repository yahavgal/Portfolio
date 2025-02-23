import React from 'react';
import styled from 'styled-components';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaJava, 
  FaDatabase, FaGit
} from 'react-icons/fa';

/* ------ STYLED COMPONENTS ------ */

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const SkillsHeadline = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 120px)); /* Ensures proper alignment */
  grid-auto-rows: auto; /* Prevents vertical overflow */
  gap: 18px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  max-width: 100%; /* Ensures it doesn't exceed screen width */
`;

const SkillCard = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  /* Icon */
  svg {
    font-size: 2rem;
    color: ${(props) => props.theme.accent};
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  }

  &:hover svg {
    transform: scale(1.15);
    filter: drop-shadow(0px 0px 10px rgba(${(props) => props.theme.accentRGB}, 0.6));
  }

  /* Hidden Text (Now Closer to Icon) */
  span {
    position: absolute;
    bottom: -12px; /* Moved it up a bit */
    font-size: 0.85rem; /* Slightly bigger */
    color: ${(props) => props.theme.accent};
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:hover span {
    opacity: 1;
    transform: translateY(3px); /* Less movement for a more natural glow */
    filter: drop-shadow(0px 0px 8px rgba(${(props) => props.theme.accentRGB}, 0.5));
  }
`;



/* ------ MAIN COMPONENT ------ */
const SkillCategories = () => {
  return (
    <SkillsWrapper>
      <SkillsHeadline>My Skills</SkillsHeadline>
      <SkillsContainer>
        <SkillCard><FaHtml5 /><span>HTML</span></SkillCard>
        <SkillCard><FaCss3Alt /><span>CSS</span></SkillCard>
        <SkillCard><FaJsSquare /><span>JavaScript</span></SkillCard>
        <SkillCard><FaReact /><span>React</span></SkillCard>
        <SkillCard><FaNodeJs /><span>Node.js</span></SkillCard>
        <SkillCard><FaFigma /><span>Figma</span></SkillCard>
        <SkillCard><FaJava /><span>Java</span></SkillCard>
        <SkillCard><FaDatabase /><span>SQL</span></SkillCard>
        <SkillCard><FaGit /><span>Git</span></SkillCard>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default SkillCategories;
