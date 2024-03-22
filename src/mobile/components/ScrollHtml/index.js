import { Scroll, useProgress } from "@react-three/drei";
import React, { useState } from "react";
import { WelcomeComponent } from "./WelcomeComponent";
import { NavigationText } from "./NavigationText";
import { ProfileText } from "./ProfileText";
import { SkillText } from "./SkillText";
import { ProjectText } from "./ProjectText";

export const ScrollHtml = () => {
  const { progress } = useProgress();
  const [welcomeOpacity, setWelcomeOpacity] = useState(1);
  const [navigationOpacity, setNavigationOpacity] = useState(1);
  const [profileOpacity, setProfileOpacity] = useState(1);
  const [skillOpacity, setSkillOpacity] = useState(1);

  const updateOpacity = (rangeStart, rangeEnd, setter) => {
    const opacity = 1 - progress.range(rangeStart, rangeEnd);
    setter(opacity);
  };

  return (
    <>
      <Scroll html>
        <WelcomeComponent opacity={welcomeOpacity} />
        <NavigationText opacity={navigationOpacity} />
        <ProfileText opacity={profileOpacity} />
        <SkillText opacity={skillOpacity} />
        <ProjectText />
      </Scroll>
    </>
  );
};
