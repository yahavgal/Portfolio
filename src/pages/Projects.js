import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaFigma, FaArrowLeft, FaSlideshare, FaAnchor, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import HeadlineContainer from '../components/HeadlineContainer';
import Section from '../components/SectionContainer'; // Import custom components
import ExpandedProject from '../components/ExpandedProject'; // Import custom components


// Styled Components for Projects Section
const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProjectCard = styled.div`
  flex: 1 1 300px;
  max-width: 350px;
  background-color: ${(props) => props.theme.componentBackground};
  border: 1px solid ${(props) => props.theme.headerPrimary};
  border-bottom: none;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: border 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.accent};
    border-bottom: none;
    box-shadow: 0px 0px 25px 10px rgba(${(props) => props.theme.accent}, 0.75);
  }
`;


const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.headerPrimary};
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;

  @media (max-width: 770px) {
    font-size: 1.25rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TechStack = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
  background-color:  ${(props) => props.theme.headerPrimary};
  color: ${(props) => props.theme.textSecondary};

  span {
    flex: 1;
    text-align: center;
    font-size: 1rem;
  }
`;

const ProjectDescription = styled.p`
  padding: 15px;
  font-size: 1rem;
  color: ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.componentBackground};
  flex-grow: 1;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.accent};
`;

const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 15px;
  color: ${(props) => props.theme.headerPrimary};
  text-decoration: none;
  flex: 1;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 8px;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.headerPrimary};
    color: ${(props) => props.theme.accent};
    transform: translateY(-2px);
    opacity: 0.9;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const projectData = [
  {
    name: 'Shrine',
    image: 'project-preview.jpg',
    techStack: ['Figma', 'Photoshop', 'Balsamiq'],
    shortDescription: 'A mindfulness app for daily growth.',
    description:
      'A holistic platform designed to help individuals organize and engage in mindfulness activities. The project aimed to provide users with tools for daily mindfulness exercises, guided meditations, and a way to track their personal growth over time.',
    problem:
      'Users often struggle to maintain consistent mindfulness practices due to the lack of structure and personal engagement in existing apps. They also find it difficult to balance mindfulness activities with their busy schedules.',
    solution:
      'Designed and prototyped an app that integrates daily mindfulness activities, personal habit tracking, and guided meditation sessions. The platform featured customized reminders and user journeys to help users stay committed to their mental well-being goals.',
    keyFeatures: [
      'Personalized Mindfulness Plans: Users could set their goals and receive tailored meditation and mindfulness routines.',
      'Daily Reminders and Notifications: Customizable reminders to help users stick to their mindfulness practice, even on hectic days.',
      'Progress Tracking: Detailed logs and visual tracking of users’ mindfulness habits and improvements over time.',
      'Cross-platform: Planned development using React Native for both iOS and Android platforms.',
    ],
    screenshots: [
      '/shrine_screenshot_1.png',
      '/shrine_screenshot_2.png',
      '/shrine_screenshot_3.png',
      '/shrine_screenshot_4.png',
      '/shrine_screenshot_5.png'
    ],
    challenges: [
      {
        type: 'challenge',
        icon: <FaQuestionCircle />,
        title: 'Designing the User Experience',
        content:
          'Faced challenges in creating an intuitive user journey that didn’t overwhelm new users while still providing depth for advanced users. Learned how to balance simplicity with functionality.',
      },
      {
        type: 'learning',
        icon: <FaLightbulb />,
        title: 'Startup Partnership Issues',
        content:
          'The project faced difficulties due to lack of commitment from my partner, ultimately leading to a decision to part ways. However, the design phase provided invaluable insights into managing a startup environment and navigating early-stage development challenges.',
      },
    ],
    results: [
      {
        icon: <FaFigma />,
        title: 'Prototype Completion',
        content: 'Delivered a fully functional Figma prototype with high-fidelity designs and user flows. The prototype showcased interactive elements, custom user journeys, and an integrated habit tracker.',
      },
      {
        icon: <FaSlideshare />,
        title: 'Key Takeaways',
        content: 'Gained significant experience in product design, wireframing, and managing a startup project, even though it didn’t reach full development.',
      },
    ],
    figmaLink: 'https://figma.com',
    githubLink: null,
    canvaLink:
      'https://www.canva.com/design/DAGYgmcPfAI/VcF52ta3kBPgxeWnYSBpkg/edit?utm_content=DAGYgmcPfAI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    icon: <FaFigma />,
  },
  {
    name: 'Shrine',
    image: 'project-preview.jpg',
    techStack: ['Figma', 'Photoshop', 'Balsamiq'],
    shortDescription: 'A mindfulness app for daily growth.',
    description:
      'A holistic platform designed to help individuals organize and engage in mindfulness activities. The project aimed to provide users with tools for daily mindfulness exercises, guided meditations, and a way to track their personal growth over time.',
    problem:
      'Users often struggle to maintain consistent mindfulness practices due to the lack of structure and personal engagement in existing apps. They also find it difficult to balance mindfulness activities with their busy schedules.',
    solution:
      'Designed and prototyped an app that integrates daily mindfulness activities, personal habit tracking, and guided meditation sessions. The platform featured customized reminders and user journeys to help users stay committed to their mental well-being goals.',
    keyFeatures: [
      'Personalized Mindfulness Plans: Users could set their goals and receive tailored meditation and mindfulness routines.',
      'Daily Reminders and Notifications: Customizable reminders to help users stick to their mindfulness practice, even on hectic days.',
      'Progress Tracking: Detailed logs and visual tracking of users’ mindfulness habits and improvements over time.',
      'Cross-platform: Planned development using React Native for both iOS and Android platforms.',
    ],
    screenshots: [
      '/chatbot_shrine.jpg',
      '/chatbot_shrine.jpg',
      '/chatbot_shrine.jpg',
      '/chatbot_shrine.jpg',
      '/chatbot_shrine.jpg',
    ],
    challenges: [
      {
        type: 'challenge',
        icon: <FaQuestionCircle />,
        title: 'Designing the User Experience',
        content:
          'Faced challenges in creating an intuitive user journey that didn’t overwhelm new users while still providing depth for advanced users. Learned how to balance simplicity with functionality.',
      },
      {
        type: 'learning',
        icon: <FaLightbulb />,
        title: 'Startup Partnership Issues',
        content:
          'The project faced difficulties due to lack of commitment from my partner, ultimately leading to a decision to part ways. However, the design phase provided invaluable insights into managing a startup environment and navigating early-stage development challenges.',
      },
    ],
    results: [
      {
        icon: <FaFigma />,
        title: 'Prototype Completion',
        content: 'Delivered a fully functional Figma prototype with high-fidelity designs and user flows. The prototype showcased interactive elements, custom user journeys, and an integrated habit tracker.',
      },
      {
        icon: <FaSlideshare />,
        title: 'Key Takeaways',
        content: 'Gained significant experience in product design, wireframing, and managing a startup project, even though it didn’t reach full development.',
      },
    ],
    figmaLink: 'https://figma.com',
    githubLink: null,
    canvaLink:
      'https://www.canva.com/design/DAGYgmcPfAI/VcF52ta3kBPgxeWnYSBpkg/edit?utm_content=DAGYgmcPfAI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    icon: <FaFigma />,
  },
];



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section>
      <HeadlineContainer title="Bringing Ideas to Life" tagline="Explore the work I’ve built to solve problems, enhance experiences, and push boundaries." />

      {!selectedProject ? (
        <SwiperContainer>
        <Swiper
          modules={[Pagination, Navigation]}
          
          navigation
          spaceBetween={10}
          slidesPerView={1}
          style={{ width: '100%', overflow: 'hidden' }}
        >
            {projectData.map((project) => (
              <SwiperSlide key={project.name} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ProjectCard onClick={() => setSelectedProject(project)}>
                  <ProjectHeader>
                    <ProjectTitle>{project.name}</ProjectTitle>
                  </ProjectHeader>
                  <ProjectImage src={project.image} alt={`${project.name} Preview`} />
                  <TechStack>
                    {project.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </TechStack>
                  <ProjectDescription>{project.shortDescription}</ProjectDescription>
                  <LinksContainer>
                    {project.figmaLink && (
                      <LinkButton href={project.figmaLink} target="_blank">
                        <FaFigma /> Figma
                      </LinkButton>
                    )}
                    {project.githubLink && (
                      <LinkButton href={project.githubLink} target="_blank">
                        <FaGithub /> GitHub
                      </LinkButton>
                    )}
                    {project.canvaLink && (
                      <LinkButton href={project.canvaLink} target="_blank">
                        <FaSlideshare /> Canva
                      </LinkButton>
                    )}
                  </LinksContainer>
                </ProjectCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      ) : (
        <ExpandedProject project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </Section>
  );
};

export default Projects;
