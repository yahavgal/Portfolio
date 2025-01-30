import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaFigma, FaArrowLeft, FaSlideshare, FaAnchor, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import '../custom-swiper.css';
import HeadlineContainer from '../components/HeadlineContainer';


// Styled Components for Projects Section
const ProjectsContainer = styled.section`
  padding: 0 20px;
  overflow: visible;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  overflow: visible;
`;

const ProjectCard = styled.div`
  flex: 1 1 300px;
  height: 100%;
  max-width: 350px;
  background-color: ${(props) => props.theme.contrast};
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
    transform: scale(1.05);
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

const ProjectsSwiper = styled(Swiper)`
  flex: 1;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;



const ProjectDescription = styled.p`
  padding: 15px;
  font-size: 1rem;
  color: ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.contrast};
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


const ExpandedProject = styled.div`
  background-color: ${(props) => props.theme.contrast};
  border: 2px solid  ${(props) => props.theme.headerPrimary};
  border-radius: 5px;
`;

const ExpandedHeader = styled.div`
  background-color:  ${(props) => props.theme.headerPrimary};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.contrast};
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.accent};
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

/* 
  ExpandedContent:
  - Main content area for expanded project view.
  - Adjusts padding dynamically.
*/
const ExpandedContent = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionLabel = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  font-size: 18px;
  margin-top: 20px;
`;

const DescriptionText = styled.p`
  color: ${(props) => props.theme.textPrimary};
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid ${(props) => props.theme.accent};
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const SectionDescription = styled.p`
  color: ${(props) => props.theme.textSecondary};
  text-align: left;
`;

const SectionIcon = styled.div`
  font-size: 1.5rem;
  display: flex;
  color: ${(props) => props.theme.accent};
`;

const SectionText = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.accent};
`;

const SectionContainer = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.accent};
  padding: 15px;
  margin-top: 20px;
`;

const FeaturesLabel = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  font-size: 18px;
  margin-top: 20px;
`;

const FeaturesList = styled.ul`
  color: ${(props) => props.theme.textPrimary};
  list-style-type: disc;
  padding-left: 20px;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

const CircleLinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 8px;
  transition: transform 0.3s;
  margin-left: 10px;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 1.5rem;
  }
`;


const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 20px;
`;

const ChallengeCard = styled.div`
  border: 1px solid ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  overflow: hidden;
`;

const ChallengeHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.headerPrimary};
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accent};
`;

const ChallengeIcon = styled.div`
  font-size: 1.25rem;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const ChallengeTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

const ChallengeContent = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textSecondary};
  padding: 15px;
  font-size: 0.9rem;
`;

const ResultsContainer = styled.div`

  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const ResultCard = styled.div`
  flex: 1 1 150px;
  background-color: ${(props) => props.theme.headerPrimary};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;

const ResultIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: ${(props) => props.theme.accent};
`;

const ResultTitle = styled.h3`
  font-size: 1.1rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 5px;
`;

const ResultContent = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};
`;


const projectData = [
  {
    name: 'Lango',
    image: 'project-preview.jpg',
    techStack: ['Next.js', 'TailwindCSS', 'PostgreSQL'],
    shortDescription: 'A language learning app with real-time updates.',
    description: 'A language learning app with seamless UX and real-time updates.',
    problem: 'Language learners face difficulty in tracking progress effectively.',
    solution: 'Developed an intuitive platform with real-time progress tracking.',
    keyFeatures: [
      'Adaptive Learning Paths: Tailored courses based on user proficiency.',
      'Gamification: Points, levels, and rewards to keep users motivated.',
      'Community Engagement: Discussion boards and live language practice with peers.',
      'Cross-platform: React and Node.js-powered web and mobile app.',
    ],
    challenges: [
      {
        type: 'challenge',
        icon: <FaQuestionCircle />,
        title: 'Balancing Simplicity with Functionality',
        content:
          'Creating a UI that is both intuitive for beginners and functional for advanced learners was a major challenge. Resolved this by conducting user testing and iterating on feedback to enhance usability.',
      },
      {
        type: 'learning',
        icon: <FaLightbulb />,
        title: 'Real-time Data Challenges',
        content:
          'Encountered challenges with implementing real-time updates across various devices. Learned to optimize API performance and ensure consistent user experiences.',
      },
    ],
    results: [
      {
        icon: <FaAnchor />,
        title: 'User Growth',
        content: 'Achieved a 200% increase in active users within the first quarter of release.',
      },
      {
        icon: <FaGithub />,
        title: 'Retention Rate',
        content: 'Improved user retention by 40% through personalized learning paths.',
      },
    ],
    figmaLink: 'https://figma.com',
    githubLink: 'https://github.com',
    canvaLink: null,
    icon: <FaAnchor />,
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
          <HeadlineContainer
          title="Bringing Ideas to Life"
          tagline="Explore the work I’ve built to solve problems, enhance experiences, and push boundaries."
          />
            <ProjectsGrid>
            <ProjectsSwiper
              modules={[Pagination, Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
            >
              {projectData.map((project) => (
                  <SwiperSlide key={project.name}>
                    <ProjectCard onClick={() => handleCardClick(project.name)}>
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
                  </SwiperSlide>
              ))}
            </ProjectsSwiper>
            </ProjectsGrid>
        </>
      )}
      {selectedProject && (
        <ExpandedProject>
          <ExpandedHeader>
            <BackButton onClick={handleBackClick}>
              <FaArrowLeft /> {selectedProjectData.name}
            </BackButton>
              <ProjectLinks>
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
              </ProjectLinks>
          </ExpandedHeader>
          <ExpandedContent>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={50}
            >
            <SwiperSlide>
              <DescriptionLabel>Description</DescriptionLabel>
              <DescriptionText>{selectedProjectData.description}</DescriptionText>
              <SectionContainer>
                <Section>
                  <SectionLabel>
                    <SectionIcon>
                      <FaQuestionCircle />
                    </SectionIcon>
                    <SectionText>Problem</SectionText>
                  </SectionLabel>
                  <SectionDescription>{selectedProjectData.problem}</SectionDescription>
                </Section>
                <Section>
                  <SectionLabel>
                    <SectionIcon>
                      <FaLightbulb />
                    </SectionIcon>
                    <SectionText>Solution</SectionText>
                  </SectionLabel>
                  <SectionDescription>{selectedProjectData.solution}</SectionDescription>
                </Section>
              </SectionContainer>
              <FeaturesLabel>Key Features</FeaturesLabel>
              <FeaturesList>
                {selectedProjectData.keyFeatures.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
            </SwiperSlide>
            <SwiperSlide>
            <FeaturesLabel>Challenges and Learnings</FeaturesLabel>
            <ChallengesContainer>
              {selectedProjectData.challenges.map((challenge, index) => (
                <ChallengeCard key={index}>
                  <ChallengeHeader>
                    <ChallengeIcon>{challenge.icon}</ChallengeIcon>
                    <ChallengeTitle>{challenge.title}</ChallengeTitle>
                  </ChallengeHeader>
                  <ChallengeContent>{challenge.content}</ChallengeContent>
                </ChallengeCard>
              ))}
            </ChallengesContainer>
            <FeaturesLabel>Results</FeaturesLabel>
                <ResultsContainer>
                  {selectedProjectData.results.map((result, index) => (
                    <ResultCard key={index}>
                      <ResultIcon>{result.icon}</ResultIcon>
                      <ResultTitle>{result.title}</ResultTitle>
                      <ResultContent>{result.content}</ResultContent>
                    </ResultCard>
                  ))}
                </ResultsContainer>
            </SwiperSlide>
            </Swiper>
          </ExpandedContent>
        </ExpandedProject>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
