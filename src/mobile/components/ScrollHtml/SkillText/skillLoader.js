import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { LargeScreen, fourK, tab } from "../../../../deviceStyle";

export const SkillLoader = ({ name, logo, offsetEnter, offsetLeave }) => {
  const scroll = useScroll();

  const [showSkill, setShowSkill] = useState(false);

  useFrame(() => {
    if (scroll.offset > offsetEnter && scroll.offset < offsetLeave) {
      setShowSkill(true);
    } else {
      setShowSkill(false);
    }
  });

  return (
    <Container view={showSkill.toString()}>
      <IconContainer>
        <Icon src={logo} alt={name} />
      </IconContainer>
      <Title>{name}</Title>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1vh;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  width: 100%;
  border-top: 1px solid white;
  transition: all ease 0.2s;
  box-sizing: border-box;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(100vw)"};

  :hover {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
  }
  ${tab({
    height: "120px",
    marginBottom: "10px",
    padding: "10px 40px"
  })}
  ${LargeScreen({
    height: "140px",
    marginBottom: "30px",
    padding: "10px 50px"
  })}
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: fill;
  border-radius: 50%;
  ${LargeScreen({
    height: "80px",
    width: "80px"
  })}
  ${tab({
    height: "60px",
    width: "60px"
  })}
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 20px;
  text-align: center;
  ${tab({
    fontSize: "20px"
  })}
  ${LargeScreen({
    fontSize: "24px"
  })}
`;
