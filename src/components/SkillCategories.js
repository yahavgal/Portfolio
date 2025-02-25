import React from 'react';
import styled from 'styled-components';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaJava, 
  FaDatabase, FaGit
} from 'react-icons/fa';

/* Styled Components */
const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  width: 100%;
  padding-bottom: 100px; /* Prevents skills from getting hidden behind footer */
`;

const SkillsHeadline = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }

  @media (max-width: 400px) {
    font-size: 1.75rem;
    margin-bottom: 15px;
  }
`;


const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 10px;
`;

const SkillCard = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  svg {
    font-size: 2rem;
    color: ${(props) => props.theme.accent};
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  }

  &:hover svg {
    transform: scale(1.15);
    filter: drop-shadow(0px 0px 10px rgba(${(props) => props.theme.accentRGB}, 0.6));
  }

  span {
    position: absolute;
    bottom: -12px;
    font-size: 0.85rem;
    color: ${(props) => props.theme.accent};
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:hover span {
    opacity: 1;
    transform: translateY(3px);
    filter: drop-shadow(0px 0px 8px rgba(${(props) => props.theme.accentRGB}, 0.5));
  }
`;

/* Component */
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
