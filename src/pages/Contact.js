import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

/* Styled Components */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  backdrop-filter: blur(12px);
  animation: ${fadeIn} 0.8s ease-out;
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

/* Main Component */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };
  

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit}>
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
    </ContactContainer>
  );
};

export default Contact;
