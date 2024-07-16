import React, { memo } from "react";
import styled from "styled-components";
import { BannerLottie, ScrollLottie } from "./ProjectLotties";
import { ProjectItem } from "./ProjectItem";
import Bloxx from "../../../../images/projectLogos/bloxx logo.png";
import NC from "../../../../images/projectLogos/naija_charades.jpg";
import SC from "../../../../images/projectLogos/steadCare.ico";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import GithubLogo from "../../../../images/Icons/githubLogo.png";

export const ScreenHtml = memo(({ Pos }) => {
  const ref = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    setScrollPos(Pos);
    // console.log(Pos);
  }, [Pos]);

  return (
    <Container ref={ref} top={scrollPos}>
      <Top>
        <div>
          <Header >MY PROJECTS</Header>
          <ScrollLottie />
        </div>
        <BannerLottie />
      </Top>
      <Body>
        <ProjectItem
          name={"SmartImageAI"}
          description={
            "A full-stack React application leveraging DALL-E for AI-based image generation. Features user authentication, a ranking system based on image creation, and a responsive design. Built with Node.js, Express, and PostgreSQL for robust performance and scalability."
          }
          link={`https://smartimageai.onrender.com/`}
          logo={SC}
        />
        <ProjectItem
          name={"FliterAI"}
          description={
            "A Vue.js application that lets users post photos, apply AI-driven filters, enhance images, and directly upload to social media. Features real-time image manipulation, download options, and a responsive design for an engaging user experience."
          }
          link={`https://imagefiltersvue.onrender.com/`}
          logo={NC}
        />
        <ProjectItem
          name={"ShopMania"}
          description={
            "A full-stack e-commerce application built with React, Redux, Firebase, and Stripe API. Features include user authentication, secure payment processing, and responsive UI components."
          }
          link={`https://clothing-store-u4i8.onrender.com/`}
          logo={Bloxx}
        />
        <ProjectItem
          name={"Discord Weather Bot"}
          description={
            "A Node.js-based Discord bot providing real-time weather updates via the Weather API. Features include optimized performance, scalable architecture, and interactive commands for an enhanced user experience."
          }
          link={`https://github.com/codewithsupra/discord-bot`}
          variant={true}
        />
        
        
        <ProjectItem
          name={"NASA Mission Control Application: Interstellar Launch Management System"}

          description={
            " Full-stack application built with Node.js, React, and MongoDB to schedule and manage interstellar launches. Features include a responsive UI, RESTful APIs, Docker containerization, and CI/CD pipelines. Ensures scalability and reliability with comprehensive testing and 99.9% uptime. "
          }
          variant={true}
          link={`https://github.com/codewithsupra/nasa-project`}
        />
        <ProjectItem
          name={"ChatBotPro"}
          description={
            " Developed a Nuxt.js-based ChatBot with TypeScript, leveraging the OpenAI Assistants API for advanced NLP capabilities. Features include a responsive UI, high accuracy in query resolution, and scalable deployment to handle thousands of users. "
          }
          variant={true}
          
        />
      </Body>
      <Footer>
        <GitLink
          href="https://github.com/codewithsupra"
          target="_blank"
          rel="noreferrer"
        >
          <GitImg src={GithubLogo} alt="github log" />
        </GitLink>
      </Footer>
    </Container>
  );
});

const Container = styled.div`
  padding-bottom: 50px;
  width: 100%;
  color: white;
  margin-top: ${(props) => `-${props.top}%`};
  transition: all ease 0.1s;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;
const Header = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 26px;
  font-weight: bolder;
  margin-left: 10px;
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
`;

const Footer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
const GitLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;

const GitImg = styled.img`
  width: 35px;
  height: auto;
  object-fit: contain;
`;
