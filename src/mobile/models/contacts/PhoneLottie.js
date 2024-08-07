import Lottie from "lottie-react";
import styled from "styled-components";
import Email from "../../../lottie/social-media/email.json";

import Whatsapp from "../../../lottie/social-media/whatsapp.json";
import Linked from "../../../lottie/social-media/linkedin.json";

export const EmailLottie = () => {
  return (
    <a href="mailto:supratim347@gmail.com">
      <EmailLottieContainer>
        <Lottie animationData={Email} loop={true} />
      </EmailLottieContainer>
    </a>
  );
};

export const WhatsappLottie = () => {
  return (
    <a href="https://wa.me/0682388288" target="_blank" rel="noreferrer">
      <Lottie animationData={Whatsapp} loop={true} />
      <WhatsappLottieContainer></WhatsappLottieContainer>
    </a>
  );
};
export const LinkedLottie = () => {
  return (
    <a
      href="https://www.linkedin.com/in/supratim-sarkar-3a3299150/"
      target="_blank"
      rel="noreferrer"
    >
      <LinkedLottieContainer>
        <Lottie animationData={Linked} loop={true} />
      </LinkedLottieContainer>
    </a>
  );
};
const EmailLottieContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 2000;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.4);
    border-radius: 50%;
  }
  a {
    outline: none;
  }
`;
const TwitterLottieContainer = styled(EmailLottieContainer)`
  width: 80%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* :hover {
    background-color: rgba(0, 0, 0, 1);
  } */
`;
const WhatsappLottieContainer = styled(EmailLottieContainer)`
  width: 80%;
  /* background-color: rgba(255, 255, 255, 0.5); */
  /* :hover {
    background-color: rgba(255, 255, 255, 1);
  } */
`;
const LinkedLottieContainer = styled(EmailLottieContainer)`
  /* background-color: rgba(0, 114, 177, 0.5); */
  /* :hover {
    background-color: rgba(0, 114, 177, 1);
  } */
`;
