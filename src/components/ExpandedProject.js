import { useState } from 'react';
import { FaGithub, FaFigma, FaArrowLeft, FaSlideshare, FaAnchor, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${(props) => props.theme.accent};
  margin-bottom: 15px;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  background: ${(props) => (props.active ? props.theme.accent : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : props.theme.textPrimary)};
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent};
    color: #fff;
  }
`;

const TabContent = styled.div`
  padding: 15px;
`;

/* 
  ExpandedContent:
  - Main content area for expanded project view.
  - Adjusts padding dynamically.
*/

const ExpandedProjectContainer = styled.div`
  background-color: ${(props) => props.theme.componentBackground};
  border: 2px solid ${(props) => props.theme.headerPrimary};
  border-radius: 10px;
  width: 80%; /* Prevent it from stretching too wide */
  max-width: 900px; /* Limit maximum width */
  height: auto;
  margin: auto; /* Centers it properly */
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ExpandedHeader = styled.div`
  width: 100%;
  background-color:  ${(props) => props.theme.headerPrimary};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.componentBackground};
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

const ExpandedContent = styled.div`
  padding: 25px 30px;
  height: auto;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProblemSection = styled.div`
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
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SectionDescription = styled.p`
  color: ${(props) => props.theme.textSecondary};
  text-align: left;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SectionIcon = styled.div`
  font-size: 1.5rem;
  display: flex;
  color: ${(props) => props.theme.accent};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
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
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const FeaturesList = styled.ul`
  color: ${(props) => props.theme.textPrimary};
  list-style-type: disc;
  padding-left: 20px;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
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

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

const ChallengesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Ensures proper wrapping */
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ChallengeCard = styled.div`

  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  overflow: hidden;
`;

const ChallengeHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.headerPrimary};
  padding: 10px;

  color: ${(props) => props.theme.accent};
`;

const ChallengeIcon = styled.div`
  font-size: 1.25rem;
  margin-right: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ChallengeTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ChallengeContent = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textSecondary};
  padding: 15px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ResultTitle = styled.h3`
  font-size: 1.1rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ResultContent = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ExpandedProject = ({ project, onClose }) => {
    const [activeTab, setActiveTab] = useState('description');
    const selectedProjectData = project.data;
  
    return (
      <ExpandedProjectContainer>
        <ExpandedHeader>
          <BackButton onClick={onClose}>
            <FaArrowLeft /> {project.name}
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
  
        {/* Tabs Navigation */}
        <TabContainer>
          <TabButton active={activeTab === 'description'} onClick={() => setActiveTab('description')}>
            Description
          </TabButton>
          <TabButton active={activeTab === 'problem'} onClick={() => setActiveTab('problem')}>
            Problem & Solution
          </TabButton>
          <TabButton active={activeTab === 'screenshots'} onClick={() => setActiveTab('screenshots')}>
            Screenshots
          </TabButton>
          <TabButton active={activeTab === 'challenges'} onClick={() => setActiveTab('challenges')}>
            Challenges
          </TabButton>
          <TabButton active={activeTab === 'results'} onClick={() => setActiveTab('results')}>
            Results
          </TabButton>
        </TabContainer>
  
        {/* Dynamic Content Based on Selected Tab */}
        <TabContent>
          {activeTab === 'description' && (
            <>
              <FeaturesLabel>Description</FeaturesLabel>
              <DescriptionText>{project.description}</DescriptionText>
            </>
          )}
          {activeTab === 'problem' && (
            <SectionContainer>
              <ProblemSection>
                <SectionLabel>
                  <SectionIcon><FaQuestionCircle /></SectionIcon>
                  <FeaturesLabel>Problem</FeaturesLabel>
                </SectionLabel>
                <SectionDescription>{project.problem}</SectionDescription>
              </ProblemSection>
              <ProblemSection>
                <SectionLabel>
                  <SectionIcon><FaLightbulb /></SectionIcon>
                  <FeaturesLabel>Solution</FeaturesLabel>
                </SectionLabel>
                <SectionDescription>{project.solution}</SectionDescription>
              </ProblemSection>
            </SectionContainer>
          )}
          {activeTab === 'screenshots' && (
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              spaceBetween={20}
            >
              {project.screenshots?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Screenshot ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {activeTab === 'challenges' && (
            <ChallengesContainer>
              {project.challenges.map((challenge, index) => (
                <ChallengeCard key={index}>
                  <ChallengeHeader>
                    <ChallengeIcon>{challenge.icon}</ChallengeIcon>
                    <ChallengeTitle>{challenge.title}</ChallengeTitle>
                  </ChallengeHeader>
                  <ChallengeContent>{challenge.content}</ChallengeContent>
                </ChallengeCard>
              ))}
            </ChallengesContainer>
          )}
          {activeTab === 'results' && (
            <ResultsContainer>
              {project.results.map((result, index) => (
                <ResultCard key={index}>
                  <ResultIcon>{result.icon}</ResultIcon>
                  <ResultTitle>{result.title}</ResultTitle>
                  <ResultContent>{result.content}</ResultContent>
                </ResultCard>
              ))}
            </ResultsContainer>
          )}
        </TabContent>
      </ExpandedProjectContainer>
    );
  };

  export default ExpandedProject;