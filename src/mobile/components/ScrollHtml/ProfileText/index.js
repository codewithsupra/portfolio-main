import React, { forwardRef } from "react";
import styled from "styled-components";
import { PageContainer } from "../ScrollStyles";
import { useScroll } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { SmallMobile, Smallmobile, tab } from "../../../../deviceStyle";

export const ProfileText = ({ opacity }) => {
  const scroll = useScroll();
  const [firstTextInView, setFirstTextInView] = useState(false);
  const [SecondTextInView, setSecondTextInView] = useState(false);
  const [ThirdTextInView, setThirdTextInView] = useState(false);
  const [FourthTextInView, setFourthTextInView] = useState(false);

  useFrame(() => {
    // console.log(scroll.offset);
    if (scroll.offset > 0.245) {
      setFirstTextInView(true);
    } else {
      setFirstTextInView(false);
    }
    if (scroll.offset > 0.279) {
      setSecondTextInView(true);
    } else {
      setSecondTextInView(false);
    }
    if (scroll.offset > 0.3) {
      setThirdTextInView(true);
    } else {
      setThirdTextInView(false);
    }
    if (scroll.offset > 0.4) {
      setFourthTextInView(true);
    } else {
      setFourthTextInView(false);
    }
  });

  return (
    <Container opacity={opacity}>
  <FirstText view={firstTextInView.toString()}>
    <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
      🌟 Visionary Developer:
    </h2>
    <p style={{ fontSize: '2.6rem', lineHeight: '1.6' }}>
      With a unique blend of creativity and technical expertise, I transform innovative ideas into immersive digital experiences. Building complex websites and using software to solve real-world problems is my passion.
    </p>
  </FirstText>

  <SecondText view={SecondTextInView.toString()}>
    <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
      🔍 Problem Solver:
    </h2>
    <p style={{ fontSize: '2.2rem', lineHeight: '1.6' }}>
      I excel at dissecting complex problems and devising efficient, scalable solutions. My experience includes:
      <br />
      <ul style={{ fontSize: '2.2rem', lineHeight: '1.6' }}>
        <li>Debugging and Optimization: Successfully reduced page load times by 50% for a high-traffic website.</li>
        <li>Scalable System Architecture: Designed and implemented a microservices architecture for a SaaS application, improving reliability and scalability.</li>
      </ul>
    </p>
  </SecondText>

  <ThirdText view={ThirdTextInView.toString()}>
    <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
      🌐 Tech Enthusiast & Lifelong Learner:
    </h2>
    <p style={{ fontSize: '2.2rem', lineHeight: '1.6' }}>
      Armed with both undergraduate and Master's degrees in computer science, I bring a solid foundation of technical knowledge to every project. I’m committed to continuous growth and staying ahead in the ever-evolving tech landscape. I actively participate in workshops, conferences, and online courses to expand my skills and keep up with industry advancements.
    </p>
  </ThirdText>

  <FourthText view={FourthTextInView.toString()}>
    <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
      Key Achievements:
    </h2>
    <ul style={{ fontSize: '2.2rem', lineHeight: '1.6' }}>
      <li>
        <strong>Prize Winning Developer:</strong> Recognized as the best project at Vrijie University Startup Hub for integrating healthcare with software development and AI.
      </li>
      <li>
        <strong>Open Source Contributor:</strong> Contributed to several high-profile open-source projects in ZTM and Vue GitHub repositories, enhancing functionality and fixing critical bugs.
      </li>
      <li>
        <strong>Certifications:</strong> Certified in AWS Cloud Practitioner, enhancing my ability to design and deploy scalable cloud solutions.
      </li>
    </ul>
  </FourthText>
</Container>

  );
};

const Container = styled(PageContainer)`
  position: relative;
  height: 200vh;
  color: black;

  /* background-color: red;
  opacity: 0.3; */

  /* height: 1648px; */

  padding: 10px;

  ${tab({
    padding: "0 150px"
  })}
`;

const FirstText = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1vh;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(-150%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.1s ease-in-out;
  ${tab({
    width: "60%",
    marginTop: "10px"
  })}

  h2 {
    font-weight: 500;
    text-align: left;
    font-size: 2.5vh;
    ${tab({
      fontSize: "30px"
    })}
  }
`;
const SecondText = styled.div`
  width: 80%;
  margin-left: auto;
  margin-top: 4.5vh;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(150%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.1s ease-in-out;
  ${tab({
    width: "60%"
  })}
  h2 {
    font-weight: 500;
    text-align: right;
    font-size: 2.5vh;
    ${tab({
      fontSize: "30px"
    })}
  }
`;

const ThirdText = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1vh;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  transform: ${(props) =>
    props.view === "true" ? "translateY(0)" : "translateY(50%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.1s ease-in-out;
  ${tab({
    width: "80%"
  })}
  h2 {
    font-weight: 500;
    text-align: justify;
    font-size: 2.5vh;
    ${tab({
      fontSize: "30px"
    })}
  }
`;
const FourthText = styled.div`
  position: absolute;
  width: 90%;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 10vh;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(-150%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.2s ease-in-out;
  ${tab({
    width: "50%"
  })}
  h2 {
    font-weight: 600;
    text-align: center;
    font-size: 2.5vh;

    ${tab({
      fontSize: "30px"
    })}
  }
`;
