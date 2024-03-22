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
        <h2>
        🚀 Innovative Software Engineer: Welcome to my digital domain! I'm Supratim, a passionate and innovative software engineer dedicated to pushing the boundaries of technology. 


        </h2>
      </FirstText>
      <SecondText view={SecondTextInView.toString()}>
        <h2>
        🌟 Creative Visionary: Step into my world, where creativity meets technology in perfect harmony. As a creative visionary, I thrive on transforming ideas into immersive digital experiences. Armed with a diverse skill set and a boundless imagination, I craft elegant solutions that captivate users and leave a lasting impression. From crafting captivating websites to developing cutting-edge applications, I strive to deliver projects that not only meet but exceed expectations.


        </h2>
      </SecondText>
      <ThirdText view={ThirdTextInView.toString()}>
        <h2>
        🔍 Problem Solver Extraordinaire: Dive into the realm of possibilities with me, where every challenge is an opportunity for innovation. As a problem solver extraordinaire, I relish in dissecting complex problems and devising elegant solutions. Whether it's debugging code, optimizing performance, or architecting scalable systems, I approach each task with meticulous attention to detail and a passion for excellence.
        </h2>
      </ThirdText>
      <FourthText view={FourthTextInView.toString()}>
        <h2>
        🌐 Tech Enthusiast & Lifelong Learner:With a solid foundation built upon both undergraduate and Master's degrees, I bring a wealth of technical expertise to the table and always strive to learn and achieve more. Join me on a journey of continuous growth and exploration in the ever-evolving world of technology. As a tech enthusiast and lifelong learner, I am deeply committed to staying abreast of the latest trends and advancements in the industry. From attending workshops and conferences to diving into online courses, I embrace every opportunity to expand my skill set and deepen my expertise, ensuring that I remain at the forefront of innovation.
        </h2>
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
