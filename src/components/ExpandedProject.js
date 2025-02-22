import { useState } from 'react';
import {
  FaArrowLeft,
  FaGithub,
  FaSlideshare,
  FaFigma,
  FaExclamationTriangle, // Problem Icon
  FaLightbulb,          // Solution Icon
  FaTools,              // Challenges Icon
  FaTrophy,             // Results Icon
  FaTimes
} from 'react-icons/fa';
import { MdDescription, MdErrorOutline, MdBuild, MdEmojiEvents } from 'react-icons/md';

// Icon for toggling the sidebar on mobile
import { BsLayoutSidebarInset } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

/* --------------------- STYLED COMPONENTS --------------------- */
const ExpandedProjectContainer = styled.div`
  position: absolute; /* Makes it overlay other content */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Fully covers screen */
  background-color: ${(props) => props.theme.componentBackground};
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Ensures it's on top */
`;

const ExpandedContent = styled.div`
  flex-grow: 1;
  overflow-y: auto; /* Only scrolls content inside */
  padding: 20px;
`;



const ExpandedHeader = styled.div`
  width: 100%;
  background: rgba(${(props) => props.theme.headerPrimaryRGB}, 0.85); /* Semi-transparent for smooth UI */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 14px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textPrimary};
  border-radius: 12px 12px 0 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
`;

/* Centered Project Title */
const ProjectTitle = styled.h2`
  font-size: 1.6rem;
  color: ${(props) => props.theme.accent};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

/* Back Button */
const BackButton = styled.button`
  background: linear-gradient(145deg, ${(props) => props.theme.accent} 20%, ${(props) => props.theme.accentDark} 80%);
  border: none;
  color: ${(props) => props.theme.componentBackground};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  min-width: 44px;
  height: 44px;

  svg {
    font-size: 1.4rem;
  }

  &:hover {
    background: ${(props) => props.theme.accentDark};
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    min-width: 38px;
    height: 38px;
    padding: 6px;

    svg {
      font-size: 1.1rem;
    }
  }
`;

/* Links Container */
const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
  min-width: 120px;

  @media (max-width: 600px) {
    gap: 8px;
    min-width: auto;
  }
`;

/* Circular Link Button */
const CircleLinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.15);
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.background};
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    width: 34px;
    height: 34px;

    svg {
      font-size: 1.2rem;
    }
  }
`;



const TabAndContentWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  overflow: hidden; /* Prevents squishing */
`;

const SidebarToggleIcon = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.2);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  color: ${(props) => props.theme.accent};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  z-index: 20;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: rgba(${(props) => props.theme.accentRGB}, 0.2); /* Subtle hover effect */
  }

  svg {
    font-size: 1.3rem;
  }

  /* Only show on mobile */
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isSidebarOpen ? "none" : "block")};
  }
`;


const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.3);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  height: 100%;
  width: 5rem; /* Default collapsed width */
  position: absolute;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: ${(props) => (props.isSidebarOpen ? "55%" : "3.5rem")}; /* Smaller on mobile */
    background: ${(props) => props.theme.background};
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    max-width: 200px;
    visibility: ${(props) => (props.isSidebarOpen ? "visible" : "hidden")};
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  }
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isSidebarOpen ? "flex-start" : "center")};
  width: 100%;
  height: 3.5rem;
  border: none;
  background: transparent;
  color: ${(props) => (props.active ? props.theme.accent : props.theme.textPrimary)};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${(props) => (props.isSidebarOpen ? "0 16px" : "0")};
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease-in-out;

  &:hover {
    background: rgba(${(props) => props.theme.accentRGB}, 0.15);
    color: ${(props) => props.theme.accent};
    transform: scale(1.1);
  }

  /* RESPONSIVE STYLING */
  @media (max-width: 768px) {
    height: 3rem;
    font-size: 1.3rem;

    svg {
      font-size: 1.4rem;
      min-width: 22px; /* Prevents icon from shrinking too much */
      min-height: 22px;
    }

    span {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 600px) {
    height: 2.8rem;
    font-size: 1.2rem;

    svg {
      font-size: 1.3rem;
      min-width: 20px;
      min-height: 20px;
    }

    span {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 410px) {
    height: 2.6rem;
    font-size: 1.1rem;

    svg {
      font-size: 1.2rem;
      min-width: 18px;
      min-height: 18px; /* Ensures icons remain visible */
    }

    span {
      font-size: 0.8rem;
    }
  }

  /* Show text only when sidebar is open */
  span {
    display: ${(props) => (props.isSidebarOpen ? "inline" : "none")};
    margin-left: 12px;
    font-size: 1rem;
    white-space: nowrap; /* Prevents text from wrapping */
  }
`;





/* Reusable Sections + Headline */
const Section = styled.div`
  border-radius: 8px;
  padding: 15px;
`;

const SectionHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.textPrimary};
`;

const HeadlineIcon = styled.span`
  font-size: 1.2rem;
`;

const HeadlineText = styled.h3`
  font-size: 1.1rem;
  margin: 0;
`;

const SectionContent = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 1rem;
  margin-bottom: 15px;
  text-align: center;
`;

const ScreenshotsContainer = styled.div`
  margin-top: 20px; /* Ensures space between description and screenshots */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwiperWrapper = styled.div`
  background: ${(props) => props.theme.background}; /* Background color from theme */
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  width: 100%;
  max-width: 700px; /* Adjust as needed */
`;

const ScreenshotImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const FeaturesList = styled.ul`
  list-style-type: disc;
  margin: 0 auto;
  margin-bottom: 15px;
  max-width: 500px;
  color: ${(props) => props.theme.textPrimary};
  text-align: left;
`;

const FeatureItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.4;
`;

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ExpandedImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

/* Helper Component for Title + Icon */
function SectionHeader({ icon, title }) {
  return (
    <SectionHeadline>
      <HeadlineIcon>{icon}</HeadlineIcon>
      <HeadlineText>{title}</HeadlineText>
    </SectionHeadline>
  );
}

/* --------------------- MAIN COMPONENT --------------------- */
const ExpandedProject = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(null);

  // For mobile sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ExpandedProjectContainer>
      <ExpandedHeader>
        <BackButton onClick={onClose}>
          <FaArrowLeft />
        </BackButton>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectLinks>
          {project.githubLink && (
            <CircleLinkButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </CircleLinkButton>
          )}
          {project.canvaLink && (
            <CircleLinkButton href={project.canvaLink} target="_blank" rel="noopener noreferrer">
              <FaSlideshare />
            </CircleLinkButton>
          )}
          {project.figmaLink && (
            <CircleLinkButton href={project.figmaLink} target="_blank" rel="noopener noreferrer">
              <FaFigma />
            </CircleLinkButton>
          )}
        </ProjectLinks>
      </ExpandedHeader>

      {/* TABS + CONTENT WRAPPER */}
      <TabAndContentWrapper>
        {/* Render only when sidebar is closed */}
        {!isSidebarOpen && (
          <SidebarToggleIcon onClick={() => setIsSidebarOpen(true)}>
            <BsLayoutSidebarInset />
          </SidebarToggleIcon>
        )}
      {/* Sidebar inside the content wrapper (below header) */}
      <TabContainer isSidebarOpen={isSidebarOpen}>
        <CloseButton onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </CloseButton>
        <TabButton
          active={activeTab === "description"}
          onClick={() => {
            setActiveTab("description");
            setIsSidebarOpen(false);
          }}
          isSidebarOpen={isSidebarOpen}
        >
          <MdDescription size={24} />
          <span>Description</span>
        </TabButton>

        <TabButton
          active={activeTab === "problem"}
          onClick={() => {
            setActiveTab("problem");
            setIsSidebarOpen(false);
          }}
          isSidebarOpen={isSidebarOpen}
        >
          <MdErrorOutline size={24} />
          <span>Problem & Solution</span>
        </TabButton>

        <TabButton
          active={activeTab === "challenges"}
          onClick={() => {
            setActiveTab("challenges");
            setIsSidebarOpen(false);
          }}
          isSidebarOpen={isSidebarOpen}
        >
          <MdBuild size={24} />
          <span>Challenges</span>
        </TabButton>

        <TabButton
          active={activeTab === "results"}
          onClick={() => {
            setActiveTab("results");
            setIsSidebarOpen(false);
          }}
          isSidebarOpen={isSidebarOpen}
        >
          <MdEmojiEvents size={24} />
          <span>Results</span>
        </TabButton>
      </TabContainer>
        {/* MAIN CONTENT AREA */}
        <ExpandedContent isSidebarOpen={isSidebarOpen}>
          {activeTab === 'description' && (
            <Section>
              <SectionHeader icon={<FaExclamationTriangle />} title="Description" />
              <SectionContent>{project.description}</SectionContent>

              {/* SWIPER WITH BACKGROUND BELOW DESCRIPTION */}
              <ScreenshotsContainer>
                <SwiperWrapper>
                  <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={2}>
                    {project.screenshots.map((image, index) => (
                      <SwiperSlide key={index}>
                        <ScreenshotImage src={image} onClick={() => setSelectedImage(image)} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </SwiperWrapper>
              </ScreenshotsContainer>
            </Section>
          )}
          {activeTab === 'problem' && (
            <Section>
              <SectionHeader icon={<FaExclamationTriangle />} title="Problem" />
              <SectionContent>{project.problem}</SectionContent>

              <SectionHeader icon={<FaLightbulb />} title="Solution" />
              <SectionContent>{project.solution}</SectionContent>
            </Section>
          )}

          {activeTab === 'challenges' && (
            <Section>
              <SectionHeader icon={<FaTools />} title="Challenges" />
              {project.challenges.map((challenge, index) => (
                <div key={index}>
                  <SectionHeader icon={challenge.icon} title={challenge.title} />
                  <SectionContent>{challenge.content}</SectionContent>
                </div>
              ))}

              {project.keyFeatures && (
                <>
                  <SectionHeader icon={<FaLightbulb />} title="Key Features" />
                  <FeaturesList>
                    {project.keyFeatures.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeaturesList>
                </>
              )}
            </Section>
          )}

          {activeTab === 'results' && (
            <Section>
              <SectionHeader icon={<FaTrophy />} title="Results" />
              {project.results.map((result, index) => (
                <div key={index}>
                  <SectionHeader icon={result.icon} title={result.title} />
                  <SectionContent>{result.content}</SectionContent>
                </div>
              ))}
            </Section>
          )}
        </ExpandedContent>
      </TabAndContentWrapper>

      {/* FULLSCREEN IMAGE OVERLAY */}
      {selectedImage && (
        <OverlayContainer onClick={() => setSelectedImage(null)}>
          <CloseButton>
            <FaTimes />
          </CloseButton>
          <ExpandedImage src={selectedImage} />
        </OverlayContainer>
      )}
    </ExpandedProjectContainer>
  );
};

export default ExpandedProject;
