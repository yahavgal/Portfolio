import { useState } from 'react';
import {
  FaArrowLeft,
  FaGithub,
  FaSlideshare,
  FaFigma,
  FaExclamationTriangle,
  FaLightbulb,
  FaTools,
  FaTrophy,
  FaCameraRetro,
} from 'react-icons/fa';
import { MdDescription, MdEmojiEvents } from 'react-icons/md';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styled, { keyframes } from 'styled-components';

/* Styled Components */
const expandIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(20px);
  }
  60% {
    opacity: 1;
    transform: scale(1.02) translateY(0);
  }
  100% {
    transform: scale(1) translateY(0);
  }
`;

const collapseOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.98);
  }
  100% {
    opacity: 0;
    transform: scale(0.85) translateY(20px);
  }
`;

const ExpandedProjectContainer = styled.div`
  position: fixed;
  top: ${(props) => (props.cardPosition ? `${props.cardPosition.top}px` : "0")};
  left: ${(props) => (props.cardPosition ? `${props.cardPosition.left}px` : "0")};
  width: ${(props) => (props.cardPosition ? `${props.cardPosition.width}px` : "100vw")};
  height: ${(props) => (props.cardPosition ? `${props.cardPosition.height}px` : "100vh")};
  background: ${(props) =>
    props.background ? `url(${props.background}) center/cover no-repeat` : props.theme.componentBackground};
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: ${(props) => (props.isClosing ? collapseOut : expandIn)} 0.5s ease-out forwards;
  transition: all 0.4s ease-in-out;
`;

const ExpandedContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  width: 100%;
  background: rgba(${(props) => props.theme.componentBackgroundRGB}, 0.20);
  transition: filter 0.3s ease-in-out;
  
  /* Blur effect when sidebar is open */
  filter: ${(props) => (props.isSidebarOpen ? "blur(4px)" : "none")};
`;

const ExpandedHeader = styled.div`
  width: 100%;
  background: ${(props) => props.theme.componentBackground}; /* Solid background */
  padding: 14px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.textPrimary};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const TabAndContentWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.isSidebarOpen ? "200px" : "0")});
`;

const TabContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 240px; /* Slightly wider for comfort */
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.95);
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease-in-out;
  z-index: 1800;
  transform: translateX(${(props) => (props.isSidebarOpen ? "0" : "-240px")});
  padding-top: 20px;

  @media (max-width: 768px) {
    width: 60%;
    max-width: 280px;
    transform: translateX(${(props) => (props.isSidebarOpen ? "0" : "-100%")});
  }
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 3.8rem; /* Slightly taller for breathing room */
  border: none;
  background: transparent;
  color: ${(props) => (props.active ? props.theme.accent : props.theme.textPrimary)};
  font-size: 1.4rem;
  cursor: pointer;
  padding: 10px 20px;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease-in-out;
  gap: 14px;

  &:hover {
    background: rgba(${(props) => props.theme.accentRGB}, 0.15);
    color: ${(props) => props.theme.accent};
    transform: scale(1.05);
  }

  svg {
    font-size: 1.8rem; /* Slightly larger icons for visibility */
    min-width: 30px;
  }

  span {
    font-size: 1.1rem;
    white-space: nowrap; /* Prevents text wrapping */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    height: 3.5rem;
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    height: 3.2rem;
    font-size: 1rem;

    span {
      font-size: 0.9rem; /* Adjust text size for mobile */
    }
  }

  @media (max-width: 400px) {
    height: 3rem;

    svg {
      font-size: 1.4rem;
    }

    span {
      font-size: 0.85rem;
    }
  }
`;

const SidebarToggleIcon = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.85);
  color: ${(props) => props.theme.textPrimary};
  border: none;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  z-index: 1900;
  transition: all 0.3s ease-in-out;
  display: ${(props) => (props.isSidebarOpen ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${(props) => props.theme.accent};
    transform: scale(1.1);
    box-shadow: 0px 0px 10px ${(props) => props.theme.accent};
  }

  svg {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    padding: 10px;

    svg {
      font-size: 1.4rem;
    }
  }
`;

const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${(props) => (props.isSidebarOpen ? 0.5 : 0)});
  transition: background 0.3s ease-in-out;
  z-index: ${(props) => (props.isSidebarOpen ? 1700 : -1)};
  pointer-events: ${(props) => (props.isSidebarOpen ? "auto" : "none")};
`;

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

const Section = styled.div`
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 24px;
  margin: 30px 0;
  box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.1), 0 6px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease-in-out;
  border: 2px solid rgba(${(props) => props.theme.accentRGB}, 0.2);
  position: relative;
  overflow: hidden;

  /* Glowing hover effect */
  &:hover {
    box-shadow: inset 0 0 18px rgba(255, 255, 255, 0.15), 0 10px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }

  /* Animated background border effect */
  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover:before {
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    padding: 20px;
    margin: 20px 0;
  }
`;

const SectionHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 15px;
  text-align: center;
  color: ${(props) => props.theme.textPrimary};
  position: relative;

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.8px;
    margin: 0;
  }

  /* Subtle animated underline */
  &:after {
    content: "";
    width: 50px;
    height: 2px;
    background: ${(props) => props.theme.accent};
    display: block;
    margin: 5px auto 0 auto;
    transition: width 0.3s ease-in-out;
  }

  &:hover:after {
    width: 70px;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

const SectionHeadlineSecondary = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 12px;
  padding-bottom: 4px;
  border-bottom: 1.5px solid ${(props) => props.theme.accent};
  transition: border-color 0.3s ease-in-out;

  span {
    font-size: 1.1rem; /* Slightly smaller than primary */
    font-weight: 500; /* Lighter, elegant */
    color: ${(props) => props.theme.textPrimary};
    letter-spacing: 0.5px;
  }

  svg {
    font-size: 1.4rem;
    color: ${(props) => props.theme.accent};
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  &:hover {
    border-color: ${(props) => props.theme.accentDark};

    svg {
      transform: scale(1.05);
      color: ${(props) => props.theme.accentDark};
    }
  }

  @media (max-width: 600px) {
    gap: 8px;

    span {
      font-size: 1rem;
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;

const HeadlineIcon = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.accent};
`;

const HeadlineText = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
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

const FeaturesSection = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 40px;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(${(props) => props.theme.backgroundRGB}, 0.2);
    box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.07);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  border-radius: 12px;
  background: linear-gradient(
    to right,
    rgba(${(props) => props.theme.componentBackgroundRGB}, 0.7),
    rgba(${(props) => props.theme.componentBackgroundRGB}, 0.4)
  );
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  margin-bottom: 14px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  }

  span {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme.textPrimary};
  }

  @media (max-width: 600px) {
    padding: 18px 20px;
  }
`;

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
`;

const ExpandedImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 10px;
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

/* Expanded Project Component */
const ExpandedProject = ({ project, onClose, isClosing }) => {
  const [activeTab, setActiveTab] = useState('description'); // Default to description tab
  const [selectedImage, setSelectedImage] = useState(null); // For fullscreen image overlay
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For toggling sidebar

  return (
    <ExpandedProjectContainer background={project.background} isClosing={isClosing}>
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
  
      {/* Sidebar and Content Wrapper */}
      <TabAndContentWrapper>
        {!isSidebarOpen && (
          <SidebarToggleIcon onClick={() => setIsSidebarOpen(true)}>
            <BsLayoutSidebarInset />
          </SidebarToggleIcon>
        )}
  
        {/* Sidebar */}
        <TabContainer isSidebarOpen={isSidebarOpen}>
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
            active={activeTab === "features"}
            onClick={() => {
              setActiveTab("features");
              setIsSidebarOpen(false);
            }}
            isSidebarOpen={isSidebarOpen}
          >
            <FaLightbulb size={24} />
            <span>Features</span>
          </TabButton>
  
          <TabButton
            active={activeTab === "challenges"}
            onClick={() => {
              setActiveTab("challenges");
              setIsSidebarOpen(false);
            }}
            isSidebarOpen={isSidebarOpen}
          >
            <FaTools size={24} />
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
        <DarkOverlay isSidebarOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
  
        {/* Main Content */}
        <ExpandedContent isSidebarOpen={isSidebarOpen}>
          {activeTab === "description" && (
            <Section>
              <SectionHeader icon={<FaExclamationTriangle />} title="Description" />
              <SectionContent>{project.description}</SectionContent>
  
              <ScreenshotsContainer>
                <SwiperWrapper>
                  <SectionHeadlineSecondary>
                    <FaCameraRetro />
                    <span>Screenshots</span>
                  </SectionHeadlineSecondary>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={2}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      0: {
                        slidesPerView: 1,
                      }
                    }}
                  >
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
  
          {activeTab === "features" && (
            <Section>
              <SectionHeader icon={<FaExclamationTriangle />} title="Problem" />
              <SectionContent>{project.problem}</SectionContent>
  
              <SectionHeader icon={<FaLightbulb />} title="Solution" />
              <SectionContent>{project.solution}</SectionContent>
              {project.keyFeatures && (
              <FeaturesSection>
                <SectionHeadlineSecondary>
                  <FaLightbulb />
                  <span>Key Features</span>
                </SectionHeadlineSecondary>
                {project.keyFeatures.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <span>{feature}</span>
                  </FeatureItem>
                ))}
              </FeaturesSection>
            )}
            </Section>
          )}
  
          {activeTab === "challenges" && (
            <Section>
              <SectionHeader icon={<FaTools />} title="Challenges" />
              {project.challenges.map((challenge, index) => (
                <div key={index}>
                  <SectionHeadlineSecondary>
                    {challenge.icon}
                    <span>{challenge.title}</span>
                  </SectionHeadlineSecondary>
                  <SectionContent>{challenge.content}</SectionContent>
                </div>
              ))}
            </Section>
          )}
  
          {activeTab === "results" && (
            <Section>
              <SectionHeader icon={<FaTrophy />} title="Results" />
              {project.results.map((result, index) => (
                <div key={index}>
                  <SectionHeadlineSecondary>
                    {result.icon}
                    <span>{result.title}</span>
                  </SectionHeadlineSecondary>
                  <SectionContent>{result.content}</SectionContent>
                </div>
              ))}
            </Section>
          )}
        </ExpandedContent>
      </TabAndContentWrapper>
  
      {/* Fullscreen Image Overlay */}
      {selectedImage && (
        <OverlayContainer onClick={() => setSelectedImage(null)}>
          <ExpandedImage src={selectedImage} />
        </OverlayContainer>
      )}
    </ExpandedProjectContainer>
  );
};

export default ExpandedProject;
