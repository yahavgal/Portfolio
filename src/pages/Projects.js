import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaFigma, FaArrowLeft, FaSlideshare, FaAnchor } from 'react-icons/fa';

// Styled Components for Projects Section
const ProjectsContainer = styled.section`
  background-color: ${(props) => props.theme.background};
  padding: 18px 20px;
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.textPrimary};
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 30px;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  &:hover > div {
    transform: scale(0.95);
    filter: brightness(0.9);
  }

  & > div:hover {
    transform: scale(1.05);
    filter: brightness(1.05);
  }
`;

const ProjectCard = styled.div`
  flex: 1 1 300px;
  max-width: 350px;
  background-color: ${(props) => props.theme.contrast};
  border: 2px solid ${(props) => props.theme.accent};
  border-bottom: none;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s, filter 0.3s;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${(props) => props.theme.accent};
`;

const ProjectTitle = styled.h2`
  margin: 0;
  margin-left: 10px;
  font-size: 22px;
`;

const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TechStack = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.contrast};

  span {
    flex: 1;
    text-align: center;
  }
`;

const ProjectDescription = styled.p`
  padding: 15px;
  color: ${(props) => props.theme.textPrimary};
  flex-grow: 1;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${(props) => props.theme.contrast};
  text-decoration: none;
  flex: 1;
  transition: background 0.3s;

  background-color: ${(props) =>
    props.platform === 'figma'
      ? '#A259FF'
      : props.platform === 'github'
      ? '#DE4C36'
      : props.platform === 'canva'
      ? '#3CDE36'
      : 'transparent'};

  svg {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ExpandedProject = styled.div`
  background-color: ${(props) => props.theme.contrast};
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 5px;
`;

const ExpandedHeader = styled.div`
  background-color: ${(props) => props.theme.accent};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.contrast};
  border-radius: 5px 5px 0 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.contrast};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-right: 5px;
  }
`;

const ExpandedContent = styled.div`
  padding: 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CircleLinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.contrast};
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.textPrimary};
  border-radius: 50%;
  background-color: ${(props) =>
    props.platform === 'figma'
      ? '#A259FF'
      : props.platform === 'github'
      ? '#DE4C36'
      : props.platform === 'canva'
      ? '#3CDE36'
      : 'transparent'};
  transition: transform 0.3s;
  margin-left: 10px; /* Added spacing between buttons */

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const ProjectIcon = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.accent};
`;

const ProjectName = styled.h2`
  font-size: 28px;
  color: ${(props) => props.theme.textPrimary};
`;

const projectData = [
  {
    name: 'Lango',
    image: 'project-preview.jpg',
    techStack: ['Next.js', 'TailwindCSS', 'PostgreSQL'],
    description: 'A language learning app with seamless UX and real-time updates.',
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    canvaLink: null,
    icon: <FaAnchor />,
  },
  {
    name: 'Shrine',
    image: 'project-preview.jpg',
    techStack: ['Figma', 'Photoshop', 'Balsamiq'],
    description: 'A mindfulness app designed to enhance daily productivity and mental well-being.',
    figmaLink: 'https://figma.com',
    githubLink: null,
    canvaLink: 'https://canva.com',
    icon: <FaFigma />,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (projectName) => {
    setSelectedProject(projectName);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projectData.find(
    (project) => project.name === selectedProject
  );

  return (
    <ProjectsContainer>
      {!selectedProject && (
        <>
          <Headline>Bringing Ideas to Life</Headline>
          <Tagline>Explore the work I’ve built to solve problems, enhance experiences, and push boundaries.</Tagline>
        </>
      )}
      {!selectedProject ? (
        <ProjectsGrid>
          {projectData.map((project) => (
            <ProjectCard key={project.name} onClick={() => handleCardClick(project.name)}>
              <ProjectHeader>
                {project.icon}
                <ProjectTitle>{project.name}</ProjectTitle>
              </ProjectHeader>
              <ProjectImage src={project.image} alt={`${project.name} Preview`} />
              <TechStack>
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </TechStack>
              <ProjectDescription>{project.description}</ProjectDescription>
              <LinksContainer>
                {project.figmaLink && (
                  <LinkButton
                    href={project.figmaLink}
                    platform="figma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFigma /> Figma
                  </LinkButton>
                )}
                {project.githubLink && (
                  <LinkButton
                    href={project.githubLink}
                    platform="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </LinkButton>
                )}
                {project.canvaLink && (
                  <LinkButton
                    href={project.canvaLink}
                    platform="canva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSlideshare /> Canva
                  </LinkButton>
                )}
              </LinksContainer>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      ) : (
        <ExpandedProject>
          <ExpandedHeader>
            <BackButton onClick={handleBackClick}>
              <FaArrowLeft /> Back
            </BackButton>
          </ExpandedHeader>
          <ExpandedContent>
            <HeaderContent>
              <ProjectDetails>
                {selectedProjectData.icon}
                <ProjectName>{selectedProjectData.name}</ProjectName>
              </ProjectDetails>
              <LinksContainer>
                {selectedProjectData?.figmaLink && (
                  <CircleLinkButton
                    href={selectedProjectData.figmaLink}
                    platform="figma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFigma />
                  </CircleLinkButton>
                )}
                {selectedProjectData?.githubLink && (
                  <CircleLinkButton
                    href={selectedProjectData.githubLink}
                    platform="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </CircleLinkButton>
                )}
                {selectedProjectData?.canvaLink && (
                  <CircleLinkButton
                    href={selectedProjectData.canvaLink}
                    platform="canva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSlideshare />
                  </CircleLinkButton>
                )}
              </LinksContainer>
            </HeaderContent>
            <p>{selectedProjectData.description}</p>
          </ExpandedContent>
        </ExpandedProject>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
