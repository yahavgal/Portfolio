import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Confetti from "react-confetti";
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle, FaTrophy, FaFire } from "react-icons/fa";
import HeadlineContainer from "../components/HeadlineContainer";

/* 🔥 Keyframe Animations */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const explode = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(3); opacity: 0; }
`;

const popUp = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
`;

/* 🔥 Styled Components */
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  backdrop-filter: blur(12px);
  animation: ${fadeIn} 0.8s ease-out;
  position: relative;
  overflow: hidden;
`;

const ContactForm = styled.form`
  background: rgba(${(props) => props.theme.componentBackgroundRGB}, 0.8);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 90%;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease-in-out;

  ${({ isExploding }) =>
    isExploding &&
    css`
      animation: ${explode} 0.8s ease-in-out forwards;
    `}

  @media (max-width: 500px) {
    padding: 30px;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.accent};
  margin-bottom: 20px;
  font-size: 1.8rem;
  letter-spacing: 1px;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;

  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.textSecondary};
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 14px 16px 14px 44px;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.2);
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  color: ${(props) => props.theme.textPrimary};
  transition: all 0.3s ease-in-out;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.accent};
    box-shadow: 0px 0px 10px rgba(${(props) => props.theme.accentRGB}, 0.4);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  background: rgba(${(props) => props.theme.backgroundRGB}, 0.2);
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  color: ${(props) => props.theme.textPrimary};
  height: 120px;
  resize: none;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.accent};
    box-shadow: 0px 0px 10px rgba(${(props) => props.theme.accentRGB}, 0.4);
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.componentBackground};
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 12px rgba(${(props) => props.theme.accentRGB}, 0.3);

  svg {
    margin-left: 10px;
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateY(-2px);
    background: ${(props) => props.theme.accentDark};
    box-shadow: 0px 6px 18px rgba(${(props) => props.theme.accentRGB}, 0.5);
  }
`;

const SuccessMessage = styled.div`
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.accent};
  font-weight: bold;
  animation: ${popUp} 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: rgba(${(props) => props.theme.componentBackgroundRGB}, 0.8);
  padding: 40px 50px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  width: 450px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    padding: 30px;
    width: 90%;
  }
`;

const TrophyIcon = styled(FaTrophy)`
  font-size: 70px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.accent} 0%,
    ${(props) => props.theme.accentLight || '#6D5BF5'} 50%,
    #4F46E5 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 5px 12px rgba(0, 0, 0, 0.4);
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isExploding, setIsExploding] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${API_BASE_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      if (result.success) {
        setIsExploding(true);
        setTimeout(() => {
          setSubmitted(true);
        }, 800); // Matches explosion animation
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <ContactContainer>
      {submitted && <Confetti numberOfPieces={200} />}
      {submitted ? (
        <SuccessMessage>
          <TrophyIcon />
          <HeadlineContainer title="Success!" tagline="Your message has been sent successfully." />
        </SuccessMessage>
      ) : (
        <ContactForm onSubmit={handleSubmit} isExploding={isExploding}>
          <FormTitle>Let's Connect</FormTitle>
          <InputGroup>
            <FaUser />
            <InputField type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <FaEnvelope />
            <InputField type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          </InputGroup>
          <SendButton type="submit">
            Send Message <FaPaperPlane />
          </SendButton>
        </ContactForm>
      )}
    </ContactContainer>
  );
};

export default Contact;
