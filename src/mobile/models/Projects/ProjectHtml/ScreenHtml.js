import React, { memo } from "react";
import styled from "styled-components";
import { BannerLottie, ScrollLottie } from "./ProjectLotties";
import { ProjectItem } from "./ProjectItem";
import Bloxx from "../../../../images/projectLogos/bloxx logo.png";
import NC from "../../../../images/projectLogos/naija_charades.jpg";
import SC from "../../../../images/projectLogos/steadCare.ico";
import JS from "../../../../images/projectLogos/js.png";
import bm from "../../../../images/projectLogos/Belgian-Malinois-dog.webp";
import store from "../../../../images/projectLogos/store.jpeg";
import face from "../../../../images/projectLogos/face.png"
import voice from "../../../../images/projectLogos/voice.png";
import weather from "../../../../images/projectLogos/weather.jpeg"
import nasaicon from "../../../../images/projectLogos/download.jpeg";
import chatbot from "../../../../images/projectLogos/chatbot.jpeg";
import notes from "../../../../images/projectLogos/notes.jpeg"
import trainer from "../../../../images/projectLogos/trainer.png"
import travel from "../../../../images/projectLogos/travel.png"
import interview from "../../../../images/projectLogos/interview.png"
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
      "A full-stack React app leveraging DALL-E for AI-based image generation. Features include user authentication, a ranking system, and responsive design."
    }
    link={`https://smartimageai.onrender.com/`}
    logo={face}  // Correct image logo
  />
  <ProjectItem
  name={"Deluxe Notes"}
  description={
    "Engineered a privacy-focused journal app with Next.js, Clerk, and EdgeStore, featuring end-to-end encryption, real-time sync, and decentralized data storage, reducing load times by 25% while maintaining complete user data ownership."
  }
  link={`https://deluxe-notes-app.vercel.app`} // Replace with the actual link
  logo={notes}
/>

<ProjectItem
  name={"AI Travel Assistant"}
  description={
    "Built an AI-driven platform delivering real-time, adaptive itineraries, cutting setup time by 30%. Enabled seamless, personalized trips without agency reliance. React, TypeScript, Tailwind, Gemini AI, PostgreSQL."
  }
  link={`https://ai-travel-planner-saas.vercel.app`} // Replace with the actual link
  logo={travel}
/>

<ProjectItem
  name={"AceAI Coach"}
  description={
    "Launched a platform offering personalized mock interviews with real-time, AI-based assessments, enhancing preparation for 200+ users weekly. Next.js, React, Drizzle ORM, Gemini AI, Clerk."
  }
  link={`https://mock-interview-ai-assistant.vercel.app`} // Replace with the actual link
  logo={interview}
/>

<ProjectItem
  name={"LangQuest"}
  description={
    "Pioneered a language-learning platform offering real-world conversation simulations and adaptive learning via voice input, boosting daily users by 40%. Next.js, React, Redux, Shadcn/ui, ElevenLabs."
  }
  link={`https://lang-quest-app.vercel.app/`} // Replace with the actual link
  logo={trainer}
/>

  <ProjectItem
    name={"VoiceBased-Web-Browser"}
    description={
      "A voice-controlled web browser, designed for accessibility, enabling web navigation through speech input."
    }
    link={`https://github.com/codewithsupra/VoiceBased-Web-Browser`}
    logo={voice}
  />

  <ProjectItem
    name={"Dog Breed Classifier"}
    description={
      "A machine learning project using TensorFlow to classify dog breeds through image uploads."
    }
    link={`https://github.com/codewithsupra/Dog-breed-classifier-using-Transfer-Learning-and-TensorFlow`}
    logo={bm}
  />

  <ProjectItem
    name={"FliterAI"}
    description={
      "A Vue.js app for applying AI-driven filters to photos, offering real-time image manipulation and a responsive user experience."
    }
    link={`https://imagefiltersvue.onrender.com/`}
    logo={NC}
  />

  <ProjectItem
    name={"ShopMania"}
    description={
      "A full-stack e-commerce platform built with React, Redux, Firebase, and Stripe API. It features user authentication, payment integration, and a responsive UI."
    }
    link={`https://clothing-store-u4i8.onrender.com/`}
    logo={Bloxx}
  />

  <ProjectItem
    name={"Discord Weather Bot"}
    description={
      "A Node.js-based Discord bot offering real-time weather updates via the Weather API."
    }
    link={`https://github.com/codewithsupra/discord-bot`}
    logo={weather}
  />

  <ProjectItem
    name={"NASA Mission Control Application"}
    description={
      "Full-stack app built with Node.js, React, and MongoDB for managing interstellar launches, featuring RESTful APIs, Docker, and CI/CD pipelines."
    }
    link={`https://github.com/codewithsupra/nasa-project`}
    logo={nasaicon}
  />

  <ProjectItem
    name={"ChatBotPro"}
    description={
      "A Nuxt.js-based chatbot leveraging OpenAI API for advanced NLP capabilities, with high accuracy and scalable deployment."
    }
    logo={chatbot}
  />

  <ProjectItem
    name={"Pong Game"}
    description={"A JavaScript-based Pong game where users can play this retro-style game in the browser."}
    link={`https://codewithsupra.github.io/Pong-game/`}
    logo={JS}
  />

  <ProjectItem
    name={"Math Quiz"}
    description={"A math quiz app built with JavaScript that generates random questions and checks answers in real-time."}
    link={`https://codewithsupra.github.io/Math-Quiz/`}
    logo={JS}
  />

  <ProjectItem
    name={"Paint.js"}
    description={"A browser-based paint app built with JavaScript, allowing users to create sketches and digital art."}
    link={`https://codewithsupra.github.io/Paint.js/`}
    logo={JS}
  />

  <ProjectItem
    name={"Spock Rock Game"}
    description={"A fun Star Trek-inspired Spock-Rock game built with JavaScript for browser-based gameplay."}
    link={`https://codewithsupra.github.io/Spock-Rock-Game/`}
    logo={JS}
  />

  <ProjectItem
    name={"VideoStreamerOffline"}
    description={"Stream your favorite videos offline directly in the browser."}
    link={`https://codewithsupra.github.io/VideoStreamerOffline/`}
    logo={JS}
  />

  <ProjectItem
    name={"Countdown Timer"}
    description={"A customizable countdown timer built with JavaScript."}
    link={`https://codewithsupra.github.io/Countdown-Timer/`}
    logo={JS}
  />

  <ProjectItem
    name={"Web Music Player"}
    description={"A music player that streams songs offline with weekly updates."}
    link={`https://codewithsupra.github.io/Web-Music-Player/`}
    logo={JS}
  />

  <ProjectItem
    name={"UIDarkMode"}
    description={"A CSS-based dark-mode portfolio template with sleek, modern design."}
    link={`https://codewithsupra.github.io/CoolPortfoDarkMode/`}
    logo={SC}
  />

  <ProjectItem
    name={"Joke of the Day"}
    description={"A daily joke generator app built with JavaScript, allowing users to share jokes with friends."}
    link={`https://codewithsupra.github.io/Joke-of-the-Day/`}
    logo={JS}
  />

  <ProjectItem
    name={"Multitasking Streamer"}
    description={"A Picture-in-Picture web app that allows users to stream videos in a floating window while multitasking."}
    link={`https://codewithsupra.github.io/Multitasking-Streamer/`}
    logo={SC}
  />

  <ProjectItem
    name={"Quiz Generator with JavaScript"}
    description={"A dynamic quiz generator app built with JavaScript."}
    link={`https://codewithsupra.github.io/Quiz-Generator-with-Javascript/`}
    logo={JS}
  />

  <ProjectItem
    name={"Quote Generator"}
    description={"A stylish quote generator app allowing users to generate and share random quotes."}
    link={`https://codewithsupra.github.io/Quote-generator/`}
    logo={JS}
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
