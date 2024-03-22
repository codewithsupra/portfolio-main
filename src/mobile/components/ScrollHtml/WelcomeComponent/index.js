import React from "react";
import styled from "styled-components";
import { ScrollLottie } from "./lottie";
import { PageContainer } from "../ScrollStyles";
import { tab } from "../../../../deviceStyle";
import ParticlesBg from "particles-bg";

// Define the URL of the image you want to use
const backgroundImageUrl =
  "https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM=";

export const WelcomeComponent = ({ opacity }) => {
  return (
    <Container opacity={opacity}>
      <Background backgroundImageUrl={backgroundImageUrl} />
      <ParticleContainer>
        <ParticlesBg type="cobweb" num={300} color="#ffffff" bg={true} />
      </ParticleContainer>
      <ScrollLottie />
      <Text>Scroll Down to Explore.</Text>
    </Container>
  );
};

const Container = styled(PageContainer)`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: transparent; /* Make the background transparent */
  color: white; /* Change text color to white */
  padding: 2rem 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the background image
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImageUrl});
  background-size: cover; /* Adjust the background size */
  background-position: center; /* Center the background image */
  z-index: -1; /* Ensure the background stays behind other content */
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Text = styled.h2`
  text-align: center;
  font-size: 45px;
  font-weight: 800;
  ${tab({
    width: "20%",
    fontSize: "60px",
  })}
`;
